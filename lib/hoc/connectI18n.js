import PropTypes from 'prop-types';
import moment from 'moment';
import { compose, withPropsOnChange, withContext, nest, pure } from 'recompose';
import { IntlProvider, injectIntl, addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import fr from 'react-intl/locale-data/fr';
import de from 'react-intl/locale-data/de';
import withRegion from './withRegion';
import { getLocale } from '../locale';

const localeData = [...en, ...de, ...fr];

const ConfiguredIntlProvider = compose(
  withRegion('translations'),
  withPropsOnChange(['loading'], ({ translations }) => {
    const locale = getLocale();
    moment.locale(locale);
    addLocaleData(localeData);
    console.log(`react-intl: initialized with ${locale} ${process.browser ? '(browser)' : '(server)'}`); // eslint-disable-line
    return {
      initialNow: new Date(),
      locale: locale.replace('_', '-'),
      messages: translations,
    };
  }),
  withContext({
    locale: PropTypes.string,
  }, ({ locale }) => ({
    locale,
  })),
  pure,
)(IntlProvider);

export default Component => nest(ConfiguredIntlProvider, injectIntl(Component));
