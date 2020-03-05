import React, { Component } from 'react';
import styles from './MyProjects.module.css';
import { Button, Card, CardDeck, Container, Row } from "react-bootstrap";
import CreateProjectButton from '../../components/Buttons/CreateProjectButton';
import userService from '../../utils/userService';


class MyProjects extends Component {

    handleSignUpOrLogin = () => {
        this.setState({ user: userService.getUser() }, () => {
          this.handleGetProjects();
        })
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
                                this.props.projects.map(({projectName, description, pattern, imageURL, _id}) => (
                                    <Card key={_id}>
                                        <Card.Img variant="top" src={imageURL} />
                                        <Card.Body>
                                            <Card.Title>{projectName}</Card.Title>
                                            <Card.Text>
                                                {description}
                                            </Card.Text>
                                            <Card.Text><strong>Pattern:</strong> {pattern}</Card.Text>
                                        </Card.Body>
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