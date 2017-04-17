import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { logout } from '../actions/actionCreators'

const { object, func, string } = React.PropTypes

class AccountMenu extends React.Component {
  constructor (props) {
    super(props)
    this.logout = this.logout.bind(this)
    this.exitMenu = this.exitMenu.bind(this)
  }

  exitMenu () {
    this.props.exitMenu()
  }

  logout () {
    this.props.dispatch(logout())
    this.context.router.transitionTo('/logon')
  }

  componentWillMount () {
    document.body.style.overflow = 'hidden'
  }

  componentWillUnmount () {
    document.body.style.overflow = 'scroll'
  }

  render () {
    return (
      <div className='account-menu'>
        <div className='up-arrow' />
        <div
          onClick={this.exitMenu}
          className={'menu-background ' + this.props.class} />
        <div className='menu-details'>
          <div>
            <Link to='/history'>
              <p>Order History</p>
              <img src='../public/img/icons/clock.png' />
            </Link>
          </div>
          <div>
            <Link to='/account'>
              <p>View Account</p>
              <img src='../public/img/icons/account.png' />
            </Link>
          </div>
          <div>
            <a className='no-pad'>
              <p className='logout' onClick={this.logout}>
                Log Out
              </p>
            </a>
          </div>
        </div>
      </div>
    )
  }
}

AccountMenu.propTypes = {
  exitMenu: func,
  dispatch: func,
  class: string
}

AccountMenu.contextTypes = {
  router: object
}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.loggedIn,
    userName: state.userName
  }
}
export default connect(mapStateToProps)(AccountMenu)
