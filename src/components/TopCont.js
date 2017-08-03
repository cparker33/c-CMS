import React, { Component } from 'react'
import '../assets/styles/css/cTopCont.css'
import SearchCont from './TopCont/SearchCont'

class TopCont extends Component {
  render() {
    return (
      <div className="cTopCont">
        <SearchCont />
      </div>
    )
  }
}

export default TopCont;