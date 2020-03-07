import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import EditProjectForm from '../EditProjectForm/EditProjectForm';

const EditProjectButton = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const showEditModal = () => {
    setIsOpen(true);
  };

  const hideEditModal = () => {
    setIsOpen(false);
  };
        return ( <>
        <Button onClick={showEditModal} className="mr-3">Edit</Button>
        <Modal show={isOpen} onHide={hideEditModal}>
          <Modal.Header closeButton>
            <Modal.Title>Edit your project</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <EditProjectForm {...props} />
          </Modal.Body>
        </Modal>
        </> );
}
 
export default EditProjectButton;