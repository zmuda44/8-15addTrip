const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  comment: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  createdDate: {
    type: Date,
    // default: Date.now
  },
});

const tripSchema = new mongoose.Schema({
  location: {
    type: String,
    required: true,
  },
  startTripDate: {
    type: Date,
    // default: Date.now
  },
  endTripDate: {
    type: Date,
    // default: Date.now
  },
  journalEntry: {
    type: String,
  },
  comments: [commentSchema],
  // We will use these if we have time to implement them
  // ,
  // todos: {
  //     type: String
  // },
  // weatherAdvisory: {
  //     type: String
  // }
});

const Trip = mongoose.model("Trip", tripSchema);

module.exports = Trip;
