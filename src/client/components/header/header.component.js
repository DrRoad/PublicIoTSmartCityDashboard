import React from "react";
import { hashHistory } from "react-router"
import { connect } from "react-redux";

require('./header.component.scss');

@connect((store) => {
  return {
    localization: store.localization.localization,
  }
})
export default class Header extends React.Component {
  routeToHome() {
    hashHistory.push({pathname: '/'});
  }
  render() {
    const { localization } = this.props;
    return <div className="header">
      <div className="left" onClick={this.routeToHome.bind(this)}>
        <div className="logo"></div>
        <div className="title">{localization.sSiteTitle}</div>
      </div>
      <div className="center"></div>
      <div className="right"></div>
    </div>;
  }
}
