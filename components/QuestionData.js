import React from 'react';
import Question from '../ethereum/question';
import {asyncReactor} from 'async-reactor';

function Error() {
  return (
    <div>
      <p>Cannot load resources</p>
    </div>
  );
}

function Loader() {
  return (
    <div>
      <p>Loading...</p>
    </div>
  );
}

async function questionData(props) {
  let addr = props.value;
  let loadedQuestion = Question(props.value);
  let summary = await loadedQuestion.methods.getSummary().call();

  return (
    <ul>
      <li>Contract Address: {addr}</li>
      <li>Asker: {summary[3]}</li>
      <li>Question: {summary[0]}</li>
    </ul>
  );
};

export default asyncReactor(questionData, Loader, Error);
