const typeDefs = `
scalar Date

  type User {
    _id: ID
    username: String
    email: String
    profile: String
    trips: [Trip]
    friends: [User]
  }

  type Trip {
    _id: ID
    location: String
    journalEntry: String
    startTripDate: Date
    endTripDate: Date
    comments: [Comment]
  }

    type Comment {
    _id: ID
    comment: String
    username: String
  }

  type Auth {
  token: String
  user: User
}

  type Query {
    users: [User]
    user(id: ID!): User
    me: User
    getUpcomingTrips: User
    # getPreviousTrips: User
    # getDreamTrips: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    loginUser(username: String!, password: String!): Auth
    addTrip(username: String! location: String!, journalEntry: String!, startTripDate: Date!, endTripDate: Date!): User
    addComment(commentText: String!): Comment
    removeComment(commentId: ID!): Comment
  }
`;

module.exports = typeDefs;



// type Auth {
//   token: String
//   user: User
// }