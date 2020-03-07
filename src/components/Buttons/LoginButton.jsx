import React from 'react';
import { Modal, Button } from "react-bootstrap";
import LoginForm from '../LoginForm/LoginForm';

const LoginButton = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const showModal = () => {
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
  };
    return (
      <>
        <Button className="link" onClick={showModal}>Login</Button>
        <Modal show={isOpen} onHide={hideModal}>
          <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <LoginForm {...props} />
          </Modal.Body>
        </Modal>
      </>);
}

export default LoginButton;