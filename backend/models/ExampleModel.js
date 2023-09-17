// ExampleModel.js
const mongoose = require('mongoose');

const exampleSchema = new mongoose.Schema({
  name: String,
  userId: String,
});

const ExampleModel = mongoose.model('Example', exampleSchema);

module.exports = ExampleModel;
