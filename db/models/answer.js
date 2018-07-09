const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const answerSchema = new Schema({
  answerer: String,
  answerString: String
});

module.exports = answerSchema;
