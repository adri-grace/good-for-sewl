import React from 'react';
import styles from './Nav.module.css';
import { Navbar, Nav } from 'react-bootstrap'

import userService from '../../utils/userService';

const Navigation = (props) => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Navbar.Brand href="/">Good for Your Sew-l</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#features">Login</Nav.Link>
                    <Nav.Link href="#pricing">Sign up</Nav.Link>
                </Nav>

                <Nav>
      <Nav.Link href="/myprojects">My Projects</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
    </Nav>
            </Navbar.Collapse>
        </Navbar>


    );
}

export default Navigation;