import React from "react";
import { connect } from "react-redux";
var FontAwesome = require('react-fontawesome');

import StationSearch from "./../station/station-search.component";
import StationList from "./../station/station-list.component";

require('./dashboard.component.scss');

// @connect((store) => {
//   return {
//     localization: store.localization.localization,
//   }
// })
export default class Dashboard extends React.Component {
  render() {
    // const { localization } = this.props;
    return <div className="dashboard">
      <div className="left">
        <div className="content">
          <StationSearch />
          <StationList />
        </div>
        <div className="toggle">
          <div className="button">
            <FontAwesome name='chevron-right' />
          </div>
        </div>
      </div>
      <div className="right"></div>
    </div>;
  }
}
