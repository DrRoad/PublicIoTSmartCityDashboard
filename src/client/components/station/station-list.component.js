import React from "react";
import { connect } from "react-redux";
var FontAwesome = require('react-fontawesome');

import { fetchStations } from "./../../actions/stationsActions";
import StationItem from "./station-item.component";


require('./station-list.component.scss');

@connect((store) => {
  return {
    stations: store.stations.stations,
  }
})
export default class StationList extends React.Component {
  componentWillMount() {
    this.props.dispatch(fetchStations());
  }
  render() {
    const stations = this.props.stations.map(station => <StationItem key={station.id} station={station} />);
    return <div className="station-list">
      {stations}
    </div>;
  }
}
