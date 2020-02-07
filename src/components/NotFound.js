import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link, Router } from 'react-router-dom'


class NotFound extends React.Component {

  render() {

    return (

      <div>

        <Container>
          <Row>
            <Col md={{ size: 6, offset: 3 }}>

              <div className='not-found'>
                Page Not Found
              </div>

              <Router>
                 <Link to="/" className='btn btn-primary sign-in'>Sign in</Link>
              </Router>

            </Col>
          </Row>
        </Container>

      </div>
    )

  }

}


export default NotFound;
