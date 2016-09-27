import React from "react";
import { connect } from "react-redux";
var FontAwesome = require('react-fontawesome');

import SensorInfo from "./sensor-info.component";

require('./sensor-info-list.component.scss');

@connect((store) => {
  return {
    station: store.stations.station,
    sensors: store.sensors.sensors,
  }
})
export default class SensorInfoList extends React.Component {
  componentWillMount() {

  }
  render() {
    const sensors = this.props.sensors.filter(includes.bind(null, this.props.station)).map((sensor) => {
      // let active = false;
      // if (this.props.station.sensors.includes(sensor.id)) {
      //   active = true;
      // }
      return <SensorInfo key={sensor.id} sensor={sensor} />
    });
    return <div className="sensor-info-list">
      {sensors}
    </div>;
  }
}

function includes(station, sensor, index, array) {
  if (station == null) {
    return false;
  }
  return station.sensors.includes(sensor.id);
}
