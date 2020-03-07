import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import CreateProjectForm from '../CreateProjectForm/CreateProjectForm';

const CreateProjectButton = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const showModal = () => {
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
  };
        return ( <>
        <Button onClick={showModal}>Create a Project</Button>
        <Modal show={isOpen} onHide={hideModal}>
          <Modal.Header closeButton>
            <Modal.Title>Add your project</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <CreateProjectForm {...props} />
          </Modal.Body>
        </Modal>
        </> );
}
 
export default CreateProjectButton;