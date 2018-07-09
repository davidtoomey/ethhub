import React, { Component } from 'react';
import { Button, Table } from 'semantic-ui-react';
import { Link } from '../../../routes';
import Layout from '../../../components/Layout';
import AnswerForm from '../../../components/AnswerForm';
import Question from '../../../ethereum/question';
import AnswerGrid from '../../../components/AnswerGrid';

class AnswerIndex extends Component {
  static async getInitialProps(props) {
    const { address } = props.query;
    const question = Question(address);
    const answerCount = await question.methods.getAnswersCount().call();

    const answers = await Promise.all(
      Array(parseInt(answerCount)).fill().map((element, index) => {
        return question.methods.answers(index).call()
      })
    );

    return { address, answers, answerCount };
  }

  renderGrid() {
    return this.props.answers.map((answer, index) => {
      return <AnswerGrid
        key={index}
        id={index}
        answer={answer}
        address={this.props.address}
      />;
    });
  }

  render() {
    const { Header, Row, HeaderCell, Body } = Table;
    return (
      <Layout>
        <h3>Answers</h3>
        <AnswerForm address={this.props.address} />
        <Table>
          <Header>
            <Row>
              <HeaderCell>ID</HeaderCell>
              <HeaderCell>Answerer Address</HeaderCell>
              <HeaderCell>Answer</HeaderCell>
              <HeaderCell>Approve</HeaderCell>
            </Row>
          </Header>
          <Body>
            {this.renderGrid()}
          </Body>
        </Table>
      </Layout>
    );
  }
}

export default AnswerIndex;
