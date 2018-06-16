import React from 'react';
import { compose } from 'recompose';
import Lowlight from 'react-lowlight';
import js from 'highlight.js/lib/languages/javascript';
import { Link } from '../routes';
import connectApollo from '../lib/connectApollo';
import withRegion from '../lib/withRegion';
import connectI18n from '../lib/connectI18n';
import PageLayout from '../components/PageLayout';
import ProductDetails from '../components/ProductDetails';
/*
Language: GraphQL
Author: David Peek <mail@dpeek.com>
Description: GraphQL schema, query, mutation and subscription
*/

function graphql(hljs) {
  return {
    aliases: ['gql'],
    keywords: {
      keyword: 'query mutation subscription|10 type interface union scalar fragment|10 enum on ...',
      literal: 'true false null',
    },
    contains: [
      hljs.HASH_COMMENT_MODE,
      hljs.QUOTE_STRING_MODE,
      hljs.NUMBER_MODE,
      {
        className: 'type',
        begin: '[^\\w][A-Z][a-z]',
        end: '\\W',
        excludeEnd: true,
      },
      {
        className: 'literal',
        begin: '[^\\w][A-Z][A-Z]',
        end: '\\W',
        excludeEnd: true,
      },
      {
        className: 'variable',
        begin: '\\$',
        end: '\\W',
        excludeEnd: true,
      },
      {
        className: 'keyword',
        begin: '[.]{2}',
        end: '\\.',
      },
      {
        className: 'meta',
        begin: '@',
        end: '\\W',
        excludeEnd: true,
      },
    ],
    illegal: /([;<']|BEGIN)/,
  };
}

Lowlight.registerLanguage('js', js);
Lowlight.registerLanguage('graphql', graphql);

const Developers = ({ developers }) => (
  <PageLayout title={developers.meta_title} metaDescription={developers.meta_description}>

    <div className="wrap mt7">
      <Link href="/partner-program">
        <a className="button">
            Partner Program
        </a>
      </Link>
      <Link href="/faq">
        <a className="button">
            FAQ
        </a>
      </Link>
      <a className="button" href="/graphiql">
        API
      </a>
    </div>


    <div className="wrap">
      <h2>Weather-dependent barbeque sausage pricing</h2>
      <p>Usually when summer kicks in in Switzerland and people start to invite friends to the
        first barbeque party of the year, demand for sausages surges instantly.
        Our dear friend, butcher Bruno wants to sell his homemade sausages directly
        to the customer with
        his online shop and had this crazy idea of a special product pricing he calls
        Weather-dependent barbeque sausage pricing.
      </p>
      <div className="sausage-pricing-icons">
        <img src="../static/img/05- high-temperature.svg" alt="" />
        <img src="../static/img/110- online-website-shopping-male-african-american.svg" alt="" />
      </div>
      <p>See how easy it is to implement an extremely custom
        pricing module with Unchained Engine below.
      </p>
    </div>

    <div className="wrap">
      <h2>Add a pricing module</h2>
      <p>Unchained is codeable. Codeable means we only provide very basic
        customization out of the box but on the other hand allow the developer to
        completely customize the business logic through code. This is achieved
        through a staged approach ranging from plugins to a full
        hard fork.
      </p>

      <p>
        To demonstrate, we will implement an ingenious pricing that increases the catalog price by 1 USD if the temperature reaches 20 degrees celsius in Zürich:
      </p>

      <Lowlight
        language="js"
        value={`import {
  ProductPricingDirector,
  ProductPricingAdapter,
} from 'meteor/unchained:core-pricing';
import fetch from 'isomorphic-unfetch';

const PRODUCT_TAG_SAUSAGE = 'sausage';
const SAUSAGE_THRESHOLD_CELSIUS = 20;

class WeatherDependentBarbequeSausagePricing extends ProductPricingAdapter {
  static key = 'shop.unchained.wd-bbq-sausage-pricing'
  static version = '1.0'
  static label = 'Calculate the price of a sausage 🌭🌦'
  static orderIndex = 3

  static isActivatedFor(product) {
    if (
      product.tags &&
      product.tags.length > 0 &&
      product.tags.indexOf(PRODUCT_TAG_SAUSAGE) !== -1) {
      return true;
    }
    return false;
  }

  async calculate() {
    const { currency, quantity } = this.context;
    try {
      const response = await fetch('https://query.yahooapis.com/v1/public/yql?q=select%20item.condition.temp%20from%20weather.forecast%20where%20woeid%20%3D%20784794&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys');
      if (response.status === 200) {
        const { query } = await response.json();
        const { results, count } = query;
        if (count > 0) {
          const { temp: tempFahrenheit } = results.channel.item.condition;
          const tempCelsius = (parseFloat(tempFahrenheit) - 32) / 1.8;
          if (tempCelsius > SAUSAGE_THRESHOLD_CELSIUS) {
            console.log('🌭 -> High season, sausage pricy!!'); // eslint-disable-line
            this.result.addItem({
              currency,
              amount: +100 * quantity,
              isTaxable: true,
              isNetPrice: true,
              meta: { adapter: this.constructor.key },
            });
          }
        }
      }
    } catch (e) {
      console.error('🌭 -> Failed while trying to price weather dependent'); // eslint-disable-line
    }

    return super.calculate();
  }
}

ProductPricingDirector.registerAdapter(WeatherDependentBarbequeSausagePricing);`}
      />
    </div>

    <div className="wrap">
      <h2>Craft the query</h2>
      <p>As communicated multiple times, Unchained Commerce is headless by design. So in order to build a Widget to display our sausage we need to craft a small GraphQL query that actually resolves some texts and the current price of our sausage.
      </p>
      <Lowlight
        language="graphql"
        value={`query getProduct {
  product(slug: "🌭") {
    _id
    ... on ProductCommerce {
      catalogPrice {
        _id
        price {
          amount
          currency
        }
      }
    }
  }
}`}
      />

      <a href="https://graphqlbin.com/v2/AP02IZ" target="_blank">Try it out live @ GraphQL Bin</a>
    </div>

    <div className="wrap section">
      <h2>Build the UI</h2>
      <p>Of course because Unchained Commerce is headless, you can build any UI on any operating system that can somehow connect to the HTTP endpoint.
        How awesome? Let's just use a small widget to display some product details on our page right here:
      </p>
      <div className="stage">
        <ProductDetails slug="🌭" />
      </div>
      <a className="mb3" href="https://github.com/unchainedshop/unchained-website/blob/master/components/ProductDetails.js" target="_blank">Our very own ProductDetails component used throughout unchained.shop</a>

    </div>

    <div className="c-bg-dark c-white pa1">
      <h2 className="text-center">open-source, available on <a className="link" href="https://github.com/unchainedshop">Github*</a></h2>
      <p className="text-center">* The Unchained Engine OSS Release <a className="link" href="https://github.com/unchainedshop/unchained-evolution">follows Q3 2018</a></p>
    </div>

    <div className="c-bg-primary">
      <div className="wrap wrap--narrow wrap--vertical-padding">
        <div className="text-center">
          <p className="c-white">Just drop us a line if you want to become an
            official partner of Unchained or you are in need of developer support
          </p>
          <Link href="/about#contact">
            <a className="button">
                Get in Contact now
            </a>
          </Link>
        </div>
      </div>
    </div>

    <style jsx>{`

      .sausage-pricing-icons {
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .sausage-pricing-icons img {
        display: block;
        width: 300px;
      }

      .feature-set ul li a,
      .link {
        color: blue;
        text-decoration: underline;
      }

      .c-bg-dark .link {
        color: white;
      }

      @media (min-width: 740px) {
        .feature-set {
          display: flex;
          justify-content: flex-start;
        }
        .feature-set h3 {
          min-width: 200px;
        }
      }

      .button {
        margin-right: 1.5em;
        margin-bottom: 1em;
      }

      @media (min-width: 1024px) {
        .button + .button {
          margin-left: 1.5em;
        }
      }

      .milestone {
        margin-top: 1.5em;
      }

      .phase {
        margin-top: 2.5em;
      }

      .hero-img {
        margin-top: 1em;
        max-width: 500px;
        display: block;
        margin-left: auto;
        margin-right: auto;
      }

      .hero-text {
        line-height: 1.3;
      }
      @media (max-width: 767px) {
        .hero-text {
          font-size: 1.25em;
        }
      }
      @media (min-width: 1025px) {
        .hero-text {
          margin-left: auto;
          margin-right: auto;
          max-width: 50%;
        }
      }


    `}
    </style>

  </PageLayout>
);


export default connectApollo(compose(
  connectI18n,
  withRegion('developers'),
)(Developers));
