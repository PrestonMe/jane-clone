import React, { Component } from 'react'
import { Link } from 'react-router'

class Search extends Component {
  constructor(props) {
    super(props)
    console.log(props)
    this.state = {
      search: this.props.search,
      url: this.props.url || ''
    }
    this.toggleSearch = this.toggleSearch.bind(this)
  }

  toggleSearch () {
    this.setState({search: !this.state.search})
  }

  render() {
    console.log(this.props, this.state)
    return (

      <div className='search'>
        <img onClick={this.toggleSearch} className='mag' src='../public/img/icons/mag.svg' />
        <div className='media-search'>
          <input onClick={this.toggleSearch} className={'search-input not-mobile ' + (this.state.search ? 'active-search' : '')} type='text' placeholder='Search...' />
          {this.state.search
           ? <div>
              <div onClick={this.toggleSearch} className='overlay' />
              <input onClick={this.toggleSearch} className='search-input is-mobile' type='text' placeholder='Search...' />
                <ul onClick={this.toggleSearch}>
                 <Link to='/clothing'><li>Clothing</li></Link>
                 <Link to='/accessories'><li>Accessories</li></Link>
                 <Link to='/home-decor'><li>Home Decor</li></Link>
                 <Link to='/baby'><li>Baby</li></Link>
                 <Link to='/kids'><li>Kids</li></Link>
                 <Link to='/misc'><li>Misc</li></Link>
                 <Link to='/'><li>All Deals</li></Link>
                 <Link to='/new'><li>New Deals</li></Link>
                 <Link to='/ending-soon'><li>Ending Soon</li></Link>
                 <Link to='/popular'><li>Popular</li></Link>
                 <Link to='/sneak-peeks'><li>Sneak Peaks</li></Link>
               </ul>
             </div>
           :
           <div>
            <p className='is-mobile'>
              {this.state.url !== '/' ? this.state.url.split('/').join('') : 'Shop By Category'}
            </p>
           </div>
          }
        </div>
      </div>
    )
  }
}

export default Search
