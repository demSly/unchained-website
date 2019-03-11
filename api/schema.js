const { gql } = require('apollo-server-micro');

module.exports = gql`
  scalar JSON
  input ContactFormInput {
    firstName: String!
    lastName: String!
    email: String
    mobileNumber: String!
    comment: String
  }
  type Picture {
    _id: ID!
    path: String!
    url: String!
    title: String
    thumbnail(width: Int!, height: Int!, anchor: String, mode: String): String!
  }
  type Member {
    _id: ID!
    name: String
    position: String
    description: String
    links: [MemberLink]!
    avatar: Picture
  }
  type Partner {
    _id: ID!
    name: String
    text: String
    website: String
    type: String
    logo: Picture
  }
  type Job {
    _id: ID!
    slug: String!
    title: String
    workload: String
    location: String
    content: String
    skills: String
    tasks: String
    compensation: String
    features: String
  }
  type MemberLink {
    _id: ID!
    name: String
    url: String
  }
  type Question {
    _id: ID!
    question: String!
    answer: String
  }
  type Query {
    members: [Member!]!
    jobs: [Job!]!
    partners: [Partner!]!
    questions: [Question!]!
    region(regionId: String!): JSON
    job(slug: String!): Job!
  }
  type Mutation {
    # Send a Call-me-back request to the Company, returns messageId if successfully sent mail
    sendContactForm(request: ContactFormInput!): String
  }
`;
