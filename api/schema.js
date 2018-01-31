module.exports = `
  scalar JSON
  input CallBackRequestInput {
    firstName: String!
    lastName: String!
    orderDate: String
    studio: String
    fnNumber: String
    mobileNumber: String!
    comment: String
  }
  type Picture {
    _id: ID!
    path: String!
    url: String!
    title: String
    thumbnail(width: Int!, height: Int!): String!
  }
  type Member {
    _id: ID!
    name: String
    position: String
    url: String
    avatar: Picture
  }
  type Query {
    members: [Member]!
    region(regionId: String!): JSON
  }
  type Mutation {
    # Send a Call-me-back request to the Company, returns messageId if successfully sent mail
    sendCallBackRequest(request: CallBackRequestInput!): String
  }
`;
