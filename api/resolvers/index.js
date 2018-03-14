const GraphQLJSON = require('graphql-type-json');
const region = require('./queries/region');
const members = require('./queries/members');
const questions = require('./queries/questions');
const Picture = require('./types/Picture');
const Member = require('./types/Member');
const MemberLink = require('./types/MemberLink');
const sendContactForm = require('./mutations/sendContactForm');

module.exports = {
  Query: {
    region,
    members,
    questions,
  },
  Mutation: {
    sendContactForm,
  },
  JSON: GraphQLJSON,
  Picture,
  Member,
  MemberLink,
};
