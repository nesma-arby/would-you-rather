import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { unset_authed_user } from '../actions/authedUser'

class Logout extends Component {


  //This method is only called one time, which is before the initial render. Since this method is called before render()
  componentWillMount () {
    this.props.unsetUSer();
  }


  render () {
    return <Redirect to='/' />
  }
  
}


export function mapDispatchToProps(dispatch) {
    return {
    unsetUSer :() => dispatch(unset_authed_user())
    }
  }

export default connect(null,mapDispatchToProps)(Logout)