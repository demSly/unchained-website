module.exports = `
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
    url: String
    avatar: Picture
  }
  type Query {
    members: [Member]!
    region(regionId: String!): JSON
  }
  type Mutation {
    # Send a Call-me-back request to the Company, returns messageId if successfully sent mail
    sendContactForm(request: ContactFormInput!): String
  }
`;
