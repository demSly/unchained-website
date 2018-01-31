import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { getLocale } from '../lib/locale';

const {
  NODE_ENV,
  TRACKING_CODE,
  GRAPHQL_ENDPOINT,
  DEBUG,
} = process.env;

const injectScript = `
  try {
    Typekit.load({ async: false });
  } catch(e) {
    console.log(e)
  }
  !(function (f, b, e, v, n, t, s) {
    if (f.fbq) return; n = f.fbq = function () {
      n.callMethod ?

        n.callMethod(...arguments) : n.queue.push(arguments);
    };

    if (!f._fbq)f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0';

    n.queue = []; t = b.createElement(e); t.async = !0;

    t.src = v; s = b.getElementsByTagName(e)[0];

    s.parentNode.insertBefore(t, s);
  }(
    window, document, 'script',

    'https://connect.facebook.net/en_US/fbevents.js',
  ));

  fbq('init', '171159770158129');
  fbq('track', 'PageView');

  <!-- End Facebook Pixel Code -->
  window.ENV = '${JSON.stringify({
    NODE_ENV, TRACKING_CODE, GRAPHQL_ENDPOINT, DEBUG,
  })}';
`;

export default class IntlDocument extends Document {
  static async getInitialProps(context) {
    // resolve to supported language, trying the cookie and second the accept-language!
    // setting the cookie and refreshing the page will lead to another language
    const props = await super.getInitialProps(context);
    const locale = getLocale();
    return {
      locale,
      ...props,
    };
  }

  render() {
    return (
      <html lang={this.props.locale.replace('_', '-')}>
        <Head />
        <body>
          <Main />
          <script src="https://use.typekit.net/brk3xyh.js" />
          <script src="https://cdn.polyfill.io/v2/polyfill.min.js?features=Intl.~locale.de,Intl.~locale.en,Intl.~locale.fr" />
          <script src="https://js.stripe.com/v3/" />
          <script dangerouslySetInnerHTML={{ // eslint-disable-line
              __html: injectScript,
            }}
          />
          <noscript>
            <img height="1" width="1" src="https://www.facebook.com/tr?id=171159770158129&ev=PageView&noscript=1" alt="google pixel" />
          </noscript>
          <NextScript />
        </body>
      </html>
    );
  }
}
