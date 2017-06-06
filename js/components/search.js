import React, { Component } from 'react'
import { Link } from 'react-router'
import axios from 'axios'

const { object } = React.PropTypes

class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      search: this.props.search,
      url: this.props.url || ''
    }
    this.toggleSearch = this.toggleSearch.bind(this)
    this.submitSearch = this.submitSearch.bind(this)
  }

  toggleSearch () {
    this.setState({search: !this.state.search})
  }

  submitSearch(e) {
    if(e.key === 'Enter') {
      this.context.router.transitionTo('/search/' + e.target.value)
    }

  }

  render() {
    let url;
    if(this.state.url && this.state.url[1]){
      url = this.state.url.split('/').slice(1).join('')
      url = url.split('')
      url[0] = url[0].toUpperCase()
      url = url.join('')
    }

    return (

      <div className='search'>
        <img onClick={this.toggleSearch} className='mag' src='../public/img/icons/mag.svg' />
        <div className='media-search'>
          <input onKeyPress={this.submitSearch} onClick={this.toggleSearch} className={'search-input not-mobile ' + (this.state.search ? 'active-search' : '')} type='text' placeholder='Search...' />
          {this.state.search
           ? <div>
              <div onClick={this.toggleSearch} className='overlay' />
              <div className='search-cancel is-mobile'>
                <input onKeyPress={this.submitSearch} className='search-input' type='text' placeholder='Search...' />
                <p onClick={this.toggleSearch}>Cancel</p>
              </div>
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
           <div onClick={this.toggleSearch} className='mobile-search'>
            <p>
              {url && url[1] !== 'r' ? url : 'Shop By Category'}
            </p>
            <img src='../public/img/icons/down_arrow.svg'/>
           </div>
          }
        </div>
      </div>
    )
  }
}

Search.contextTypes = {
  router: object
}

export default Search
