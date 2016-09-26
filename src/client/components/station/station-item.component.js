import React from "react";
import { connect } from "react-redux";
var FontAwesome = require('react-fontawesome');

require('./station-item.component.scss');

@connect((store) => {
  return {
    stations: store.stations.stations,
  }
})
export default class StationItem extends React.Component {
  componentWillMount() {

  }
  render() {
    return <div className="station-item">
      <div>{this.props.station.name}</div>
      <div>{this.props.station.address}</div>
      <div>{"@ " + this.props.station.coordinate.latitude + ", " + this.props.station.coordinate.longitude}</div>
    </div>;
  }
}
