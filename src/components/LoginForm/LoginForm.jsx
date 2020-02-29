import React, { Component } from 'react';
import styles from './LoginForm.module.css';
import userService from '../../utils/userService';
import { Modal, Button } from "react-bootstrap";

class LoginForm extends Component {
    state = this.getInitialState();
    getInitialState() {
        return {
            email: '',
            password: '',
            error: '',
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
            const { email, password } = this.state;
            await userService.login({ email, password });
            this.setState(this.getInitialState(), () => {
                this.props.handleSignUpOrLogin();
                this.props.handleClose();
                this.props.history.push('/');
            });
        } catch (error) {
            this.setState({
                email: '',
                password: '',
                error: error.message
            })
        }

    }
    isFormValid() {
        return (
            this.state.email &&
            this.state.password);
    }
    render() {
        return (
            <section className={styles.section}>
                {
                    this.state.error && <p>{this.state.error}</p>
                }
                <form onSubmit={this.handleSubmit}>
                    <fieldset>
                        <legend>Log In</legend>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={this.state.email}
                            name="email"
                            onChange={this.handleChange} />

                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={this.state.password}
                            name="password"
                            onChange={this.handleChange}
                        />
                        <Modal.Footer><Button type="submit" disabled={!this.isFormValid()}>Login</Button></Modal.Footer>

                    </fieldset>
                </form>
            </section>
        );
    }
}

export default LoginForm;