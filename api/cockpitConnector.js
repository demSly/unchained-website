const fetch = require('node-fetch');
const NodeCache = require('node-cache');

const {
  NODE_ENV,
  CMS_TOKEN,
  CMS_ENDPOINT,
} = process.env;

// set staleness of cockpit cache for dev and prod
const cockpitCache = new NodeCache((NODE_ENV === 'production')
  ? { stdTTL: 90, checkperiod: 30 } // 2 minutes lag in production
  : { stdTTL: 5, checkperiod: 2 }); // 7 seconds lag in development

class CockpitConnector {
  constructor(language) {
    this.language = language;
    this.token = CMS_TOKEN;
    this.endpoint = CMS_ENDPOINT;
  }

  baseUrl() {
    return `${this.endpoint}/api`;
  }

  baseUrlForCollection(collectionName) {
    return `${this.baseUrl()}/collections/get/${collectionName}?token=${this.token}&lang=${this.language}`;
  }

  baseUrlForRegion(regionName) {
    return `${this.baseUrl()}/regions/data/${regionName}?token=${this.token}`;
  }

  async fetchCachedJSON(url) {
    try {
      const cachedResponse = cockpitCache.get(url);
      if (cachedResponse) {
        console.log(`Cockpit -> fetchCachedJSON(${url.replace(this.token,'****')})) -> SERVE FROM CACHE`); // eslint-disable-line
        return cachedResponse;
      }
      console.log(`Cockpit -> fetchCachedJSON(${url.replace(this.token,'****')})) -> SERVE FROM COCKPIT`); // eslint-disable-line
      const response = await fetch(url);
      const json = await response.json();
      cockpitCache.set(url, json);
      return json;
    } catch (error) {
      console.warn(error); // eslint-disable-line
      throw new Error('Could not get the requested data from CockpitCMS');
    }
  }

  async find(collectionName, params = {}, limit = 0, skip = 0, sortParams = {}) {
    const filters = Object.keys(params).map(key => `filter[${key}]=${params[key]}`);
    const sorters = Object.keys(sortParams).map(key => `sort[${key}]=${sortParams[key]}`);
    const requestUrl = `${this.baseUrlForCollection(collectionName)}&limit=${limit}&skip=${skip}&${filters.concat(sorters).join('&')}`;
    const json = await this.fetchCachedJSON(requestUrl);
    console.log(`find(${collectionName}, ${this.language}, ${skip}:${limit}): ${json.entries && json.entries.length} entries`); // eslint-disable-line
    return json.entries || [];
  }

  async findOne(collectionName, value, key = '_id') {
    const requestUrl = `${this.baseUrlForCollection(collectionName)}&limit=1&filter[${key}]=${value}`;
    const json = await this.fetchCachedJSON(requestUrl);
    console.log(`findOne(${collectionName}, ${this.language}, ${key}=${value}): ${json.entries && json.entries.length} entries`); // eslint-disable-line
    return json.entries && json.entries.length > 0 && json.entries[0];
  }

  async getRegionData(regionName) {
    const requestUrl = `${this.baseUrlForRegion(regionName)}`;
    const regionObject = await this.fetchCachedJSON(requestUrl);
    console.log(`getRegionData(${regionName}): ${regionObject && Object.keys(regionObject).length} entries`); // eslint-disable-line
    const newObject = {};
    const defaultObject = {};
    Object.keys(regionObject)
      .forEach((key) => {
        let languageNeutralKey = key;
        let defaultKey = true;
        const splittedKey = key.split('_');
        const removedPart = splittedKey.splice(-1, 1);
        if (removedPart && removedPart.length === 1 && removedPart[0].length === 2) {
          languageNeutralKey = splittedKey.join('_');
          defaultKey = false;
        }
        if (key.indexOf(`_${this.language}`) !== -1 && regionObject[key] !== '') {
          newObject[languageNeutralKey] = regionObject[key];
        } else if (defaultKey) {
          defaultObject[languageNeutralKey] = regionObject[key];
        }
      });
    return {
      ...defaultObject,
      ...newObject,
    };
  }

  async thumbnail(picturePath, width, height, anchor, mode) {
    const path = `${this.endpoint}/api/cockpit/image?token=${this.token}`;
    const queryParams = [
      `src=/${picturePath}`,
    ];
    if (width) queryParams.push(`w=${width}`);
    if (height) queryParams.push(`h=${height}`);
    if (anchor) queryParams.push(`fp=${anchor}`);
    if (mode) queryParams.push(`mode=${mode}`);
    const requestUrl = `${path}&${queryParams.join('&')}`;
    console.log(`request: ${requestUrl.replace(this.token,'****')}`); // eslint-disable-line
    const response = await fetch(requestUrl);
    const thumbnailUrl = await response.text();
    try {
      const tryParsing = JSON.parse(thumbnailUrl);
      if (tryParsing.error) {
        throw new Error(tryParsing.error, 'json');
      }
    } catch (error) {
      if (error instanceof SyntaxError) {
        // drop! json error = !error
      } else {
        throw new Error(error);
      }
    }
    return thumbnailUrl;
  }
}

module.exports = CockpitConnector;
