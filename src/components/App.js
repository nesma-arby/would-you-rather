import React, { Component } from 'react';
import { BrowserRouter as Router ,Switch, Route } from "react-router-dom";


import Home from './Home';
import Login from './Login'
import NewQuestion from './NewQuestion'
import LeaderBoard from './LeaderBoard'
import Logout from './Logout'
import NavBar from './NavBar';


// import Question from './Question'
// import QuestionDetails from './QuestionDetails'
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
          {/* <Route path="/questions/:id" component={QuestionDetails} /> */}
          {/* <Route component={NotFound} /> */}
        </Switch>

      </Router>


    );
  }


}




export default App;

