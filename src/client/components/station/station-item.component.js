import React from "react";
import { connect } from "react-redux";
var FontAwesome = require('react-fontawesome');

import store from "./../../store/store";

require('./station-item.component.scss');

export default class StationItem extends React.Component {
  componentWillMount() {

  }
  selectStation() {
    store.dispatch({type: "SELECT_STATION", payload: this.props.station});
  }
  render() {
    let active = "";
    let icon;
    if (this.props.active) {
      active = " active";
      icon = <FontAwesome name='chevron-right' />;
    }
    return <div className={"station-item" + active} onClick={this.selectStation.bind(this)}>
      <div className="left">
        <div>{this.props.station.name}</div>
        <div>{this.props.station.address}</div>
        <div>{"@ " + this.props.station.coordinate.latitude + ", " + this.props.station.coordinate.longitude}</div>
      </div>
      <div className="right">
        {icon}
      </div>
    </div>;
  }
}
