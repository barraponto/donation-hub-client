import './RegistrationForm.css'
<<<<<<< HEAD
import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import AuthApiService from '../../Services/auth-api-service';

const RegistrationForm = (props) => {
    const [error, setError] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault()
        const { name, username, password, passwordVerify} =e.target
        if(password.value !== passwordVerify.value) {
            setError("passwords do not match");
            return;
        }

        AuthApiService.postUser({
            name: name.value,
            username: username.value,
            password: password.value,
        })
        .then(user => {
            name.value ="",
            username.value ="",
            password.value="",
            passwordVerify=""
            props.onRegistrationSuccess()
        })
        .catch(res => {
            setError(res.error);
        })
    }

    return (
        <>
        <div className="RegistrationForm">
            <form onSubmit={(e) => handleSubmit(e)}>
                <label htmlFor="registrationName"></label>
                <input className="registrationName" placeholder="Your Name" type="text" required id="registrationName"></input>

                <label htmlFor="registrationUsername"></label>
                <input className="registrationUsername" placeholder="Choose a Username" type="text" required id="registrationUsername"></input>

                <label htmlFor="registrationPassword"></label>
                <input className="registrationPassword" placeholder="Choose a Password" type="password" required id="registrationPassword"></input>

                <label htmlFor="passwordVerify" ></label><br/>
                <input className='passwordVerify' placeholder="retype password" type='password' required id='passwordVerify'></input><br/>
            </form>
            <div className="existingAccount">
                <Link to='/Login'>
                    <button>Already have an account?</button>
                </Link>
            </div>
        </div>
        </>
    )
}
=======
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Input, Required, Label } from '../Form/Form'
import AuthApiService from '../../services/auth-api-service'
import Button from '../Button/Button'
import './RegistrationForm.css'

class RegistrationForm extends Component {
  static defaultProps = {
    onRegistrationSuccess: () => { }
  }

  state = { error: null }

  firstInput = React.createRef()

  handleSubmit = ev => {
    ev.preventDefault()
    const { name, username, password } = ev.target
    AuthApiService.postUser({
      name: name.value,
      username: username.value,
      password: password.value,
    })
      .then(user => {
        name.value = ''
        username.value = ''
        password.value = ''
        this.props.onRegistrationSuccess()
      })
      .catch(res => {
        this.setState({ error: res.error })
      })
  }

  componentDidMount() {
    this.firstInput.current.focus()
  }

  render() {
    const { error } = this.state
    return (
      <form
        className="registration-form form"
        onSubmit={this.handleSubmit}
      >
        <div role='alert'>
          {error && <p>{error}</p>}
        </div>
        <div className="form-line">
          <Label htmlFor='registration-name-input'>
            Enter your name<Required />
          </Label>
          <Input
            ref={this.firstInput}
            id='registration-name-input'
            name='name'
            required
          />
        </div>
        <div className="form-line">
          <Label htmlFor='registration-username-input'>
            Choose a username<Required />
          </Label>
          <Input
            id='registration-username-input'
            name='username'
            required
          />
        </div>
        <div className="form-line">
          <Label htmlFor='registration-password-input'>
            Choose a password<Required />
          </Label>
          <Input
            id='registration-password-input'
            name='password'
            type='password'
            required
          />
        </div>
        <footer className="form-line">
          <Button type='submit'>
            Sign up
          </Button>
          {' '}
          <Link to='/login'>Already have an account?</Link>
        </footer>
      </form>
    )
  }
}

export default RegistrationForm
>>>>>>> kayleigh
