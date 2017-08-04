import React, { Component } from 'react';
import '../../assets/styles/css/cSearchCont.css';

class SearchCont extends Component {
  render() {
    return (
      <div className="cSearchCont">
        <div className="cInput">
          <div className="cSearchInpCont">
            <input className="cInpText" type="text" placeholder="Search..." />
            </div>
          <div className="cSearchInpCont cSearchCheck">
            <input className="cSearchCheckBox" type="checkbox" id="cbid_01" />
            <label className="cSearchLabel" for="cbid_01">Label</label>
          </div>
          <div className="cSearchInpCont cSearchCheck">
            <input className="cSearchCheckBox" type="checkbox" id="cbid_02" />
            <label className="cSearchLabel" for="cbid_02">Label</label>
          </div>
        </div>

        <div className="cTopData">

        </div>
            
          
      </div>
    )
  }
}

export default SearchCont;