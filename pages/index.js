import React, { Component } from 'react';
import factory from '../ethereum/factory';
import { Button } from 'semantic-ui-react';
import Layout from '../components/Layout';
import QuestionData from '../components/QuestionData';
import { Link } from '../routes';
import Header from '../components/Header';

class QuestionIndex extends Component {
  // static defines a class function
  // this is a nextjs requirement
  // next wants to retrieve the initial data, without rendering our component,
  // makes rendering much more efficient
  static async getInitialProps() {
    const questions = await factory.methods.getDeployedQuestions().call();

    return { questions };
  }

  renderQuestions() {
    const addresses = this.props.questions.map(address => {
      return (
        <QuestionData
          key={address.toString()}
          value={address}
        />
      );
    });

    return addresses;
  }

  render() {
    return (
        <Layout>
            <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"></link>
            <h2 style={{ marginLeft: '33.5%' }}>Open Questions</h2>

            <Link route="/questions/new">
              <a>
                <Button
                  floated="right"
                  content="Create Question"
                  icon="add circle"
                  primary={true}
                />
              </a>
            </Link>
            {this.renderQuestions()}
        </Layout>
    );
  }
}

export default QuestionIndex;
