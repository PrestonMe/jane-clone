import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'

const { func, number, string } = React.PropTypes

class NewAddress extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      first: '',
      last: '',
      addressOne: '',
      addressTwo: '',
      city: '',
      state: '',
      zip: '',
      validator: {
        state: false,
        zip: false
      }
    }
    this.exitMenu = this.exitMenu.bind(this)
    this.updateAddress = this.updateAddress.bind(this)
    this.setValue = this.setValue.bind(this)
  }

  exitMenu (val) {
    this.props.exitMenu(val)
  }

  updateAddress (e) {
    e.preventDefault()
    let obj = this.state

    if (obj.first && obj.last && obj.addressOne &&
      obj.city && obj.state && obj.zip) {
      if (obj.state.length < 2) {
        obj.validator.state = true
        obj.validator.zip = false
        this.setState(obj)
      } else if (obj.zip.length < 5 || isNaN(obj.zip * 1)) {
        obj.validator.zip = true
        obj.validator.state = false
        this.setState(obj)
      } else {
        axios.post('/setShipAddress', {
          data: {
            first: obj.first,
            last: obj.last,
            address: obj.addressOne + ' ' + obj.addressTwo,
            state: obj.state,
            city: obj.city,
            zip: obj.zip,
            id: this.props.userId
          }
        }).then(res => {
          if (res.data[0].ship_address) {
            this.exitMenu(res.data[0])
          } else {
            this.exitMenu()
          }
        })
      }
    }
  }

  setValue (event) {
    let obj = {}
    obj[event.target.name] = event.target.value
    this.setState(obj)
  }

  componentWillMount () {
    document.body.style.overflow = 'hidden'
  }

  componentWillUnmount () {
    document.body.style.overflow = 'scroll'
  }

  render () {
    return (
      <div className={'address-form ' + this.props.class}>
        <div
          onClick={this.exitMenu}
          className={'menu-background'} />
        <div className='address-details'>
          <div className='address-header'>
            <p>ADDRESS</p>
            <img
              onClick={this.exitMenu}
              src='../public/img/icons/close.svg' />
          </div>
          <div className='address-input'>
            <form onSubmit={this.updateAddress}>
              <h1>Recipient</h1>
              <input
                name='first'
                onChange={this.setValue}
                value={this.state.first}
                placeholder='First Name' />
              <input
                name='last'
                onChange={this.setValue}
                value={this.state.last}
                placeholder='Last Name' />
              <h1>Address</h1>
              <input
                name='addressOne'
                onChange={this.setValue}
                value={this.state.addressOne}
                placeholder='Address 1' />
              <input
                name='addressTwo'
                onChange={this.setValue}
                value={this.state.addressTwo}
                placeholder='Address 2' />
              <input
                name='city'
                onChange={this.setValue}
                value={this.state.city}
                placeholder='City' />
              <input
                name='state'
                onChange={this.setValue}
                value={this.state.state}
                placeholder='State' />
              <input
                name='zip'
                onChange={this.setValue}
                value={this.state.zip}
                placeholder='ZIP' />
              <div
                className={this.state.validator.state ? 'error' : 'hide'}
                >Please enter a valid state name.</div>
              <div
                className={this.state.validator.zip ? 'error' : 'hide'}
                >Please enter a 5 digit zip code.</div>
              <button>SAVE</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

NewAddress.propTypes = {
  exitMenu: func,
  userId: number,
  class: string
}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.loggedIn,
    userName: state.userName,
    userId: state.userId
  }
}
export default connect(mapStateToProps)(NewAddress)
