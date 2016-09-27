import React from "react";
import { connect } from "react-redux";
var FontAwesome = require('react-fontawesome');

import store from "./../../store/store";

require('./station-info.component.scss');

@connect((store) => {
  return {
    station: store.stations.station,
    localization: store.localization.localization,
  }
})
export default class StationInfo extends React.Component {
  componentWillMount() {

  }
  render() {
    if (this.props.station == null) {
      return null;
    }
    const { localization } = this.props;
    return <div className="station-info">
      <div className="left">
        <div className="name">{this.props.station.name}</div>
        <div className="address">{this.props.station.address}</div>
        <div className="coordinate">{"@ " + this.props.station.coordinate.latitude + ", " + this.props.station.coordinate.longitude}</div>
      </div>
      <div className="right">
        <div className="button">
          {localization.sShowMap}
        </div>
      </div>
    </div>;
  }
}
