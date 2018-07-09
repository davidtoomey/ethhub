import React, { Component } from 'react';
import { Table, Button } from 'semantic-ui-react';
import Question from '../ethereum/question';

class AnswerGrid extends Component {

  onApprove = async () => {
    const question = Question(this.props.address);

    const accounts = await web3.eth.getAccounts();
    const defaultAccount = web3.eth.defaultAccount;
    await question.methods.approveAnswer(this.props.id).send({
      from: defaultAccount
    });
  };

  render() {
    const { Row, Cell } = Table;
    const { id, answer } = this.props;

    return (
      <Row>
        <Cell>{id}</Cell>
        <Cell>{answer.answerer}</Cell>
        <Cell>{answer.answerString}</Cell>
        <Cell>
          <Button color="green" basic onClick={this.onApprove}>
            Approve
          </Button>
        </Cell>
      </Row>
    );
  }
}

export default AnswerGrid;
