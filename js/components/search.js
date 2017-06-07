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

  toggleSearch (url) {
    this.setState({search: !this.state.search}, function() {
      this.context.router.transitionTo(url)
    })
  }

  submitSearch(e) {
    if(e.key === 'Enter' && e.target.value.length > 0) {
      this.setState({search: false}, function() {
        this.context.router.transitionTo('/search/' + e.target.value)
      })
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
                <ul>
                 <li onClick={this.toggleSearch.bind(this, '/clothing')}>Clothing</li>
                 <li onClick={this.toggleSearch.bind(this, '/accessories')}>Accessories</li>
                 <li onClick={this.toggleSearch.bind(this, '/home-decor')}>Home Decor</li>
                 <li onClick={this.toggleSearch.bind(this, '/baby')}>Baby</li>
                 <li onClick={this.toggleSearch.bind(this, '/kids')}>Kids</li>
                 <li onClick={this.toggleSearch.bind(this, '/misc')}>Misc</li>
                 <li onClick={this.toggleSearch.bind(this, '/')}>All Deals</li>
                 <li onClick={this.toggleSearch.bind(this, '/new')}>New Deals</li>
                 <li onClick={this.toggleSearch.bind(this, '/ending-soon')}>Ending Soon</li>
                 <li onClick={this.toggleSearch.bind(this, '/popular')}>Popular</li>
                 <li onClick={this.toggleSearch.bind(this, '/sneak-peeks')}>Sneak Peeks</li>
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
