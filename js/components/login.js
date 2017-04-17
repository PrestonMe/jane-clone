import React from 'react'
import { connect } from 'react-redux'
import SignIn from './signin'
import Nav from './nav'
import Footer from './footer'

const { object } = React.PropTypes

class MyAccount extends React.Component {
  render () {
    return (
      <div className='base'>
        <Nav {...this.props.location} />
        <div className='logon'>
          <div className='login-pane'>
            <img src='../../public/img/jane-logo_360.png' />
            <SignIn {...this.props.location} />
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
