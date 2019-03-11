const GraphQLJSON = require('graphql-type-json');
const region = require('./queries/region');
const members = require('./queries/members');
const jobs = require('./queries/jobs');
const job = require('./queries/job');
const questions = require('./queries/questions');
const partners = require('./queries/partners');
const Picture = require('./types/Picture');
const Member = require('./types/Member');
const Partner = require('./types/Partner');
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
    partners,
  },
  Mutation: {
    sendContactForm,
  },
  JSON: GraphQLJSON,
  Picture,
  Partner,
  Member,
  MemberLink,
  Job,
};
