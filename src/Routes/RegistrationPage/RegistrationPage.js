import React, { Component } from 'react'
import './RegistrationPage.css';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';

class RegistrationPage extends Component {

    static defaultProps = {
        history: {
          push: () => {},
        },
    }

    handleRegistrationSuccess = () => {
        const { history } = this.props
        history.push('/login')
    }

    render() {

        return(
        <>
        <div className="registrationHeader">
            Become A Community Champion
        </div>

        <section className="registrationBody">
            <RegistrationForm
                onRegistrationSuccess={this.handleRegistrationSuccess}
            />
        </section>

        </>
        );
    }
}

export default RegistrationPage