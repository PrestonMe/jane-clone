import React from 'react'
import axios from 'axios'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { login } from '../actions/actionCreators'
import Nav from './nav'
import Footer from './footer'

const { object } = React.PropTypes

class MyAccount extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
        email: '',
        password: '',
        validator: {
          email: null,
          login: null
        }
    }

    this.setValue = this.setValue.bind(this)
    this.submit = this.submit.bind(this)
    this.handleFieldChange = this.handleFieldChange.bind(this)
    this.isInvalid = this.isInvalid.bind(this)
  }

  setValue (event) {
    let obj = {}
    obj[event.target.name] = event.target.value
    this.setState(obj)
  }

  submit (e) {
    e.preventDefault()
    let obj = this.state;
    if(obj.validator.email && obj.password) {
      axios.get('/login/' + this.state.email + '/' + this.state.password
      ).then(res => {
        let user = res.data[0]
        if(user.email) {
          this.props.dispatch(login(true, user.fullname, user.id))
          this.context.router.transitionTo('/')
        } else {
          obj.validator.login = true
          this.setState(obj);
        }
      })
    }
  }

  handleFieldChange (e) {
    let obj = this.state

    // regex from http://stackoverflow.com/questions/46155/validate-email-address-in-javascript
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!re.test(e.target.value)) {
      if(this.state.validator.email !== false) {
        obj.validator.email = false
        console.log('getting set')
        this.setState(obj)
      }
    } else {
      if(this.state.validator.email !== true) {
        obj.validator.email = true
        this.setState(obj)
      }
    }
  }

  isInvalid (value) {
    return value === false ? 'invalid' : '';
  }

  render () {

    return (
      <div className='base'>
        <Nav {...this.props.location} />

        <div className='logon'>
          <div className='login-pane'>
            <img src='../../public/img/jane-logo_360.png' />
            <div className='fb-wrapper'>
              <button className='fb-auth'>
                LOG IN WITH FACEBOOK
              </button>
              <div>
                <p className='or'>or</p>
              </div>
            </div>
            <div>
              <form className='login-form' onSubmit={this.submit}>
                <p
                  className={this.state.validator.login ? 'invalid-login' : 'hide'}
                  >Invalid email address or password. Please try again.</p>
                <div className='input-wrapper login'>
                  <input
                    className={this.isInvalid(this.state.validator.email)}
                    onBlur={this.handleFieldChange}
                    name='email'
                    onChange={this.setValue}
                    value={this.state.email}
                    placeholder='Email Address' />
                    <p
                      className={this.state.validator.email === false ? 'error' : 'hide'}
                      >Please enter a valid email address.</p>
                  <input
                    type='password'
                    name='password'
                    onChange={this.setValue}
                    value={this.state.password}
                    placeholder='Password' />
                </div>
                <button className='btn'>LOG IN</button>
                <p>Forgot your password?</p>
                <Link to='/signup'><p>New? Sign up.</p></Link>
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

MyAccount.contextTypes = {
  router: object
}

MyAccount.propTypes = {
  location: object
}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.loggedIn
  }
}

export default connect(mapStateToProps)(MyAccount)
