import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import EditProjectForm from '../EditProjectForm/EditProjectForm';

const EditProjectButton = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const showModal = () => {
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
  };
        return ( <>
        <Button onClick={showModal} className="mr-3">Edit</Button>
        <Modal show={isOpen} onHide={hideModal}>
          <Modal.Header closeButton>
          </Modal.Header>
          <Modal.Body>
            <EditProjectForm {...props} />
          </Modal.Body>
        </Modal>
        </> );
}
 
export default EditProjectButton;