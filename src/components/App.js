import React, { Component } from 'react';
import { BrowserRouter as Router ,Switch, Route } from "react-router-dom";


import Home from './Home';
import Login from './Login'
import NewQuestion from './NewQuestion'
import LeaderBoard from './LeaderBoard'
import Logout from './Logout'
import NavBar from './NavBar';
import QuestionDetails from './QuestionDetails'
import Question from './Question'

// import NotFound from './NotFound'


class App extends Component {

  render() {

    return (

      <Router>
        
        <NavBar/>

        <Switch>
          <Route exact path='/' component={Login} />
          <Route exact path='/Home' component={Home} />
          <Route path='/leaderboard' exact component={LeaderBoard} />
          <Route path='/add' component={NewQuestion} />
          <Route exact path='/logout' component={Logout} />
          <Route path="/question-details/:id" component={QuestionDetails} />
          <Route path="/question/:id" component={Question} />
          {/* <Route component={NotFound} /> */}
        </Switch>

      </Router>


    );
  }


}




export default App;

