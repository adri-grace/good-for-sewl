import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import EditProjectForm from '../EditProjectForm/EditProjectForm';

const EditProjectButton = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);
  // const updateProjectById = (id, payload) => api.put(`/project/${id}`, payload);

  const showEditModal = () => {
    setIsOpen(true);
    // updateProjectById(id);
  };

  const hideEditModal = () => {
    setIsOpen(false);
  };
        return ( <>
        <Button onClick={showEditModal} className="mr-3">Edit</Button>
        <Modal show={isOpen} onHide={hideEditModal}>
          <Modal.Header closeButton>
            <Modal.Title></Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <EditProjectForm {...props} />
          </Modal.Body>
        </Modal>
        </> );
}
 
export default EditProjectButton;