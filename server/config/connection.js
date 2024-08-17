const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/nomadnotesdb');

module.exports = mongoose.connection;

// mongodb+srv://donnacancode:DaC05201022@cluster0.zxsnm.mongodb.net/nomadnotesdb?retryWrites=true&w=majority&appName=Cluster0