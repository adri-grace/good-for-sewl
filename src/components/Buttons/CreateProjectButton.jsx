import React, { Component } from 'react';
import {Modal, Button} from 'react-bootstrap';
import CreateProjectForm from '../CreateProjectForm/CreateProjectForm';

class CreateProjectButton extends Component {
    state = {  }
    render() { 
        return ( <>
        <Button>Create a Project</Button>
        </> );
    }
}
 
export default CreateProjectButton;