import React from "react";
import { connect } from "react-redux";
var FontAwesome = require('react-fontawesome');

import { fetchStations } from "./../../actions/stationsActions";
import StationItem from "./station-item.component";


require('./station-list.component.scss');

@connect((store) => {
  return {
    station: store.stations.station,
    stations: store.stations.stations,
  }
})
export default class StationList extends React.Component {
  componentWillMount() {
    this.props.dispatch(fetchStations());
  }
  render() {
    const stations = this.props.stations.map((station) => {
      let active = false;
      if (this.props.station.id === station.id) {
        active = true;
      }
      return <StationItem key={station.id} station={station} active={active} />;
    });
    return <div className="station-list">
      {stations}
    </div>;
  }
}
