import React from 'react';
import styles from "./Home.module.css";
import LoginButton from '../../components/Buttons/LoginButton';
import SignupButton from '../../components/Buttons/SignupButton';
import { Modal, Button, Card, CardDeck, Container, Row, Col } from "react-bootstrap";


const Home = (props) => {
    return (
        <main className="container py-5">
            <Row className="wrap justify-content-center mb-5">
                <Col xs lg={9}>
                    <h1 className="text-center mb-4">Creating things is good for soul. <br />So is inspiring others.</h1>
                    <h2 className="text-center">Make. Share. Inspire.</h2>
                </Col>
            </Row>
            <Row className="wrap justify-content-center">
                <div className="d-flex col-12 col-md-8 col-lg-6 justify-content-around">
                    <LoginButton {...props} />
                    <SignupButton {...props} />
                </div>
            </Row>
            <Container className="my-5">
                <Row className="wrap justify-content-around">
                    <CardDeck>
                        <Card>
                            <Card.Img variant="top" src="https://via.placeholder.com/250" />
                            <Card.Body>
                                <Card.Title>Project Here Name</Card.Title>
                                <Card.Text>
                                    Maker: FirstName LastName</Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <Button>Get Inspired</Button>
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
                                <Button>Get Inspired</Button>
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
                                <Button>Get Inspired</Button>
                            </Card.Footer>
                        </Card>
                    </CardDeck>
                </Row>
            </Container>
        </main>
    );
}

export default Home;