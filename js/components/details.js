import React from 'react'

class Details extends React.Component {

  render() {
    var detail = this.props.detail
    return (
      <li>{detail}</li>
    )
  }
}

export default Details
