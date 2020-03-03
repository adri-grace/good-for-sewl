import React, { Component } from 'react';
import { Modal, Button } from "react-bootstrap";
import SignupForm from '../SignupForm/SignupForm';

class SignupButton extends Component {
  render() {
    return (
      <>
        <Button onClick={this.props.handleShowModal}>Sign up</Button>
        <Modal show={this.props.isShowing} onHide={this.props.handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Sign Up</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <SignupForm {...this.props} />
          </Modal.Body>
        </Modal>
      </>);
  }
}

export default SignupButton;