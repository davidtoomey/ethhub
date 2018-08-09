import React from 'react';
import Question from '../ethereum/question';
import {asyncReactor} from 'async-reactor';
import { Link } from '../routes';
import web3 from '../ethereum/web3';

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
    <div style={cardStyle}>
      <div style={containerStyle}>
        <div style={infoStyle}>
          <Link route={`/questions/${addr}`} prefetch>
            <a>{summary[0]}</a>
            </Link>
        </div>
        <div style={infoStyle}>
          Bounty: {web3.utils.fromWei(summary[1], 'ether') + ' ETH'}
        </div>
        <div style={infoStyle}>
          {summary[2]} answers
        </div>
      </div>
      <p><button style={buttonStyle}>View Question</button></p>
    </div>
  );
};

const cardStyle = {
  boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
  transition: '0.3s',
  maxWidth: '300px',
  minWidth: '300px',
  textAlign: 'center',
  display: 'inline-block',
  margin: '5px'
}

const containerStyle = {
  padding: '12px 16px'
}

const infoStyle = {
  display: 'block',
  margin: '5px 5px 10px',
  fontSize: '15px'
}

const buttonStyle = {
  border: 'none',
  outline: '0',
  display: 'inline-block',
  padding: '8px',
  color: 'white',
  backgroundColor: '#000',
  textAlign: 'center',
  cursor: 'pointer',
  width: '100%',
  fontSize: '14px',
  ':hover' : {
    opacity: '0.7'
  }
}

export default asyncReactor(questionData, Loader, Error);
