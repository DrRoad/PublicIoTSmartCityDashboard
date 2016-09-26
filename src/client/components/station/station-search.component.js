import React from "react";
import ReactDom from "react-dom";
import { connect } from "react-redux";
var FontAwesome = require('react-fontawesome');

import store from "./../../store/store";
import { fetchStations } from "./../../actions/stationsActions";


require('./station-search.component.scss');

@connect((store) => {
  return {
    localization: store.localization.localization,
  }
})
export default class StationSearch extends React.Component {
  componentWillMount() {
    this.setState({query: ""});
  }
  resetInput() {
    // const input = ReactDom.findDOMNode(this.refs['input']);
    this.setState({query: ""});
    this.props.dispatch(fetchStations(""));
  }
  changeInput(event) {
    this.setState({query: event.target.value});
    this.props.dispatch(fetchStations(event.target.value));
  }
  render() {
    const { localization } = this.props;
    return <div className="station-search">
      <div className="search-box">
        <label htmlFor="station-search"><FontAwesome name='search' /></label>
        <input id="station-search" ref="input" type="text" placeholder={localization.sStationSearch} value={this.state.query} onChange={this.changeInput.bind(this)} />
        <FontAwesome name='remove' onClick={this.resetInput.bind(this)} />
      </div>
    </div>;
  }
}
