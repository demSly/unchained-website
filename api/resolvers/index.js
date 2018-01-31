const GraphQLJSON = require('graphql-type-json');
const region = require('./queries/region');
const members = require('./queries/members');
const Picture = require('./types/Picture');
const Member = require('./types/Member');
const sendCallBackRequest = require('./mutations/sendCallBackRequest');

module.exports = {
  Query: {
    region,
    members,
  },
  Mutation: {
    sendCallBackRequest,
  },
  JSON: GraphQLJSON,
  Picture,
  Member,
};
