import 'core-js/es6';
import React from 'react';
import Head from 'next/head';
import { compose } from 'recompose';
import connectGoogleAnalytics from '../lib/connectGoogleAnalytics';
import variables from '../styles/variables';

const Layout = ({
  children, title, metaDescription, className = '',
}) => (
  <main className={className}>
    <Head>
      <meta content="IE=edge" httpEquiv="X-UA-Compatible" key="edge-compatibility" />
      <meta charSet="utf-8" key="charset" />
      <meta content="telephone=no" name="format-detection" key="format-detection" />
      <meta content="width=device-width, initial-scale=1.0" name="viewport" key="viewport" />
      <meta name="google-site-verification" content="Z9rrptXszSZyyIclbbA3_0ED9bte4dn3dz5QsivMUEU" key="google site verification" />
      <link href="https://fonts.googleapis.com/css?family=Montserrat:600,700,800,900|Roboto+Mono:400,500" rel="stylesheet" key="mono font" />
      <link rel="apple-touch-icon" sizes="180x180" href="/static/img/apple-touch-icon.png" key="icon_180" />
      <link rel="icon" type="image/png" sizes="32x32" href="/static/img/favicon-32x32.png" key="icon_32" />
      <link rel="icon" type="image/png" sizes="16x16" href="/static/img/favicon-16x16.png" key="icon_16" />
      <link rel="shortcut icon" href="/static/img/favicon.ico" key="favicon" />
      <link href="/static/css/all.css" rel="stylesheet" key="css" />
      {title && (<title key="title">Unchained - {title}</title>)}
      {metaDescription && (<meta content={metaDescription} name="description" hidden={!metaDescription} key="meta description" />)}
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

    .c-bg-secondary {
      background-color: ${variables.secondaryColor} !important;
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
      font-size: 100%;
      font-weight: 400;
    }

    @media ${variables.mq.big} {
      body:before, body:after {
          content: "";
          position: fixed;
          background: ${variables.secondaryColor};
          left: 0;
          right: 0;
          height: 12px;
          z-index: 100;
      }
      body:before {
          top: 0;
      }
      body:after {
          bottom: 0;
      }
      body {
        font-size: 115%;
        border-left: 12px solid ${variables.secondaryColor};
        border-right: 12px solid ${variables.secondaryColor};
      }
    }

    h1, h2, h3, h4, h5, h6 {
      font-weight: 500;
      line-height: 1.3;
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
      line-height: 1.7125;
    }

    address {
      font-style: normal;
    }

    .site-content {
      min-height: 680px;
    }
    @media ${variables.mq.big} {
      .site-content {
        min-height: 840px;
      }
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
