import React from 'react';
import styles from './Nav.module.css';
import { Navbar, Nav } from 'react-bootstrap'
import LoginButton from '../Buttons/LoginButton';
import SignupButton from '../Buttons/SignupButton';

import userService from '../../utils/userService';

const Navigation = (props) => {
    const user = userService.getUser('user');
    const conditionalUI = userService.getUser() 
    ? <> 
    <Nav className="ml-auto" >
<Nav.Link href="/myprojects">{user.firstName}'s Projects</Nav.Link>
    <Nav.Link href="" onClick={props.handleLogout}>Logout</Nav.Link>
    </Nav>
    </> 
    : 
    <>
    <Nav className="ml-auto" >
    {/* <Nav.Link href="#">Login</Nav.Link>
    <Nav.Link href="#">Sign Up</Nav.Link> */}
    <Nav.Link><LoginButton /></Nav.Link>
    <Nav.Link><SignupButton /></Nav.Link>
    </Nav>
    </>

    var pageTitle = `Welcome, { auth.firstname }`
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className={`${styles.Nav}`}>
            <Navbar.Brand href="/">Good for Your Sew-l</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                {conditionalUI}
            </Navbar.Collapse>
        </Navbar>


    );
}

export default Navigation;