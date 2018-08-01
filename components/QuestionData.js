import React from 'react';
import Question from '../ethereum/question';
import {asyncReactor} from 'async-reactor';
import { Link } from '../routes';
import { Card, Table } from 'semantic-ui-react';
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

  const { Row, Cell } = Table;

  return (
    <Row>
      <Cell>
        Bounty: {web3.utils.fromWei(summary[1], 'ether') + ' ETH'}
      </Cell>
      <Cell>
        {summary[2]} answers
      </Cell>
      <Cell>
        <Link route={`/questions/${addr}`} prefetch>
          <a>{summary[0]}</a>
        </Link>
      </Cell>
    </Row>
  );
};

export default asyncReactor(questionData, Loader, Error);
