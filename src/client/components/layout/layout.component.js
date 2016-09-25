import React from "react";
import { connect } from "react-redux";

import Header from "./../header/header.component";
import { fetchLocalization } from "./../../actions/localizationActions";

require('./layout.component.scss');

@connect((store) => {
  return {
    localization: store.localization.localization,
  }
})
export default class Layout extends React.Component {
  componentWillMount() {
    this.props.dispatch(fetchLocalization());
  }
  render() {
    return <div className="layout">
      <Header />
      <div className="body">
        {this.props.children}
      </div>
    </div>;
  }
}
