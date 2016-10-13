import React from "react";
import { connect } from "react-redux";
var FontAwesome = require('react-fontawesome');

import { fetchSensors } from "./../../actions/sensorsActions";
import SensorItem from "./sensor-item.component";

require('./sensor-select-list.component.scss');

@connect((store) => {
  return {
    station: store.stations.station,
    sensors: store.sensors.sensors,
  }
})
export default class SensorSelectList extends React.Component {
  componentWillMount() {
    this.props.dispatch(fetchSensors());
  }
  componentDidMount() {
    this.connection = new WebSocket('ws://127.0.0.1:1880/ws/sensors');
    // listen to onmessage event
    this.connection.onmessage = evt => {
      // add the new message to state
      this.props.dispatch({type: "UPDATE_ACTIVE_SENSORS", payload: JSON.parse(evt.data)});
    };
  }
  render() {
    const sensors = this.props.sensors.map((sensor) => {
      let active = false;
      if (this.props.station.sensors.includes(sensor.id)) {
        active = true;
      }
      return <SensorItem key={sensor.id} sensor={sensor} active={active} />
    });
    return <div className="sensor-select-list">
      {sensors}
    </div>;
  }
}
