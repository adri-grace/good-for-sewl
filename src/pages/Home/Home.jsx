import React from 'react';
import styles from "./Home.module.css";
import LoginButton from '../../components/Buttons/LoginButton';
import SignupButton from '../../components/Buttons/SignupButton';
import { Button, Card, CardDeck, Container, Row, Col } from "react-bootstrap";

import userService from '../../utils/userService';
import projectService from '../../utils/projectService';

const Home = (props) => {
    const user = userService.getUser('user');
    const conditionalUI = userService.getUser() 
    ? <> 
    <Col xs md={8} lg={6} className="d-flex justify-content-around">
    <h3>Welcome back {user.firstName}!</h3>
    </Col>
    </> 
    : 
    <>
    <Col xs md={8} lg={6} className="d-flex justify-content-around">
    <SignupButton {...props} />
    <LoginButton {...props} />
    </Col>
    </>
    return (
        <>
            <Container className={`${styles.Home} py-5`}>
                <Row className="wrap justify-content-center mb-5">
                    <Col xs lg={9}>
                        <h1 className="text-center mb-4">Creating things is good for soul. <br />So is inspiring others.</h1>
                        <h2 className="text-center">Make. Share. Inspire.</h2>
                    </Col>
                </Row>
                <Row className="wrap justify-content-center">
                    {conditionalUI}
                </Row>
                </Container>
                <Container className="my-5">
                    <Row className="wrap justify-content-around">
                        <CardDeck>
                        {
                            props.projects.map(({ projectName, description, pattern, imageURL, addedBy, _id }) => (
                                <Card key={_id} style={{ width: '300px' }} >
                                    <Card.Img variant="top" src={imageURL} />
                                    <Card.Body>
                                        <Card.Title><strong>Project Name:</strong>  {projectName}</Card.Title>
                                        <Card.Text>
                                            <strong>Maker:</strong> {addedBy.firstName} {addedBy.lastName}
                                        </Card.Text>
                                        <Card.Text>
                                            <strong>Description:</strong> {description}
                                        </Card.Text>
                                        <Card.Text><strong>Pattern:</strong> {pattern}</Card.Text>
                                    </Card.Body>
                                    {/* <Card.Footer>
                                        <Button>Get Inspired</Button>
                                    </Card.Footer> */}
                                </Card>
                            ))
                            }
                        </CardDeck>
                    </Row>
                </Container>
        </>
    );
}

export default Home;