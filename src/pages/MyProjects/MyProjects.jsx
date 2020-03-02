import React, { Component } from 'react';
import styles from './MyProjects.module.css';
import { Button, Card, CardDeck, Container, Row } from "react-bootstrap";
import CreateProjectButton from '../../components/Buttons/CreateProjectButton';

class MyProjects extends Component {
    state = {

    }
    render() {
        return (
            <>
                <Container className={styles.MyProjects}>
                    <Row className="wrap justify-content-center mb-5">
                        <h1>My Projects</h1>
                    </Row>
                    <Row className="wrap justify-content-center">
                        <CreateProjectButton {...this.props} />
                    </Row>
                </Container>
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
                                    <Button>Edit</Button>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <Card.Img variant="top" src="https://via.placeholder.com/250" />
                                <Card.Body>
                                    <Card.Title>Project Here Name</Card.Title>
                                    <Card.Text>
                                        <strong>Description:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        
                                        </Card.Text>
                                        <Card.Text><strong>Pattern:</strong> Butterick 3728</Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <Button>Edit</Button>
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
                                    <Button>Edit</Button>
                                </Card.Footer>
                            </Card>
                        </CardDeck>
                    </Row>
                </Container>
            </>);
    }
}

export default MyProjects;