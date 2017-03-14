import React from 'react'
import { Link } from 'react-router'
import Nav from './nav'
import Footer from './footer'

const { object } = React.PropTypes

class MyAccount extends React.Component {
  // constructor (props) {
  //   super(props)
  //
  // }
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
              <form className='login-form'>
                <div className='input-wrapper login'>
                  <input placeholder='Email Address' />
                  <input placeholder='Password' />
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

MyAccount.propTypes = {
  location: object
}

export default MyAccount
