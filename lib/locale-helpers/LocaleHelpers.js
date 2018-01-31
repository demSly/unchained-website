import * as Locales from './Locales';
import * as Languages from './Languages';

export const bestLocaleFor = ({ language, country = 'ZZ' }) => {
  const locale = `${language}_${country}`;

  // For valid locales, just return the locale
  if (Locales.all.includes(locale)) {
    return locale;
  }

  const langaugeLargestCountry = Languages.largestCountries[language];
  if (langaugeLargestCountry && Locales.all.includes(`${language}_${langaugeLargestCountry}`)) {
    return `${language}_${langaugeLargestCountry}`;
  }

  const validLocale = Locales.all.find(curLocale => (curLocale.substr(0, 2) === language));
  if (validLocale) {
    return validLocale;
  }

  // If all else fails, use English (United States)
  return 'en_US';
};

export default bestLocaleFor;
