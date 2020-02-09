import React from 'react';
import {
    Card, Button, CardTitle, Container, Row, Col,
    CardBody, CardSubtitle , Form, FormGroup, Label, Input
} from 'reactstrap';
import { connect } from 'react-redux';
import {handelSaveQuestionAnswer} from '../actions/questions'
import { createHashHistory } from 'history';


class Question extends React.Component {

    history = createHashHistory()

    constructor(props){
        super(props);
        this.state = {
            answer:''
        };
        this.handleSubmit = this.handleSubmit.bind(this);  
        this.onRadiochange = this.onRadiochange.bind(this);
    }


    onRadiochange(e){
        this.setState({ answer : e.target.value  })
    }


    handleSubmit(e){
        const qid = this.props.match.params.id
        this.props.saveQuestion(this.props.authedUser, qid , this.state.answer);
        this.props.history.push("/question-details/" + qid);
    }


    render() {

            if (Object.entries(this.props.users).length > 0) {

                const users = this.props.users;
                const authedUser = this.props.authedUser;
                const questions = this.props.questions;

                // Get Question if from the url
                const id = this.props.match.params.id

                const answer = users[authedUser].answers[id];
                const questionAuthor = questions[id].author ;
    
    
                return (
    
                    <div>
        
                        <Container>
                            <Row>
                                <Col md={{ size: 6, offset: 3 }}>
        
                                    <Card>
        
                                    <img src={users[questionAuthor].avatarURL} className='avatar'
                                            alt={`Avatar of ${users[questionAuthor].name}}`} />
        
                                        <CardTitle> {users[questionAuthor].name} asks : </CardTitle>
        
                                        <CardBody>

                                            <CardSubtitle> Would You Rather ! </CardSubtitle>
    

                                            <Form className='question-form' onSubmit={this.handleSubmit}>

                                                <FormGroup onChange={this.onRadiochange}>  

                                                <FormGroup check>
                                                <Label check>
                                                    <Input type="radio" name="radio" 
                                                    value='optionOne'
                                                    />
                                                    {questions[id].optionOne.text}
                                                </Label>
                                                </FormGroup> 

                                                <FormGroup check>
                                                <Label check>
                                                    <Input type="radio" name="radio"
                                                    value='optionTwo'
                                                    />
                                                    {questions[id].optionTwo.text}
                                                </Label>
                                                </FormGroup>

                                                </FormGroup>

                                                <Button type='submit' value='submit'> Submit </Button>
        
                                            </Form>

                                        </CardBody>
                                    </Card>
        
                                </Col>
                            </Row>
                        </Container>
        
        
                    </div>
                )
    
            }else{
                return <div></div>
            }

        }

     
    }




export function mapStateToProps(mystate){
    return{
         authedUser : mystate.authedUser_reducer,
         questions : mystate.questions_reducer,
         users: mystate.users_reducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
      saveQuestion:(authodUser , qid ,  answer ) => {dispatch(handelSaveQuestionAnswer(authodUser , qid ,  answer  )) }
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(Question);