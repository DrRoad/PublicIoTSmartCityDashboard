import React from "react";
import { connect } from "react-redux";
var FontAwesome = require('react-fontawesome');

require('./sensor-info.component.scss');

export default class SensorInfo extends React.Component {
  componentWillMount() {

  }
  render() {
    let active;
    if (this.props.active) {
      active = {
        borderColor: this.props.sensor.color,
      };
    }
    return <div style={active} className="sensor-info">
      <div>{this.props.sensor.name}</div>
    </div>;
  }
}
