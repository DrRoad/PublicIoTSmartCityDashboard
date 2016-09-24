import React from "react";

require('./header.component.scss');

export default class Header extends React.Component {
  render() {
    return <div className="header">
      <div className="left">
        <div className="logo"></div>
        <div></div>
      </div>
      <div className="center"></div>
      <div className="right"></div>
    </div>;
  }
}
