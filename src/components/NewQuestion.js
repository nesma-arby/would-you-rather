import React from 'react';
import { Button, Form, FormGroup, Input, Container, Row, Col} from 'reactstrap';
import { connect } from 'react-redux';
import {handleAddQuestion} from '../actions/questions'
import { Redirect } from 'react-router-dom'

class NewQuestion extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            optionOne: '',
            optionTwo: '',
            redirect: false
        };
        this.handleOptionOneChange = this.handleOptionOneChange.bind(this);
        this.handleOptiontwoChange = this.handleOptiontwoChange.bind(this);  
        this.handleSubmit = this.handleSubmit.bind(this);  
    }

    handleOptionOneChange(e){
        e.preventDefault();
        if(e.target.value){
            this.setState({ optionOne : e.target.value  })
        }
    }

    handleOptiontwoChange(e){
        e.preventDefault();
        if(e.target.value){
            this.setState({ optionTwo : e.target.value  })
        }
    }


    handleSubmit(e){
    e.preventDefault();
    const { optionOne, optionTwo } = this.state;
    const authodUser = this.props.mystate.authedUser_reducer
    this.props.addQuestion(optionOne , optionTwo , authodUser );
    this.setState({redirect : true});
    }


    render() {

        if(this.state.redirect){
            return <Redirect to='/Home' />
        }else{

            return (
                <div>
                    <Container>
                        <Row>
                            <Col md={{ size: 6, offset: 3 }}>
    
                                <div className='create-question'>
    
                                    <h3 className='text-center text-bold mb-4'> Create New Question</h3>
    
                                    <Form onSubmit={this.handleSubmit}>
    
                                        <h6 className='text-bold mb-3'>
                                            Would you rather
                                        </h6>
    
                                        <FormGroup>
                                            <Input type="text" name="option1" id="exampleoption1" placeholder="enter option 1 text here"
                                               onChange={this.handleOptionOneChange}    value={this.state.optionOne}
                                            />
                                        </FormGroup>
    
    
                                        <FormGroup>
                                            <Input type="text" name="option2" id="exampleoption2" placeholder="enter option 2 text here"
                                               onChange={this.handleOptiontwoChange}   value={this.state.optionTwo}
                                            />
                                        </FormGroup>
    
                                        <Button value='submit' type='submit'>Submit</Button>
    
                                    </Form>
    
                                </div>
    
    
                            </Col>
                        </Row>
                    </Container>
                </div>
            );

        }
    }


}


function mapDispatchToProps(dispatch) {
    return {
      addQuestion:(optionOne , optionTwo , authodUser ) => {dispatch(handleAddQuestion(optionOne , optionTwo , authodUser )) }
    }
  }

  function mapStateToProps(mystate){
      return{
        mystate
      }
  }

export default connect(mapStateToProps,mapDispatchToProps)(NewQuestion);