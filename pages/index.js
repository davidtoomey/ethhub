import React, { Component } from 'react';
import factory from '../ethereum/factory';
import { Card, Button } from 'semantic-ui-react';
import Layout from '../components/Layout';
import { Link } from '../routes';

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
    const items = this.props.questions.map(address => {
      return {
        header: address,
        description: (
          <Link route={`/questions/${address}`}>
            <a>View Question</a>
          </Link>
        ),
        fluid: true
      };
    });

    return <Card.Group items={items} />;
  }

  render() {
    return (
      <Layout>
        <div>
          <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"></link>
          <h3>Open Questions</h3>

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
        </div>

        {this.renderQuestions()}
      </Layout>
    );
  }
}

export default QuestionIndex;
