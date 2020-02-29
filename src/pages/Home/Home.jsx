import React from 'react';
import styles from "./Home.module.css";
import LoginButton from '../../components/Buttons/LoginButton';
import SignupButton from '../../components/Buttons/SignupButton';

const Home = (props) => {
    return (
        <main className="container py-5">
            <h1>Home Page</h1>
            <LoginButton />
            <SignupButton />
        </main>
    );
}

export default Home;