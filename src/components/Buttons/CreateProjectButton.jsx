import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import CreateProjectForm from '../CreateProjectForm/CreateProjectForm';

class CreateProjectButton extends Component {
    state = {  }
    render() { 
        return ( <>
        <Button onClick={this.props.handleShowModal}>Create a Project</Button>
        <Modal show={this.props.isShowing} onHide={this.props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title></Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <CreateProjectForm {...this.props} />
          </Modal.Body>
        </Modal>
        </> );
    }
}
 
export default CreateProjectButton;