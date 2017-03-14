import React from 'react'
import { Link } from 'react-router'
import Nav from './nav'
import Footer from './footer'

class SignUp extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      password: '',
      verifyPassword: '',
      validator: {
        name: false,
        email: false,
        password: false,
        verifyPassword: false
      }
    }
    this.setValue = this.setValue.bind(this)
    this.submit = this.submit.bind(this)
    this.handleFieldChange = this.handleFieldChange.bind(this)
  }

  handleFieldChange (e) {
    let obj = this.state;

    if(e.target.name === 'name'){
      if(!e.target.value && this.state.validator.name) {
        obj.validator.name = false
        this.setState(obj)
      } else if (e.target.value && !this.state.validator.name) {
        obj.validator.name = true
        this.setState(obj)
      }
      //throw error if no name is entered (addclass to input box and display error message p tag)
    } else if (e.target.name === 'email') {
      // regex from http://stackoverflow.com/questions/46155/validate-email-address-in-javascript
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!re.test(e.target.value)) {
          if(this.state.validator.email) {
            obj.validator.email = false;
            this.setState(obj)
          }
          // Don't forget to enter your email.
          //active class will run as long as
        } else if (!this.state.validator.email) {
          obj.validator.email = true;
          this.setState(obj)
        }
    } else if (e.target.name === 'password') {
      // sets verifypassword to false if password field is changed
      if(e.target.value !== this.state.verifyPassword && this.state.validator.verifyPassword) {
        obj.validator.verifyPassword = false
      }

      if(e.target.value && e.target.value.length < 8) {
        if(this.state.validator.password) {
          obj.validator.password = false;
          this.setState(obj)
        }
        // Don't forget to come up with a great new password just for Jane! Make sure it's at least 8 characters.
      } else if (e.target.value.length > 7 && !this.state.validator.password) {
        // automatically sets verify password to true if both fields match
        if(this.state.verifyPassword === e.target.value && !this.state.validator.verifyPassword) {
            obj.validator.verifyPassword = true;
        }
        obj.validator.password = true
        this.setState(obj)
      }
    } else if (e.target.name === 'verifyPassword') {
      if(e.target.value !== this.state.password) {
        if(this.state.validator.verifyPassword) {
          obj.validator.verifyPassword = false
          this.setState(obj)
        }
        // Enter your password one more time to make sure we got it right.
      } else if (this.state.verifyPassword === this.state.password) {
        if(this.state.verifyPassword && !this.state.validator.verifyPassword) {
          obj.validator.verifyPassword = true
          this.setState(obj)
        }
      }
    }
  }

  setValue (event) {
    let obj = {}
    obj[event.target.name] = event.target.value
    this.setState(obj)
  }

  submit (e) {
    e.preventDefault()
    console.log(this.state)

  }




  render () {
    return (
      <div className='base'>
        <Nav />
        <div className='logon'>
          <div className='login-pane'>
            <img src='../../public/img/jane-logo_360.png' />
            <div className='fb-wrapper'>
              <button className='fb-auth'>
                SIGN UP WITH FACEBOOK
              </button>
              <div>
                <p className='or'>or</p>
              </div>
            </div>
            <div>
              <form className='login-form' onSubmit={this.submit}>
                <div className='input-wrapper sign-up'>
                  <input
                    onBlur={this.handleFieldChange}
                    name='name'
                    onChange={this.setValue}
                    value={this.state.name}
                    placeholder='Full Name' />
                  <input
                    onBlur={this.handleFieldChange}
                    name='email'
                    onChange={this.setValue}
                    value={this.state.email}
                    placeholder='Email Address' />
                  <input
                    onBlur={this.handleFieldChange}
                    name='password'
                    onChange={this.setValue}
                    value={this.state.password}
                    placeholder='Password' />
                  <input
                    onBlur={this.handleFieldChange}
                    name='verifyPassword'
                    onChange={this.setValue}
                    value={this.state.verifyPassword}
                    placeholder='Confirm Password' />
                </div>
                <button className='btn btn-sign-up'>SIGN ME UP!</button>
              </form>
            </div>
          </div>
        </div>
        <div className='has-account'>
          <Link to='/logon'><p>Already have an account? Click here to log in</p></Link>
        </div>
        <Footer />
      </div>
    )
  }
}

export default SignUp
