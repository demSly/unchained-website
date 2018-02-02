const crypto = require('crypto');

const {
  ASSET_URL_PREFIX,
} = process.env;

const hash = text => crypto
  .createHash('md5')
  .update(text, 'utf8')
  .digest('hex');

module.exports = {
  async thumbnail(picture, {
    width, height, mode, anchor,
  }, { api }) {
    const thumbnailUrl = await api.thumbnail(picture.path, width, height, anchor, mode);
    return `${ASSET_URL_PREFIX}${thumbnailUrl}`;
  },
  _id(picture) {
    return hash(picture.path);
  },
  url(picture) {
    const fixedPath = `/${picture.path}`.split('//').join('/');
    const url = `${ASSET_URL_PREFIX}${fixedPath}`;
    return url;
  },
  title(picture) {
    return (picture.meta && picture.meta.title && picture.meta.title !== '') ?
      picture.meta.title : null;
  },
};
