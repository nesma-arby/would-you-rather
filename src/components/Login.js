import React from 'react';
import { Col, Row, Form, FormGroup, Label, Button , Input} from 'reactstrap';
import ReactIcon from '../img/React-icon.png';
import { connect } from 'react-redux';
import { createHashHistory } from 'history';

import {receive_users,loadData} from '../actions/users'
import {set_authed_user} from '../actions/authedUser'

class Login extends React.Component {

  Background;
  history = createHashHistory()
  

  constructor(props) {

    super(props);
    this.state = {value: ''};
    this.Background =
      "https://epi-rsc.rsc-cdn.org/globalassets/00-sitewide/media/icons/download-bl.png?version=3f1b941e";
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }



  componentDidMount() {
    this.props.loadData();
  }


  handleChange(e) {
    this.setState({value: e.target.value});
  }

  handleSubmit(e) {
    if(this.state.value !== ''){
      this.props.history.push('/Home');
    }else{
      alert('Please select a user before.');
    }
    e.preventDefault();
  }

  render() {

    if (Object.entries(this.props.mystate.users_reducer).length > 0) {
      
      return (
        <div className='login-page'>

          <h2> Welcome to the Would You Rather App !</h2>
          <h6> Please sign in to continue </h6>

          <img src={ReactIcon} alt='react-logo' className='login-logo' />

          <Form onSubmit={this.handleSubmit}>
            <Row form>
              <Col md={12}>
                <FormGroup>

                  <Label for="exampleSelect">Sign in</Label>

                  <Input type='select' id="exampleSelect" value={this.state.value} onChange={this.handleChange}>  

                    <option value='' disabled>select user</option>

                    {Object.values(this.props.mystate.users_reducer.state.users).map(
                      n =>
                        <option
                          value={n.id}
                          key={n.id}
                          >
                          {n.name}
                        </option>
                    )}

                 </Input>
                </FormGroup>
              </Col>
            </Row>

            <Button type="submit" value="Submit" onClick={() => this.props.setUser(this.state.value)}> Submit</Button>

          </Form>


        </div>
      );

    }

    else {
      return <div> Loading ... </div>
    }

  }

}


const mapDispatchToProps = dispatch => ({
  receive_users: () => dispatch(receive_users()),
  loadData: () => dispatch(loadData()) ,
  setUser(id) {
      dispatch(set_authed_user(id));
  }
});



//return all users and questions
export function mapStateToProps(mystate) {
  return {
    mystate
  }
}



export default connect(mapStateToProps,mapDispatchToProps)(Login);