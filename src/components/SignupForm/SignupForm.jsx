import React, { Component } from 'react';
import styles from './SignupForm.module.css';
import userService from '../../utils/userService';
import { Modal, Button } from "react-bootstrap";

class SignupForm extends Component {
    state = this.getInitialState();
    getInitialState() {
        return {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            passwordConfirm: '',
            error: ''
        };
    }
    handleChange = e => {
        this.setState({
            error: '',
            ...{ [e.target.name]: e.target.value }
        })
    }
    handleSubmit = async e => {
        e.preventDefault();
        if (!this.isFormValid()) return;
        try {
            const { firstName, lastName, email, password } = this.state;
            await userService.signup({ firstName, lastName, email, password });
            this.setState(this.getInitialState(), () => {
                this.props.handleSignUpOrLogin();
                this.props.handleClose();
                //this.props.history.push('/');
            });
        } catch (error) {
            this.setState({
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                passwordConfirm: '',
                error: error.message
            })
        }

    }
    isFormValid = () => {
        return (
            this.state.firstName &&
            this.state.lastName &&
            this.state.email &&
            this.state.password &&
            this.state.password === this.state.passwordConfirm
        );
    }
    render() {
        return (
            <section className={styles.section}>
                {
                    this.state.error && <p>{this.state.error}</p>
                }
                <form onSubmit={this.handleSubmit}>
                    <fieldset>
                        <legend>Create your account</legend>
                        <label htmlFor="name">First Name</label>
                        <input
                            type="text"
                            placeholder="First Name"
                            value={this.state.firstName}
                            name="firstName"
                            id="firstName"
                            onChange={this.handleChange} />
                        <label htmlFor="name">Last Name</label>
                        <input
                            type="text"
                            placeholder="Last Name"
                            value={this.state.lastName}
                            name="lastName"
                            id="lastName"
                            onChange={this.handleChange} />

                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            placeholder="Email"
                            value={this.state.email}
                            name="email"
                            id="email"
                            onChange={this.handleChange} />

                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            placeholder="Create a password"
                            value={this.state.password}
                            name="password"
                            id="password"
                            onChange={this.handleChange} />

                        <label htmlFor="passwordConfirm">Confirm Password</label>
                        <input
                            type="password"
                            placeholder="Confirm your password"
                            value={this.state.passwordConfirm}
                            name="passwordConfirm"
                            id="passwordConfirm"
                            onChange={this.handleChange} />
                        <Modal.Footer>
                            <Button type="submit" disabled={!this.isFormValid()}>Login</Button>
                            </Modal.Footer>
                    </fieldset>
                </form>
            </section>
        );
    }
}

export default SignupForm;