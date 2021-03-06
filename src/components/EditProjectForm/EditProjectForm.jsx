import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import styles from './EditProjectForm.module.css';
import userService from '../../utils/userService';
import projectService from '../../utils/projectService';

class EditProjectForm extends Component {
    state = this.getInitialState();
    getInitialState(_id) {
        return { 
            projectName: this.props.projectName,
            description: this.props.description,
            imageURL: this.props.imageURL,
            error: ''
         }
    }
    handleChange = e => {
        this.setState({
            error: '',
            ...{ [e.target.name]: e.target.value }
        })
    }

    handleSubmit = async e => {
        e.preventDefault();
        if (!this.isFormValid()) return;
        try {
            const { projectName, description, imageURL } = this.state;
            const addedBy = userService.getUser()._id;
            await projectService.editProject(this.props.projectID, { projectName, description, imageURL, addedBy});
            this.setState(this.getInitialState(), () => {
                this.props.handleGetUsersProjects();
            });
        } catch (error) {
            this.setState({ 
                projectName: '',
                description: '',
                imageUrl: '',
                error: error.message
             })
        }
    }
    isFormValid = () => {
        return (
            this.state.projectName &&
            this.state.description &&
            this.state.imageURL
        );
    }

    render() { 
        return ( 
        <>
        <section className={styles.section}>
        {
            this.state.error && <p>{this.state.error}</p>
        }
        <form onSubmit={this.handleSubmit}>
            <fieldset>
                <legend>Update your project information</legend>
                <label htmlFor="projectName">Project Name</label>
                <input 
                type="text"
                placeholder="Updated Project Name"
                defaultValue={this.state.projectName}
                id="projectName"
                name="projectName"
                onChange={this.handleChange}
                />
                <label htmlFor="description">Description</label>
                <textarea
                type="text"
                rows={4}
                placeholder="Update your project description"
                value={this.state.description}
                id="description"
                name="description"
                onChange={this.handleChange}
                />
                <label htmlFor="imageURL">Link to your project photo</label>
                <input 
                type="text"
                placeholder="https://yournewURLhere.com/yourproject"
                value={this.state.imageURL}
                id="imageURL"
                name="imageURL"
                onChange={this.handleChange}
                />
                <Modal.Footer><Button type="submit" disabled={!this.isFormValid()}>Submit</Button></Modal.Footer>
            </fieldset>
        </form>
        </section>
        </> );
    }
}
 
export default EditProjectForm;