import React from 'react';
import Modal from "react-bootstrap/Modal";
import Button from 'react-bootstrap/Button';
import SignupForm from '../SignupForm/SignupForm';

const SignupButton = (props) => {

    const [isOpen, setIsOpen] = React.useState(false);

  const showModal = () => {
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
  };
    return ( <>
        <Button onClick={showModal}>Sign up</Button>
          <Modal show={isOpen} onHide={hideModal}>
            <Modal.Header>
              <Modal.Title>Sign Up</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <SignupForm {...props}/>
            </Modal.Body>
            <Modal.Footer>
              <button onClick={hideModal}>Cancel</button>
              <button>Save</button>
            </Modal.Footer>
          </Modal>
        </> );
}
 
export default SignupButton;