import React from 'react'
// import { Link } from 'react-router'

var Nav = React.createClass({
  render: function () {
    return (
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
          <img  src='../public/img/jane-logo_360.png' />
        </div>

      </div>
    )
  }
})

export default Nav
