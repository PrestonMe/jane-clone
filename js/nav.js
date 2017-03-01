import React from 'react'

var Nav = React.createClass({
  render: function() {
    return (
      <div>
        <h1>
          {this.props.title}
        </h1>
      </div>
    )
  }
})

export default Nav
