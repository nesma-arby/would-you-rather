import React from 'react';
import { useState } from 'react';
import avatar from '../img/avatar.jpg';
// import {connect} from 'react-redux'; 


import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';




const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        {/* <NavbarBrand href="/Home">Home</NavbarBrand> */}
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>

          <Nav className="mr-auto" navbar>

            <NavItem>
              <NavLink href="/Home">Home</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="/add">New Questions</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="/leaderboard">Leader Board</NavLink>
            </NavItem>

          </Nav>

          <div id='loginInfo' hidden>

            <NavbarText className="mr-2">Hello Ahmed</NavbarText>
            <img src={avatar} alt='user-avatar' className='rounded mr-4 avatar' />

            <NavbarText className="mr-1 logout">Logout</NavbarText>

          </div>

        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;




