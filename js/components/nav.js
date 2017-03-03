import React from 'react'
import { Link } from 'react-router'

class Nav extends React.Component {
  constructor (props) {
    super(props)
    console.log(this)
    this.state = {
      isHide: false,
      selected: this.props.pathname
    }
    this.hideBar = this.hideBar.bind(this)
    this.isActive = this.isActive.bind(this)
    this.setFilter = this.setFilter.bind(this)
  }
  hideBar () {
    let {isHide} = this.state
    window.scrollY > this.prev && window.scrollY > 50 ? !isHide && this.setState({isHide: true})
    : isHide && this.setState({isHide: false})
    this.prev = window.scrollY
  }
  setFilter (filter) {
    this.setState({selected: filter})
  }
  isActive (value) {
    return value === this.state.selected ? 'active' : ''
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
              <li><Link className={this.isActive('/clothing')} onClick={this.setFilter.bind(this, '/clothing')} to='/clothing'>CLOTHING</Link></li>
              <li><Link className={this.isActive('/accessories')} onClick={this.setFilter.bind(this, '/accessories')} to='/accessories'>ACCESSORIES</Link></li>
              <li><Link className={this.isActive('/home-decor')} onClick={this.setFilter.bind(this, '/home-decor')} to='/home-decor'>HOME DECOR</Link></li>
              <li><Link className={this.isActive('/baby')} onClick={this.setFilter.bind(this, '/baby')} to='/baby'>BABY</Link></li>
              <li><Link className={this.isActive('/kids')} onClick={this.setFilter.bind(this, '/kids')} to='/kids'>KIDS</Link></li>
              <li><Link className={this.isActive('/misc')} onClick={this.setFilter.bind(this, '/misc')} to='/misc'>MISC</Link></li>
              <li><Link className={this.isActive('/')} onClick={this.setFilter.bind(this, '/')} to='/'>ALL DEALS</Link></li>
              <li><Link className={this.isActive('/new')} onClick={this.setFilter.bind(this, '/new')} to='/new'>NEW DEALS</Link></li>
              <li><Link className={this.isActive('/ending-soon')} onClick={this.setFilter.bind(this, '/ending-soon')} to='/ending-soon'>ENDING SOON</Link></li>
              <li><Link className={this.isActive('/popular')} onClick={this.setFilter.bind(this, '/popular')} to='/popular'>POPULAR</Link></li>
              <li><Link className={this.isActive('/sneak-peaks')} onClick={this.setFilter.bind(this, '/sneak-peaks')} to='/sneak-peaks'>SNEAK PEEKS</Link></li>
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
