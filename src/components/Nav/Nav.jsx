import React from 'react';
import styles from './Nav.module.css';
import { Link } from 'react-router-dom';

import userService from '../../utils/userService';

const Nav = (props) => {
    return (
        <nav className={`${styles.nav} navbar navbar-expand-lg navbar-light bg-light`}>
            <Link to="/" className="navbar-brand" >Good For Your Sew-l</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="">Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="">Sign Up</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to="" onClick={props.handleLogout}>Log Out</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/myprojects">My Projects</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;