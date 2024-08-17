const { User, Trip } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");

const { GraphQLScalarType, Kind } = require('graphql');

const resolvers = {
  Date: new GraphQLScalarType({
    name: 'Date',
    description: 'Date custom scalar type',
    serialize(value) {
      // Value sent to the client
      return value instanceof Date ? value.toISOString() : null;
    },
    parseValue(value) {
      // Value from the client input variables
      return value ? new Date(value) : null;
    },
    parseLiteral(ast) {
      // Value from the client query
      if (ast.kind === Kind.STRING) {
        return new Date(ast.value);
      }
      return null;
    },
  }),
  Query: {
    // Query to fetch all users
    users: async () => {
      return await User.find({});
    },
    // Query to fetch a single user by ID
    // user: async (_, { id }) => {
    //   return await User.findById(id);
    // },
    // Query to fetch the currently authenticated user
    me: async (parent, args, context) => {
      console.log(context.user)
      if (context.user) {
        return await User.findOne({_id: context.user._id}).populate('trips');
      }
      throw AuthenticationError;
    },
    getUpcomingTrips: async (parent, args, context) => {  
      if (context.user) {
        return await User.findOne({ _id: context.user._id }).populate('trips');
      }
      throw new AuthenticationError('You need to be logged in!');
    }
  },
  Mutation: {
    // Mutation for adding a new user
    addUser: async (parent, args) => {
      console.log(args)
      try {  
        const { username, email, password } = args;  
        // Create the user with the provided username, email, and password
        const user = await User.create({ username, email, password });  
        // If user creation fails, throw an error
        if (!user) {
          throw new Error('Something is wrong!');
        }  
        // Return the created user object and the token
      const token = signToken(user);
      return { token, user };
      } catch (error) {
        console.error(error);
        // You can throw the error to be caught by the client-side, or return a specific error message
        throw new Error('Failed to create user');
      }
    },
    // Mutation for logging in an existing user
    loginUser: async (parent, { username, password }) => {
      const user = await User.findOne({ username });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);
      return { token, user };
    },
    addTrip : async (parent, args, context) => {
      console.log(args)
      if(context.user) {
        const { location, journalEntry, startTripDate, endTripDate } = args;
        // Create the user with the provided username, email, and password
        const trip = await Trip.create({
           location, 
           journalEntry,
          startTripDate,
          endTripDate, 
        });
        const user = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { trips: trip } },
          { new: true, runValidators: true }
        );
        return user;
      } 
      // throw new AuthenticationError('You need to be logged in!');
    }

    // addComment: async (_, { commentText }, context) => {},
    // removeComment: async (_, { commentId }, context) => {},
  }
};

module.exports = resolvers;
