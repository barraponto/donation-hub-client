import React, { Component } from 'react'
import './LoginPage.css';
import LoginForm2 from '../../components/LoginForm2/LoginForm2';

class LoginPage extends Component {

    static defaultProps = {
        location: {},
        history: {
          push: () => { },
        },
      }
    handleLoginSuccess = () => {
        const { location, history } = this.props
        const destination = (location.state || {}).from || '/'
        history.push(destination)
    }  

    render() {
        return(
            <div className="loginPageDisplay">
            <div className="loginHeader">
                <h1>Donation Hub</h1>
            </div>
            <div className="sideText">
                Become a Community Champion
            </div>
            <section className="loginBody">
                <LoginForm2
                    onSuccessfulLogin={this.handleLoginSuccess}
                    />
            </section>
        </div>
        );
    }
}

export default LoginPage