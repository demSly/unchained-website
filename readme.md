# Official Website: unchained.shop

This is the official unchained.shop website built with [Zeit's awesome Next.js](https://github.com/zeit/next.js) and [Apollo GraphQL](https://github.com/apollographql/react-apollo). This is a combined landing page, the only API to our business you will ever need and our shop storefront.


## Architectural Overview

    +------------+ +---------------+                        +--------------+
    |            | |               |                        |              |
    |            | |               | GraphQL        JSON    |              |
    | MongoDB    +-> Unchained     +--------+       +-------+ CockpitCMS   |
    | Database   | | Headless Shop |        |       |       | Headless CMS |
    |            | |               |        |       |       |              |
    |            | |               |        |       |       |              |
    +------------+ +-------+-------+        |       |       +--------------+
                           |           ⭐️----v-------v--⭐️
                     +-----v------+    |                |
                     |            |    | Apollo Server  |
                     | Admin      |    | GraphQL API    |
                     | Engine UI  |    |                |
                     |            |    +----------------+
                     +------------+    |                |
                                       | unchained.shop |
                                       | Website UI     |
                                       |                |
                                       ⭐️-------+-------⭐️
                                               |
                                               |
                                               |
                                               v

                                      You visiting our beauty
                                          👳🏼‍♀️🧕🏻💂🏾‍♀️👨🏿‍🔬👲🏻

The following components of the architectural map are part of this repository:

**Apollo Server: Our Public API BUS**

Origin in code: /api

This is what the GraphQL API of the unchained engine is composed of at the moment:

* Local GraphQL API that exposes the proprietary CockpitCMS RESTFul JSON API
* Remote GraphQL API of the (not yet open source) unchained.engine

**unchained.shop: React.js Responsive Web App**

Origin in code: /

Project based on Next.js. recompose and react-apollo is used intensively for local and remote state management.

**CockpitCMS: Headless CMS**

Origin in code: /cms

Just a small Dockerfile wrapper folder to fire up a new CockpitCMS instance pre-configured with the needed collection and region configuration.


## Development

**Prerequisits**

- Node.js 8+
- Running CockpitCMS
- Running Unchained Engine

**Bootstrap .env file**

You can take a look at the defaults by opening the Dockerfile

    CMS_TOKEN=SET_TO_COCKPITCMS_API_KEY
    SHOP_GRAPHQL_ENDPOINT=http://unchained-engine/graphql
    CMS_ENDPOINT=http://cockpit
    ASSET_URL_PREFIX=http://cockpit
    GRAPHQL_ENDPOINT=http://website/graphql

    MAIL_URL=smtp://user:password@smpt.local
    MAIL_SENDER=io@website
    MAIL_RECIPIENT=io@website

    TRACKING_CODE=UA-xxx-x

**Install**

Install dependencies and start unchained.shop in development:

npm install
npm run dev
