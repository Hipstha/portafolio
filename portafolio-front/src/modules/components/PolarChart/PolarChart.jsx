import React, { Component } from 'react';
import {Polar} from 'react-chartjs-2';

class PolarChart extends Component {

  data = {
    datasets: [],
    labels: []
  }

  constructor(props) {
    super(props);
    this.state = {};
    this.setDataSets(props.data[0]);
    this.setDataLables(props.data[1]);
  }

  setDataSets(obj) {
    this.data.datasets = obj;
  }

  setDataLables(array) {
    this.data.labels = array;
  }

  getData() {
    return this.data;
  }
  
  render() {
    return (
      <Polar data={this.getData()} width={100} height={80} />
    );
  };
};

export default PolarChart;