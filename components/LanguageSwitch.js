import React from 'react';
import cookie from 'cookie';
import PropTypes from 'prop-types';
import {
  compose, getContext, mapProps, withHandlers,
} from 'recompose';

const LanguageSwitch = ({ language, setLanguage, ...rest }) => (
  <div className="lang-switch" {...rest}>
    <a
      className={`lang-switch__link ${language === 'de' ? 'is-active' : ''}`}
      data-lang="de"
      hrefLang="de"
      lang="de"
      href=""
      onClick={setLanguage}
    >
DE
    </a>
    <span className="pipe">
|
    </span>
    <a
      className={`lang-switch__link ${language === 'en' ? 'is-active' : ''}`}
      hrefLang="en"
      lang="en"
      data-lang="en"
      href=""
      onClick={setLanguage}
    >
EN
    </a>

    <style jsx>
      {`

      .lang-switch__link {
        display: inline;
        font-size: 16px;
      }

      .lang-switch__link.is-active {
        font-weight: bold;
      }

      .pipe {
        font-size: 16px;
        margin: 0 8px;
      }

    `}
    </style>

  </div>
);

export default compose(
  getContext({
    locale: PropTypes.string,
  }),
  withHandlers({
    setLanguage: () => (element) => {
      const language = element.target.getAttribute('data-lang');
      if (document) {
        document.cookie = cookie.serialize('language', language, { path: '/' });
      }
    },
  }),
  mapProps(({ locale, ...rest }) => ({
    language: locale.substr(0, 2).toLowerCase(),
    ...rest,
  })),
)(LanguageSwitch);
