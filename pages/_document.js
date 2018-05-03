import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { resolveLocale } from '../lib/locale';

export default class IntlDocument extends Document {
  static async getInitialProps(context) {
    // resolve to supported language, trying the cookie and second the accept-language!
    // setting the cookie and refreshing the page will lead to another language
    const props = await super.getInitialProps(context);
    const locale = resolveLocale(context);
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
          <NextScript />
        </body>
      </html>
    );
  }
}
