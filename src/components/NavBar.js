import  React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';



class NavBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    }
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };


  render() {

    const authedUser = this.props.mystate.authedUser_reducer;

    if(authedUser !== null){

      const users = this.props.mystate.users_reducer;

      return (
      
        <div>
  
          <Navbar color="light" light expand="md">
  
            <NavbarToggler onClick={this.toggle} />
            
            <Collapse isOpen={this.state.isOpen} navbar>
  
              <Nav className="mr-auto" navbar>
  
                <NavItem>
                  <NavLink tag={Link} to="/Home">Home</NavLink>
                </NavItem>
  
                <NavItem>
                  <NavLink tag={Link} to="/add">New Questions</NavLink>
                </NavItem>
  
                <NavItem>
                  <NavLink tag={Link} to="/leaderboard">Leader Board</NavLink>
                </NavItem>
  
              </Nav>
  
  
                <NavbarText className="mr-2"> Hello {authedUser} </NavbarText>
  
                <img src={users[authedUser].avatarURL} alt='user-avatar' className='rounded avatar'
                />
  
                <NavbarText className="mr-1 logout" tag={Link} to="/logout">Logout</NavbarText>
  
  
            </Collapse>
          </Navbar>
        </div>
  
      );

    }else{
      return <div></div>
    }

  }
}



function mapStateToProps(mystate) {
  return {
    mystate
  }
}

export default connect(mapStateToProps, null)(NavBar)




