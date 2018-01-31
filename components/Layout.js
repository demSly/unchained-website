import 'core-js/fn/string/ends-with';
import 'core-js/fn/array/find';
import 'core-js/fn/symbol';
import 'core-js/es6/symbol';

import React from 'react';
import Head from 'next/head';
import { compose } from 'recompose';
import connectGoogleAnalytics from '../lib/hoc/connectGoogleAnalytics';
import variables from '../styles/variables';

const Layout = ({
  children, title, metaDescription, className = '',
}) => (
  <main className={className}>
    <Head>
      <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
      <meta httpEquiv="Content-Security-Policy" content="default-src * 'self' data: 'unsafe-inline' 'unsafe-eval' *" />
      <meta httpEquiv="Content-Security-Policy" content="script-src * 'self' data: 'unsafe-inline' 'unsafe-eval' *" />
      <meta charSet="utf-8" />
      <meta content="telephone=no" name="format-detection" />
      <meta content="width=device-width, initial-scale=1.0" name="viewport" />
      <link rel="apple-touch-icon" sizes="180x180" href="/static/img/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/static/img/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/static/img/favicon-16x16.png" />
      <link rel="shortcut icon" href="/static/img/favicon.ico" />
      <link href="/static/css/all.css" rel="stylesheet" />
      {title && (<title>Unchained - {title}</title>)}
      {metaDescription && (<meta content={metaDescription} name="description" hidden={!metaDescription} />)}
    </Head>
    {children}
    <style jsx global>{`
    /* Colors */

    .c-primary {
      color: ${variables.primaryColor} !important;
    }

    .c-bg-primary {
      background-color: ${variables.primaryColor} !important;
    }

    .c-black,
    .c-font {
      color: ${variables.fontColor} !important;
    }

    .c-bg-dark {
      background-color: ${variables.darkColor} !important;
    }

    .c-gray {
      color: ${variables.darkGrayColor} !important;
    }

    .c-bg-gray {
      background-color: ${variables.grayColor} !important;
    }

    .c-white {
      color: white;
    }

    .clearfix {
      clear: both;
      content: "";
      display: table;
    }

    * {
      box-sizing: border-box;
    }

    html {
      font-family: ${variables.primaryFont};
    }

    body {
      line-height: ${variables.bodyLineHeight};
      color: ${variables.fontColor};
      font-size: 125%;
      font-weight: 300;
    }

    @media ${variables.mq.big} {
      body:before, body:after {
          content: "";
          position: fixed;
          background: ${variables.secondaryColor};
          left: 0;
          right: 0;
          height: 10px;
          z-index: 100;
      }
      body:before {
          top: 0;
      }
      body:after {
          bottom: 0;
      }
      body {
        font-size: 135%;
        border-left: 10px solid ${variables.primaryColor};
        border-right: 10px solid ${variables.primaryColor};
      }
    }


    h1, h2, h3, h4, h5, h6 {
      font-weight: 300;
      line-height: 1.1;
    }

    img {
      max-width: 100%;
    }

    a {
      text-decoration: none;
      color: inherit;
    }

    ul {
      margin-left: -1em;
    }

    small {
      font-size: 16px;
    }

    p {
      line-height: 1.5;
    }

    address {
      font-style: normal;
    }

    .link {
      cursor: pointer;
      color: ${variables.secondaryColor};
    }

    .underline {
      text-decoration: underline;
    }

    .section {
      margin-bottom: 3em;
    }
    `}
    </style>
  </main>
);

export default compose(connectGoogleAnalytics)(Layout);
