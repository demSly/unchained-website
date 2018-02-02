# Contributing to Unchained Website

1. [Fork](https://help.github.com/articles/fork-a-repo/) this repository to your own GitHub account and then [clone](https://help.github.com/articles/cloning-a-repository/) it to your local device.
2. Install the dependencies: `npm install`
3. [Setup your environment](https://github.com/unchainedshop/unchained-website#development)
4. Start a version of [CockpitCMS](https://getcockpit.com) locally via the provided Dockerfile in ``/cms``
5. Start a version of [Unchained Engine](https://unchained.shop) locally on port ``4010``
6. Run `npm run dev:with-local-engine` to run the website locally
7. Make your code changes, but be aware that changes to `/api` are not file-watched
8. Run `npm run build` and `npm run start` to build and start the app in production mode
9. Create a Pull Request to merge your changes into our master branch


# Updating GraphQL schema

1. add new field to CMS
1. update api/schema.js
2. npm run update-schema in a new tab, while dev environment running
