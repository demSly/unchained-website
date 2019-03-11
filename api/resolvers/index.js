const GraphQLJSON = require('graphql-type-json');
const region = require('./queries/region');
const members = require('./queries/members');
const jobs = require('./queries/jobs');
const job = require('./queries/job');
const questions = require('./queries/questions');
const Picture = require('./types/Picture');
const Member = require('./types/Member');
const Job = require('./types/Job');
const MemberLink = require('./types/MemberLink');
const sendContactForm = require('./mutations/sendContactForm');

module.exports = {
  Query: {
    region,
    members,
    questions,
    jobs,
    job,
  },
  Mutation: {
    sendContactForm,
  },
  JSON: GraphQLJSON,
  Picture,
  Member,
  MemberLink,
  Job,
};
