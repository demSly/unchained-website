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
      <link href="https://fonts.googleapis.com/css?family=Roboto+Mono:400,500" rel="stylesheet" key="mono font" />

      <link rel="apple-touch-icon" sizes="57x57" href="/static/img/apple-icon-57x57.png" />
      <link rel="apple-touch-icon" sizes="60x60" href="/static/img/apple-icon-60x60.png" />
      <link rel="apple-touch-icon" sizes="72x72" href="/static/img/apple-icon-72x72.png" />
      <link rel="apple-touch-icon" sizes="76x76" href="/static/img/apple-icon-76x76.png" />
      <link rel="apple-touch-icon" sizes="114x114" href="/static/img/apple-icon-114x114.png" />
      <link rel="apple-touch-icon" sizes="120x120" href="/static/img/apple-icon-120x120.png" />
      <link rel="apple-touch-icon" sizes="144x144" href="/static/img/apple-icon-144x144.png" />
      <link rel="apple-touch-icon" sizes="152x152" href="/static/img/apple-icon-152x152.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/static/img/apple-icon-180x180.png" />
      <link rel="icon" type="image/png" sizes="48x48" href="/static/img/android-icon-48x48.png" />
      <link rel="icon" type="image/png" sizes="72x72" href="/static/img/android-icon-72x72.png" />
      <link rel="icon" type="image/png" sizes="96x96" href="/static/img/android-icon-96x96.png" />
      <link rel="icon" type="image/png" sizes="144x144" href="/static/img/android-icon-144x144.png" />
      <link rel="icon" type="image/png" sizes="192x192" href="/static/img/android-icon-192x192.png" />
      <link rel="icon" type="image/png" sizes="192x192" href="/static/img/android-chrome-192x192.png" />
      <link rel="icon" type="image/png" sizes="384x384" href="/static/img/android-chrome-384x384.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/static/img/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="96x96" href="/static/img/favicon-96x96.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/static/img/favicon-16x16.png" />
      <link rel="shortcut icon" href="/static/img/favicon.ico" />
      <link rel="manifest" href="/static/img/manifest.json" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-TileImage" content="/static/img/ms-icon-144x144.png" />
      <meta name="theme-color" content="#ffffff" />

      <meta property="og:site_name" content="Unchained Commerce - Digital Commerce Platform made for Enterprises" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://unchained.shop" />
      <meta property="og:title" content="Use Headless Commerce Technology Today | Unchained Commerce" />
      <meta property="og:image" content="https://unchained.shop/static/img/we-are-open.jpg" />

      <link href="/static/css/all.css" rel="stylesheet" key="css" />
      {title && (
      <title key="title">
        Unchained -&nbsp;
        {title}
      </title>
      )}
      {metaDescription && (<meta content={metaDescription} name="description" hidden={!metaDescription} key="meta description" />)}
    </Head>
    {children}
    <style jsx global>
      {`
    /* Colors */

    .c-primary {
      color: ${variables.primaryColor} !important;
    }

    .c-bg-primary {
      background-color: ${variables.primaryColor} !important;
    }

    .c-bg-secondary {
      background-color: ${variables.secondaryColor} !important;
      color: #555555;
    }

    .c-bg-dark {
      background-color: #182538 !important;
      background-image: linear-gradient(to bottom right, #182538, #1f263b);
    }

    .c-bg-dark .wrap * {
      color: white;
    }

    .c-bg-dark .wrap .field__input {
      color: #333333;
    }

    .c-bg-dark .footer * {
      color: inherit;
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
    .stage {
      padding: 1em;
      border-top: 1em solid ${variables.grayColor};
      border-top-left-radius: 1em;
      border-top-right-radius: 1em;
      box-shadow: 0 3px 6px 1px rgba(0,0,0,0.08), 0 7px 14px 1px rgba(50,50,93,0.1);
    }
    `}
    </style>
  </main>
);

export default compose(connectGoogleAnalytics)(Layout);
