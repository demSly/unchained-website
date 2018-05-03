import cookies from 'next-cookies';
import locale from 'locale';
import url from 'url';
import { bestLocaleFor } from './LocaleHelpers';

const defaultLocale = new locale.Locale('en_CH');

const supportedLocaleStrings = [
  'en_CH',
  'en_US',
  // 'en_FR',
  // 'en_DE',
  // 'de_CH',
  // 'de_FR',
  // 'de_DE',
  // 'fr_CH',
  // 'fr_FR',
  // 'fr_DE',
];
const supportedLocales = new locale.Locales(supportedLocaleStrings, supportedLocaleStrings[0]);
let acceptLocales;
let queryLocale;
let cookieLanguage;
let resolved;
let resolvedCountry;

export const getLocale = () => {
  if (process.browser) {
    return new locale.Locale(window.document.documentElement.lang).normalized;
  } else if (!resolved) {
    return defaultLocale.normalized;
  }
  return resolved;
};

export const setAcceptLocale = (acceptsRaw) => {
  acceptLocales = new locale.Locales(acceptsRaw);
};

export const setQueryLanguage = (queryRaw) => {
  queryLocale = new locale.Locale(queryRaw);
};

export const setCookieLanguage = (cookieLanguageRaw) => {
  cookieLanguage = cookieLanguageRaw;
};

export const resolveCountry = (context) => {
  const cookieData = cookies(context);
  const urlParts = context.req && context.req.url && url.parse(context.req.url, true);
  const query = (urlParts && urlParts.query) || {};

  const cookieCountry = cookieData.country;
  const queryCountry = query.country;
  console.log(`country-detection: cookie country is **${cookieCountry}**`); // eslint-disable-line
  console.log(`country-detection: query country is **${queryCountry}**`); // eslint-disable-line
  if (queryCountry) {
    resolvedCountry = queryCountry;
  } else if (cookieCountry) {
    resolvedCountry = cookieCountry;
  }
  console.log(`country-detection: set country to **${resolvedCountry} **`); // eslint-disable-line
  return resolvedCountry;
};

export const resolveLocale = (context) => {
  setAcceptLocale(context.req.headers['accept-language']);
  const cookieData = cookies(context);
  setCookieLanguage(cookieData.language);
  const urlParts = url.parse(context.req.url, true);
  const query = (urlParts && urlParts.query) || {};
  setQueryLanguage(query.language);

  const headerLocale = acceptLocales.best(supportedLocales);
  console.log(`locale-detection: browser locale is **${headerLocale.normalized}**`); // eslint-disable-line
  console.log(`locale-detection: cookie language is **${cookieLanguage}**`); // eslint-disable-line
  console.log(`locale-detection: query locale is **${queryLocale.normalized}**`); // eslint-disable-line
  if (queryLocale.normalized) {
    if (queryLocale.country) {
      resolved = queryLocale.normalized;
    } else {
      resolved = bestLocaleFor({
        language: queryLocale.language,
        country: headerLocale.country,
      });
    }
  } else if (cookieLanguage && cookieLanguage !== headerLocale.language) {
    resolved = bestLocaleFor({
      language: cookieLanguage,
      country: headerLocale.country,
    });
  } else if (headerLocale.normalized) {
    resolved = headerLocale.normalized;
  } else {
    resolved = defaultLocale.normalized;
  }
  console.log(`locale-detection: set locale to **${resolved} **`); // eslint-disable-line
  return resolved;
};
