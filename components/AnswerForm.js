import React, { Component } from 'react';
import { Form, Input, Message, Button } from 'semantic-ui-react';
import Question from '../ethereum/question';
import web3 from './../ethereum/web3';
import { Router } from '../routes';

class AnswerForm extends Component {
  state = {
    value: '',
    errorMessage: '',
    loading: false
  };

  onSubmit = async event => {
    event.preventDefault();

    const question = Question(this.props.address);

    this.setState({ loading: true, errorMessage: '' });

    try {
      const accounts = await web3.eth.getAccounts();
      await question.methods
        .createAnswer(this.state.value)
        .send({
          from: accounts[0]
        });
      Router.replaceRoute(`/questions/${this.props.address}`);
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }
    this.setState({ loading: false });
  }

  render() {
    return (
      <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
        <Form.Field>
          <label>Answer question</label>
          <Input
            value={this.state.value}
            onChange={event => this.setState({ value: event.target.value })}
          />
        </Form.Field>
        <Message error header="oops!" content={this.state.errorMessage} />
        <Button primary loading={this.state.loading}>Submit Answer</Button>
      </Form>
    );
  }
}

export default AnswerForm;
