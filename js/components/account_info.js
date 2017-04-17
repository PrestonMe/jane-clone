/* eslint-disable no-useless-escape */
import React from 'react'
import Nav from './nav'
import Footer from './footer'
import axios from 'axios'
import { connect } from 'react-redux'

const { number } = React.PropTypes

class Account extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      changePassword: false,
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      validator: {
        name: true,
        email: true,
        pass: true,
        valPass: true
      },
      updateSuccess: false
    }
    this.togglePassword = this.togglePassword.bind(this)
    this.updateProfile = this.updateProfile.bind(this)
    this.setValue = this.setValue.bind(this)
  }

  togglePassword () {
    this.setState({changePassword: !this.state.changePassword})
  }

  updateProfile (e) {
    e.preventDefault()
    const re = /^(([^<>()[\]\\.,:\s@\"]+(\.[^<>()[\]\\.,:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    let obj = this.state

    if (re.test(obj.email)) {
      obj.validator.email = true
    } else {
      obj.validator.email = false
    }

    if (obj.name) {
      obj.validator.name = true
    } else {
      obj.validator.name = false
    }

    if (obj.changePassword) {
      if (obj.password.length >= 8) {
        obj.validator.pass = true
      } else {
        obj.validator.pass = false
      }

      if (obj.confirmPassword === obj.password) {
        obj.validator.valPass = true
      } else {
        obj.validator.valPass = false
      }

      if (obj.validator.pass && obj.validator.valPass &&
        obj.validator.name && obj.validator.email) {
        this.setState({validator: obj.validator})
        console.log('updating validator')
        axios.put('/updateAll', {
          data: {
            name: obj.name,
            email: obj.email,
            password: obj.password,
            id: this.props.userId
          }
        }).then(res => {
          if (res.data === 'Account Updated') {
            this.setState({updateSuccess: true})
            let that = this
            setTimeout(function () {
              that.setState({updateSuccess: false})
            }, 4000)
          }
        })
      } else {
        this.setState({validator: obj.validator})
      }
    } else {
      if (obj.validator.name && obj.validator.email) {
        this.setState({validator: obj.validator})
        axios.put('/updateAccount', {
          data: {
            name: obj.name,
            email: obj.email,
            id: this.props.userId
          }
        }).then(res => {
          console.log(res.data)
          if (res.data === 'Account Updated') {
            console.log('running')
            this.setState({updateSuccess: true})
            let that = this
            setTimeout(function () {
              that.setState({updateSuccess: false})
            }, 4000)
          }
        })
      } else {
        this.setState({validator: obj.validator})
      }
    }
  }

  setValue (e) {
    let obj = {}
    obj[e.target.name] = e.target.value
    this.setState(obj)
  }

  componentDidMount () {
    axios.get('/getAccount/' + this.props.userId)
    .then(res => {
      let userData = res.data[0]
      let obj = this.state
      obj.name = userData.fullname
      obj.email = userData.email
      this.setState(obj)
    })
  }

  render () {
    console.log(this.state.updateSuccess)
    return (
      <div>
        <Nav />
        <div className='account'>
          <div className='update_profile'>
            <h1>
              YOUR INFORMATION
            </h1>
            {this.state.updateSuccess
            ? <div className='success'>
              <p>Your Account has been updated!</p>
            </div>
            : ''
            }
            <form onSubmit={this.updateProfile}>
              <input placeholder='Full name'
                onChange={this.setValue}
                name='name'
                value={this.state.name}
                className={!this.state.validator.name ? 'error mar-bot' : ''}
              />
              {!this.state.validator.name
              ? <p className='invalid'>Enter your name.</p>
              : ''}
              <input placeholder='Email Address'
                onChange={this.setValue}
                name='email'
                value={this.state.email}
                className={!this.state.validator.email ? 'error' : ''}
              />
              {!this.state.validator.email
              ? <p className='invalid'>Invalid Email.</p>
              : ''}
              {this.state.changePassword
              ? <div>
                <div className='clearfix'>
                  <span onClick={this.togglePassword}>
                    Nevermind, don't change it.
                  </span>
                </div>
                <input placeholder='Password'
                  onChange={this.setValue}
                  name='password'
                  value={this.state.password}
                  className={!this.state.validator.pass ? 'error mar-bot' : ''}
                />
                {!this.state.validator.pass
                ? <p className='invalid'>Password must be at least 8 characters in length.</p>
                : ''}
                <input placeholder='Confirm Password'
                  onChange={this.setValue}
                  name='confirmPassword'
                  value={this.state.confirmPassword}
                  className={!this.state.validator.valPass ? 'error' : ''}
                 />
                {!this.state.validator.valPass
                ? <p className='invalid'>Passwords must match!</p>
                : ''}
                <div className='line clearfix' />
              </div>
              : <div className='clearfix'>
                <span onClick={this.togglePassword} >Change your Password</span>
              </div>
              }
              <button className='btn'>
                UPDATE ACCOUNT
              </button>
            </form>
          </div>
          <div className='support'>
            <h1>
              SUPPORT
            </h1>
            <p>
              Should you have any questions, feel free to email us at <span>support@jane.com</span>.
            </p>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

Account.propTypes = {
  userId: number
}

const mapStateToProps = state => {
  return {
    loggedIn: state.loggedIn,
    userId: state.userId
  }
}

export default connect(mapStateToProps)(Account)
