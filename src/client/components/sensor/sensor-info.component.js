import React from "react";
import ReactDom from "react-dom";
import { connect } from "react-redux";
var FontAwesome = require('react-fontawesome');

import graphConfig from "./../../config/graph";
import { google10Color } from "./../../utils/color";
import { fetchRecord } from "./../../actions/recordActions";


require('./sensor-info.component.scss');

@connect((store) => {
  return {
    mouse: store.canvas.mouse,
    record: store.record.record,
    updated: store.record.updated,
  }
})
export default class SensorInfo extends React.Component {
  componentWillMount() {
    this.chart = null;
    this.props.dispatch(fetchRecord());
    this.setState({width: 0, height: 0});
  }
  componentDidMount() {
    const wrapper = ReactDom.findDOMNode(this.refs['wrapper']);
    this.setState({width: wrapper.clientWidth, height: graphConfig.iSensorInfoGraphHeight});
    const canvas = ReactDom.findDOMNode(this.refs['canvas']);
    canvas.addEventListener('mousemove', function(event) {
      let mousePos = getMousePos(canvas, event);
      this.props.dispatch({type: "SET_MOUSE_POSITION", payload: mousePos});
      }.bind(this), false);

    setTimeout(function() {
      this.renderGraph(this.props);
      this.updateGraph(this.props);
    }.bind(this), 100);
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.updated.valueOf() != nextProps.updated.valueOf() || this.props.record.length != nextProps.record.length) {
      this.renderGraph(nextProps);
    } else {
      this.updateGraph(nextProps);
    }
  }
  updateGraph(props) {
    if (this.chart) {
      this.chart.update(null, props.mouse);
    }
  }
  renderGraph(props) {
    const canvas = ReactDom.findDOMNode(this.refs['canvas']);
    const ctx = canvas.getContext("2d");

    var data = [
      {
        label: props.sensor.name,
        strokeColor: google10Color(props.sensor.id),
        pointColor: google10Color(props.sensor.id),
        pointStrokeColor: '#ffffff',
        data: props.record,
      }
    ];
    this.chart = new Chart(ctx).Scatter(data, {
        tooltipEvents: null,
        mousePosition: null,
        axisStrokeWidth: 4,
        axisStrokeColor: "#cccccc",
        bezierCurve: false,
        bezierCurveTension: 0.3,
				showTooltips: true,
				scaleShowHorizontalLines: true,
				scaleShowLabels: true,
				scaleType: "date",
      }
    );
  }
  render() {
    const canvasStyle = {
      width: this.state.width,
      height: this.state.height
    };
    return <div ref="wrapper" className="sensor-info">
      <div className="title">{this.props.sensor.name}</div>
      <canvas ref="canvas" className="" style={canvasStyle} />
    </div>;
  }
}

function getMousePos(canvas, event) {
  let rect = canvas.getBoundingClientRect();
  return {
    x: event.clientX - rect.left,
    y: event.clientY - rect.top
  };
}
