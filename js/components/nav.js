import React from 'react'
// import { Link } from 'react-router'

class Nav extends React.Component {
  constructor (props) {
    super(props)
    this.state = {isHide: false}
    this.hideBar = this.hideBar.bind(this)
  }
  hideBar () {
    let {isHide} = this.state
    window.scrollY > this.prev && window.scrollY > 100 ? !isHide && this.setState({isHide: true})
    : isHide && this.setState({isHide: false})
    this.prev = window.scrollY
  }
  componentDidMount () {
    window.addEventListener('scroll', this.hideBar)
  }
  componentWillUnmount () {
    window.removeEventListener('scroll', this.hideBar)
  }
  render () {
    let classAdd = this.state.isHide ? 'slide-in' : 'slide-out'
    return (
      <div>
        <div className='nav'>

          <div className='nav-left'>
            <img src='../public/img/icons/menu.svg' />
            <p>MENU</p>
            <input className='search' type='text' placeholder='Search...' />
          </div>

          <div className='nav-right'>
            <img src='../public/img/icons/heart.svg' />
            <p>FAVORITES</p>
            <img src='../public/img/icons/shopping-bag.svg' />
            <p>MY BAG</p>
            <p className='login'>LOG IN</p>
          </div>

          <div className='logo'>
            <img src='../public/img/jane-logo_360.png' />
          </div>

          <div>
            <ul className={'links ' + classAdd}>
              <li>CLOTHING</li>
              <li>ACCESSORIES</li>
              <li>HOME DECOR</li>
              <li>BABY</li>
              <li>KIDS</li>
              <li>MISC</li>
              <li>ALL DEALS</li>
              <li>NEW DEALS</li>
              <li>ENDING SOON</li>
              <li>POPULAR</li>
              <li>SNEAK PEEKS</li>
            </ul>
          </div>

        </div>
        <div className='spacer'>
          &nbsp;
        </div>
      </div>
    )
  }
}

export default Nav
