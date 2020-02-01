import React from 'react';
import {
  TabContent, TabPane, NavItem, Nav, NavLink, Card, Button, CardTitle, CardText, Container, Row, Col,
  CardBody, CardSubtitle, CardImg
} from 'reactstrap';

import user from '../img/user.jfif';
import classnames from 'classnames';
import { connect } from 'react-redux';
// import {receive_users,loadData} from '../actions/users'


class Home extends React.Component {

  constructor() {
    super();
    this.state = { activeTab: '1' };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }


  render() {

    // console.log(this.props.state)

    return (

      <div>

        <Container>
          <Row>
            <Col md={{ size: 6, offset: 3 }}>

              <Nav tabs>
                <NavItem>
                  <NavLink
                    className={classnames({ active: this.state.activeTab === '1' })}
                    onClick={() => { this.toggle('1'); }}
                  >
                    Unanswered Questions
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                     className={classnames({ active: this.state.activeTab === '2' })}
                    onClick={() => { this.toggle('2'); }}
                  >
                    Answered Questions
            </NavLink>
                </NavItem>
              </Nav>

              <TabContent activeTab={this.state.activeTab}>

                <TabPane tabId="1">
                  <Card>
                    <CardImg top width="50%" src={user} alt="Card image cap" />
                    <CardBody>
                      <CardTitle> Nesma Arby </CardTitle>
                      <CardSubtitle> Would You Rather ! </CardSubtitle>
                      <CardText> Be a frontend ... .</CardText>
                      <Button> View Poll </Button>
                    </CardBody>
                  </Card>
                </TabPane>

                <TabPane tabId="2">

                  {Object.values(this.props.state.users_reducer.state.users).map( n =>
                                   
                      Object.entries(n.answers).map(s => console.log())
                  
                  )
                  
                  
                  }

                  <Card>
                    <CardImg top width="50%" src={user} alt="Card image cap" />
                    <CardBody>
                      <CardTitle> Ahmed Arby </CardTitle>
                      <CardSubtitle> Would You Rather ! </CardSubtitle>
                      <CardText> Be a frontend ... .</CardText>
                      <Button> View Poll </Button>
                    </CardBody>
                  </Card>

                </TabPane>

              </TabContent>



            </Col>
          </Row>
        </Container>


      </div>
    );
    

  }
}

export function mapStateToProps(state) {
  return {
    state
  }
}

export default connect(mapStateToProps)(Home);



