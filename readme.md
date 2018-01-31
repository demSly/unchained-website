# unchained.shop Website

## Intro

## Technologies involved

**Stack**
- Zeit Next.js + Micro (React 16)
- Apollo GraphQL

**Backends needed**
- CockpitCMS https://getcockpit.com
- Unchained Engine https://unchained.shop

## Development / Fork

### Prerequisits:
- https://github.com/creationix/nvm

### Bootstrap .env file

You can take a look at the defaults by opening the Dockerfile

'''
CMS_TOKEN=CHANGEME
SHOP_GRAPHQL_ENDPOINT=http://unchained-engine/graphql
CMS_ENDPOINT=http://cockpit
ASSET_URL_PREFIX=http://cockpit
GRAPHQL_ENDPOINT=http://website/graphql

MAIL_URL=smtp://user:password@smpt.local
MAIL_SENDER=io@website
MAIL_RECIPIENT=io@website

TRACKING_CODE=UA-xxx-x
'''

### Install

Install dependencies and start unchained.shop in development:

nvm install
nvm use
npm install
npm run dev

Of course, you can use yarn if you like
