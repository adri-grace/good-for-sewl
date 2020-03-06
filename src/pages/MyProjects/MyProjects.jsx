import React, { Component } from 'react';
import styles from './MyProjects.module.css';
import { Button, Card, CardDeck, Container, Row } from "react-bootstrap";
import CreateProjectButton from '../../components/Buttons/CreateProjectButton';
import userService from '../../utils/userService';
import projectService from '../../utils/projectService';


class MyProjects extends Component {

    handleSignUpOrLogin = () => {
        this.setState({ user: userService.getUser() }, () => {
            this.handleGetProjects();
        })
    }
    handleDelete = () => {
    if(userService.getUser()) {
        const {projects} = projectService.deleteProject();
        this.setState({projects});
    }
    }
    render() {
        return (
            <>
                <Container className={`${styles.MyProjects} py-5`}>
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
                            {
                                this.props.projects.map(({ projectName, description, pattern, imageURL, _id }) => (
                                    <Card key={_id} style={{ width: '300px' }} >
                                        <Card.Img variant="top" src={imageURL} />
                                        <Card.Body>
                                            <Card.Title>{projectName}</Card.Title>
                                            <Card.Text>
                                                {description}
                                            </Card.Text>
                                            <Card.Text><strong>Pattern:</strong> {pattern}</Card.Text>
                                        </Card.Body>
                                        <Card.Footer>
                                            <Button className="mr-4">Edit</Button>
                                            <Button onClick={this.handleDelete} type="submit">Delete</Button>
                                        </Card.Footer>
                                    </Card>
                                ))
                            }
                        </CardDeck>
                    </Row>
                </Container>
            </>);
    }
}

export default MyProjects;