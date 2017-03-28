import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import Nav from './nav'
import Footer from './footer'
import CreateAccount from './createAccount'
const { object } = React.PropTypes

class SignUp extends React.Component {

  render () {
    return (
      <div className='base'>
        <Nav {...this.props.location}/>
        <div className='logon'>
          <div className='login-pane'>
            <img src='../../public/img/jane-logo_360.png' />
            <CreateAccount />
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

SignUp.contextTypes = {
  router: object
}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.loggedIn
  }
}

export default connect(mapStateToProps)(SignUp)
