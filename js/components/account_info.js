import React from 'react'
import Nav from './nav'
import Footer from './footer'
import axios from 'axios'
import { connect } from 'react-redux'

class Account extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      changePassword: false,
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
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
    console.log('updating profile')
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
    return (
      <div>
        <Nav />
          <div className='account'>
            <div className='update_profile'>
              <h1>
                YOUR INFORMATION
              </h1>
              <form onSubmit={this.updateProfile}>
                <input placeholder='Full name'
                       onChange={this.setValue}
                       name='name'
                       value={this.state.name}
                />
                <input placeholder='Email Address'
                       onChange={this.setValue}
                       name='email'
                       value={this.state.email}
                />
                {this.state.changePassword
                ?
                <div>
                  <div className='clearfix'>
                    <span onClick={this.togglePassword}>
                      Nevermind, don't change it.
                    </span>
                  </div>
                  <input placeholder='Password'
                         onChange={this.setValue}
                         name='password'
                         value={this.state.password}/>
                  <input placeholder='Confirm Password'
                         onChange={this.setValue}
                         name='confirmPassword'
                         value={this.state.confirmPassword}
                       />
                       <div className='line clearfix'/>
                </div>
                :
                <div className='clearfix'>
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

const mapStateToProps = state => {
  return {
    loggedIn: state.loggedIn,
    userId: state.userId
  }
}

export default connect(mapStateToProps)(Account)
