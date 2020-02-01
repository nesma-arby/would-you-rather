import React from 'react';
import { Container, Row, Col } from 'reactstrap';

function NotFound() {
  return (
    <div>

      <Container>
        <Row>
          <Col md={{ size: 6, offset: 3 }}>
          <div className='not-found'>
            Page Not Found
            </div>
       </Col>
        </Row>
      </Container>
    </div>
  );
}

export default NotFound;
