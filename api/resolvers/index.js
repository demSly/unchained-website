const GraphQLJSON = require('graphql-type-json');
const region = require('./queries/region');
const members = require('./queries/members');
const Picture = require('./types/Picture');
const Member = require('./types/Member');
const sendContactForm = require('./mutations/sendContactForm');

module.exports = {
  Query: {
    region,
    members,
  },
  Mutation: {
    sendContactForm,
  },
  JSON: GraphQLJSON,
  Picture,
  Member,
};
