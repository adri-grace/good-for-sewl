import React, { Component } from 'react';
import styles from './MyProjects.module.css';
import { Modal, Button, Card, CardDeck } from "react-bootstrap";

class MyProjects extends Component {
    state = {

    }
    render() {
        return (
            <>
                <div className="container py-4">
                    <div className="row wrap justify-content-center mb-5">
                        <h1>My Projects</h1>
                    </div>
                    <div className="row wrap justify-content-center">
                        <Button>Create a Project</Button>
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
                                    <button>Edit</button>
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
                                    <button>Edit</button>
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
                                    <button>Edit</button>
                                </Card.Footer>
                            </Card>
                        </CardDeck>
                    </div>
                </div>
            </>);
    }
}

export default MyProjects;