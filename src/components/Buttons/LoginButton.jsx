import React, { Component } from 'react';
import { Modal, Button } from "react-bootstrap";
import LoginForm from '../LoginForm/LoginForm';

class LoginButton extends Component {
  render() {
    return (
      <>
        <Button onClick={this.props.handleShowModal}>Login</Button>
        <Modal show={this.props.isShowing} onHide={this.handleClose}>
          <Modal.Header>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <LoginForm {...this.props} />
          </Modal.Body>
        </Modal>
      </>);
  }
}

export default LoginButton;