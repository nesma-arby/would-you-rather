import React, { Component } from 'react';
import { BrowserRouter as Router ,Switch, Route } from "react-router-dom";


import Home from './Home';
import Login from './Login'
// import Question from './Question'
// import QuestionDetails from './QuestionDetails'
import NewQuestion from './NewQuestion'
import LeaderBoard from './LeaderBoard'
// import NotFound from './NotFound'
import NavBar from './NavBar';

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
          {/* <Route path="/questions/:id" component={QuestionDetails} /> */}
          {/* <Route component={NotFound} /> */}
        </Switch>

      </Router>


    );
  }


}




export default App;

