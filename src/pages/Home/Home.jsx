import React from 'react';
import styles from "./Home.module.css";
import LoginButton from '../../components/Buttons/LoginButton';
import SignupButton from '../../components/Buttons/SignupButton';
import { Modal, Button, Card, CardDeck } from "react-bootstrap";


const Home = (props) => {
    return (
        <main className="container py-5">
            <div className="row wrap justify-content-center mb-5">
                <div className="col-12 col-lg-9">
                    <h1 className="text-center mb-4">Creating things is good for soul. <br />So is inspiring others.</h1>
                    <h2 className="text-center">Make. Share. Inspire.</h2>
                </div>
            </div>
            <div className="row wrap justify-content-center">
                <div className="d-flex col-12 col-md-8 col-lg-6 justify-content-around">
                    <LoginButton {...props} />
                    <SignupButton {...props} />
                </div>
            </div>
            <div className="container my-5">
                <div className="row wrap justify-content-around">
                    <CardDeck>
                        <Card>
                            <Card.Img variant="top" src="https://via.placeholder.com/250" />
                            <Card.Body>
                                <Card.Title>Project Here Name</Card.Title>
                                <Card.Text>
                                    Maker: FirstName LastName</Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <button>Get Inspired</button>
                            </Card.Footer>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src="https://via.placeholder.com/250" />
                            <Card.Body>
                                <Card.Title>Project Here Name</Card.Title>
                                <Card.Text>
                                    Maker: FirstName LastName</Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <button>Get Inspired</button>
                            </Card.Footer>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src="https://via.placeholder.com/250" />
                            <Card.Body>
                                <Card.Title>Project Here Name</Card.Title>
                                <Card.Text>
                                    Maker: FirstName LastName</Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <button>Get Inspired</button>
                            </Card.Footer>
                        </Card>
                    </CardDeck>
                </div>
            </div>
        </main>
    );
}

export default Home;