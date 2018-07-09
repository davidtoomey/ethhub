const mongoose = require('mongoose');
const AnswerSchema = require('./answer');
const Schema = mongoose.Schema;


const questionSchema = new Schema({
  address: String,
  asker: String,
  questionString: String,
  bounty: Number,
  answerCount: Number
});

const Question = mongoose.model('question', questionSchema);

module.exports = Question;
