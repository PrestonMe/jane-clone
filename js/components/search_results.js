import React, { Component } from 'react'
import axios from 'axios'
import Nav from './nav'
import Footer from './footer'
import LargeProduct from './largeproduct'
import SmallProduct from './smallproduct'

class SearchResults extends Component {
  constructor(props) {
    super(props)
    this.state = {
      results : []
    }
  }


  componentWillReceiveProps (nextProps) {
      axios.get('/search', {
        params: {
          searchTerm: nextProps.params.term
        }
      }).then(res => {
        this.setState({results: res.data})
      })
  }

  componentDidMount () {
    axios.get('/search', {
      params: {
        searchTerm: this.props.params.term
      }
    }).then(res => {
      this.setState({results: res.data})
    })
  }

  render() {
    return (
      <div>
        <Nav />
          <div className='shop'>
            <div className='products-container'>
              <p className='search-results'>{this.state.results.length} Results for "
                <span className='search-term'>{this.props.params.term}
                </span>"
              </p>
              {this.state.results[0]
                ? this.state.results.map(product => {
                  return (
                    <SmallProduct {...product} key={product.id} />
                  )
                })
                : ''
              }
            </div>
          </div>
        <Footer />
      </div>
    )
  }
}

export default SearchResults
