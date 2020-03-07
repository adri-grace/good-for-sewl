import React, { Component } from 'react';
import styles from './MyProjects.module.css';
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import CreateProjectButton from '../../components/Buttons/CreateProjectButton';
import EditProjectButton from '../../components/Buttons/EditProjectButton';
import userService from '../../utils/userService';
import projectService from '../../utils/projectService';


class MyProjects extends Component {

    handleDelete = async (id) => {
    if(userService.getUser()) {
        const {usersProjects} = await projectService.deleteProject(id);
        this.setState({usersProjects});
        this.props.history.push('/myprojects');
        this.props.handleGetUsersProjects();
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
                    <Row className="wrap justify-content-between">

                            {
                                this.props.usersProjects.map(({ projectName, description, pattern, imageURL, _id }) => (
                                    <Col xs={12} md={6} lg={4} style={{ marginBottom: '20px' }}>
                                        <Card key={_id} style={{ height: '100%' }} >
                                            <Card.Img variant="top" src={imageURL} />
                                            <Card.Body>
                                                <Card.Title>{projectName}</Card.Title>
                                                <Card.Text>
                                                    {description}
                                                </Card.Text>
                                                <Card.Text><strong>Pattern:</strong> {pattern}</Card.Text>
                                            </Card.Body>
                                            <Card.Footer>
                                                <EditProjectButton 
                                                {...this.props} 
                                                projectID={_id} 
                                                projectName={projectName}
                                                description={description}
                                                imageURL={imageURL} />
                                                <Button onClick={() => this.handleDelete(_id)} type="submit">Delete</Button>
                                            </Card.Footer>
                                        </Card>
                                    </Col>
                                ))
                            }
                    </Row>
                </Container>
            </>);
    }
}

export default MyProjects;