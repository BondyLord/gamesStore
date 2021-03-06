import React, {Component} from 'react';
import "../css/stylesheet.scss";
import UserProfile from './UserProfile';
import Cookies from 'js-cookie';

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            rememberMe: true
        };
    }

    handleInputChange = (event) => {
        const {value, name} = event.target;
        this.setState({
            [name]: value
        });
    }

    toggleRememberMe = (event) => {
        this.setState({rememberMe: !this.state.rememberMe})
    }

    onSubmit = (event) => {
        event.preventDefault();
        fetch('/api/authenticate', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                if (res.status === 200) {
                    UserProfile.setName(this.state.username);
                    let inFiveMinutes = new Date(new Date().getTime() + 5 * 60 * 1000);
                    Cookies.set('name', this.state.username, {
                        expires: inFiveMinutes
                    });
                    this.props.history.push('/home');
                } else {
                    const error = new Error(res.error);
                    throw error;
                }
            })
            .catch(err => {
                alert('Error logging in please try again');
            });
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} className="w3-center">
                <h1>Login Below!</h1>
                <img src={require("./Images/img_avatar.png")} className="avatar" alt="Avatar"/>
                <div>
                    <input
                        type="text"
                        name="username"
                        placeholder="Enter User Name"
                        value={this.state.username}
                        onChange={this.handleInputChange}
                        required
                    />
                </div>
                <div>
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter password"
                        value={this.state.password}
                        onChange={this.handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label>
                        Remember Me:
                        <input
                            name="rememberMe"
                            type="checkbox"
                            checked={this.state.rememberMe}
                            className="checkmark"
                            onChange={this.toggleRememberMe}/>
                    </label>
                </div>
                <input type="submit" value="Login"/>
                <div className="container signin">
                    <p>Don't have an account? <a href="/register">Register</a>.</p>
                </div>
            </form>
        );
    }
}

export default Login;