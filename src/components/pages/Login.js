import React, { Component } from 'react';
import { FormGroup, Label, Form, Alert } from 'reactstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { login } from '../actions/auth';

class Login extends Component {
    state = {
        error: false,
        username: '',
        password: ''
    }

    handleSubmitLogin = (e) => {
        e.preventDefault();
        const {username, password}= this.state;
        this.setState({error:false});
        if (!username && !password) {
            this.setState({
                error: 'Username and Password: admin',
                username:'',
                password:''
            });
        } else if(username === 'admin' && password === 'admin') {
            // first chnage loggedIn from false to true becase if redircet to home agin back to /login
            this.props.login();
            this.props.history.push('/');
            // console.log('wellcome');
        } else {
            this.setState({
                error: 'Username and Password: admin',
                username:'',
                password:''
            })
        }
    }

    handleInputChange = (e) => {
        const target = e.target;
        this.setState({
            [target.name]: target.value
        });
    };

    render(){
        return (
            <>
                <div className="page-wrapper">
                    <div className="page-content--bge5">
                        <div className="container">
                            <div className="login-wrap">
                                <div className="login-content">
                                    {this.state.error ?
                                    (<Alert color="danger">
                                        {this.state.error}
                                    </Alert>)
                                    : null}
                                    <div className="login-form">
                                        <Form>
                                            <FormGroup>
                                                <Label>Username</Label>
                                                <input className="au-input au-input--full" value={this.state.username} type="text" name="username" onChange={this.handleInputChange}/>
                                            </FormGroup>
                                        </Form>
                                        <Form>
                                            <FormGroup>
                                                <Label>Password</Label>
                                                <input className="au-input au-input--full" value={this.state.password} type="password" name="password" onChange={this.handleInputChange}/>
                                            </FormGroup>
                                            <div className="login-checkbox">
                                                <Label>
                                                    <input type="checkbox" name="remember"/>
                                                    Remember Me
                                                </Label>
                                                <Label>
                                                    <Link to="#">Forgotten Password ?</Link>
                                                </Label>
                                            </div>
                                            <button className="au-btn au-btn--block au-btn--green m-b-20" type="submit" onClick={this.handleSubmitLogin}>
                                                login in
                                            </button>
                                            <div className="social-login-content">
                                                <button className="au-btn au-btn--block au-btn--blue m-b-20">
                                                    login in with facebook
                                                </button>
                                                <button className="au-btn au-btn--block au-btn--blue2">
                                                    login in with twitter
                                                </button>
                                            </div>
                                        </Form>
                                        <div className="register-link">
                                            <p>
                                                Dont't have account ?
                                                <Link to="#"> Sign Up here</Link>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    };
};

// Login Container
const mapDispatchToProps = {
    login
}


export default connect(null,mapDispatchToProps)(Login);