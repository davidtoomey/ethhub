import React from 'react';
import { Menu, Container } from 'semantic-ui-react';
import { Link } from '../routes';

export default () => {
  return (
    <React.Fragment>
      <Container>
        <Menu style={{ marginTop: '10px', zIndex: '1', marginLeft: '75px' }}>
          <Link route="/">
            <a className="item">QandA</a>
          </Link>

          <Menu.Menu position="right">
            <Link route="/">
              <a className="item">Questions</a>
            </Link>

            <Link route="/questions/new">
              <a className="item">+</a>
            </Link>
          </Menu.Menu>
        </Menu>
      </Container>
    </React.Fragment>
  );
};
