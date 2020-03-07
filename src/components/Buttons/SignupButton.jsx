import React from 'react';
import { Modal, Button } from "react-bootstrap";
import SignupForm from '../SignupForm/SignupForm';

const SignupButton = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const showModal = () => {
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
  };
    return (
      <>
        <Button onClick={showModal}>Sign up</Button>
        <Modal show={isOpen} onHide={hideModal}>
        <Modal.Header closeButton>
            <Modal.Title>Sign Up</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <SignupForm {...props} />
          </Modal.Body>
        </Modal>
      </>);
}

export default SignupButton;