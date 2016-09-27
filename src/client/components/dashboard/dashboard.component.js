import React from "react";
import { connect } from "react-redux";
var FontAwesome = require('react-fontawesome');

import StationSearch from "./../station/station-search.component";
import StationList from "./../station/station-list.component";
import StationInfo from "./../station/station-info.component";
import SensorSelectList from "./../sensor/sensor-select-list.component";
import SensorInfoList from "./../sensor/sensor-info-list.component";

require('./dashboard.component.scss');

// @connect((store) => {
//   return {
//     localization: store.localization.localization,
//   }
// })
export default class Dashboard extends React.Component {
  componentWillMount() {
    this.setState({open: false});
  }
  onToggle() {
    this.setState({open: !this.state.open});
  }
  render() {
    let open = "";
    let icon = <FontAwesome name='chevron-right' />;
    if (this.state.open) {
      open = " open";
      icon = <FontAwesome name='chevron-left' />;
    }
    return <div className="dashboard">
      <div className={"left" + open}>
        <div className="content">
          <StationSearch />
          <StationList />
        </div>
        <div className="toggle">
          <div className="button" onClick={this.onToggle.bind(this)}>
            {icon}
          </div>
        </div>
      </div>
      <div className="right">
        <StationInfo />
        <SensorSelectList />
        <SensorInfoList />
      </div>
    </div>;
  }
}
