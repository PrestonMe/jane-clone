import React from 'react'
import { Link } from 'react-router'
const { string } = React.PropTypes

class Nav extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isHide: false
    }
    this.hideBar = this.hideBar.bind(this)
    this.isActive = this.isActive.bind(this)
  }
  hideBar () {
    let {isHide} = this.state
    window.scrollY > this.prev && window.scrollY > 50 ? !isHide && this.setState({isHide: true})
    : isHide && this.setState({isHide: false})
    this.prev = window.scrollY
  }
  isActive (value) {
    return value === this.props.pathname ? 'active' : ''
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
            <p><Link to='/cart'>MY BAG</Link></p>
            <p className='login'><Link to='/logon' >LOG IN</Link></p>
          </div>

          <div className='logo'>
            <img src='../public/img/jane-logo_360.png' />
          </div>

          <div>
            <ul className={'links ' + classAdd}>
              <li><Link className={this.isActive('/clothing')} to='/clothing'>CLOTHING</Link></li>
              <li><Link className={this.isActive('/accessories')} to='/accessories'>ACCESSORIES</Link></li>
              <li><Link className={this.isActive('/home-decor')} to='/home-decor'>HOME DECOR</Link></li>
              <li><Link className={this.isActive('/baby')} to='/baby'>BABY</Link></li>
              <li><Link className={this.isActive('/kids')} to='/kids'>KIDS</Link></li>
              <li><Link className={this.isActive('/misc')} to='/misc'>MISC</Link></li>
              <li><Link className={this.isActive('/')} to='/'>ALL DEALS</Link></li>
              <li><Link className={this.isActive('/new')} to='/new'>NEW DEALS</Link></li>
              <li><Link className={this.isActive('/ending-soon')} to='/ending-soon'>ENDING SOON</Link></li>
              <li><Link className={this.isActive('/popular')} to='/popular'>POPULAR</Link></li>
              <li><Link className={this.isActive('/sneak-peaks')} to='/sneak-peaks'>SNEAK PEEKS</Link></li>
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

Nav.propTypes = {
  pathname: string
}

export default Nav
