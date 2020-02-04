import React from 'react';
import {
  TabContent, TabPane, NavItem, Nav, NavLink, Card, Button, CardTitle, CardText, Container, Row, Col,
  CardBody, CardSubtitle
} from 'reactstrap';
import classnames from 'classnames';
import { connect } from 'react-redux';


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


    if (Object.entries(this.props.mystate.users_reducer).length > 0) {


      const users = this.props.mystate.users_reducer.users;
      const authedUser = this.props.mystate.authedUser_reducer;
      const authed_user_info = this.props.mystate.users_reducer.users[authedUser];
      const questions = this.props.mystate.users_reducer.questions;

      const questions_ids = Object.keys(this.props.mystate.users_reducer.questions);
      const user_answers = Object.keys(authed_user_info.answers)
      const UnansweredQuestions = questions_ids.filter(qid => !user_answers.includes(qid))

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

                    {UnansweredQuestions.map(u =>

                      <Card key={questions[u].id}>
                        <img src={users[questions[u].author].avatarURL} className='avatar'
                          alt={`Avatar of ${users[questions[u].author].name}`} />
                        <CardTitle>  {questions[u].author} asks:  </CardTitle>
                        <CardBody>
                          <CardSubtitle> Would You Rather ! </CardSubtitle>
                          <CardText> {questions[u].optionOne.text}  </CardText>
                          <Button> View Poll </Button>
                        </CardBody>
                      </Card>



                    )}

                  </TabPane>

                  <TabPane tabId="2">
                    {
                      Object.keys(authed_user_info.answers).map(key =>
                        // console.log(key, authed_user_info.answers[key])
                        //  console.log(questions[key])
                        <Card key={questions[key].id} >
                          <img src={users[questions[key].author].avatarURL} className='avatar'
                            alt={`Avatar of ${users[questions[key].author].name}`} />
                          <CardTitle> {questions[key].author} asks: </CardTitle>
                          <CardBody>
                            <CardSubtitle> Would You Rather ! </CardSubtitle>
                            <CardText> {questions[key][authed_user_info.answers[key]].text}</CardText>
                            <Button> View Poll </Button>
                          </CardBody>
                        </Card>
                      )

                    }


                  </TabPane>

                </TabContent>



              </Col>
            </Row>
          </Container>


        </div>
      );


    } else {
      return <div> Loading </div>
    }

  }
}

export function mapStateToProps(mystate) {
  return {
    mystate
  }
}

export default connect(mapStateToProps)(Home);



