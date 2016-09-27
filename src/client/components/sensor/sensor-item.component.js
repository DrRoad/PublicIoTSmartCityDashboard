import React from "react";
import { connect } from "react-redux";
var FontAwesome = require('react-fontawesome');

import store from "./../../store/store";

require('./sensor-item.component.scss');

export default class SensorItem extends React.Component {
  componentWillMount() {

  }
  onClick() {
    if (this.props.active) {
      store.dispatch({type: "REMOVE_SENSOR_FROM_STATION", payload: this.props.sensor.id});
    } else {
      store.dispatch({type: "ADD_SENSOR_TO_STATION", payload: this.props.sensor.id});
    }
  }
  render() {
    let active;
    if (this.props.active) {
      active = {
        color: "#ffffff",
        backgroundColor: this.props.sensor.color,
        borderColor: this.props.sensor.color,
      };
    }
    return <div style={active} className="sensor-item" onClick={this.onClick.bind(this)}>
      <div>{this.props.sensor.name}</div>
    </div>;
  }
}
