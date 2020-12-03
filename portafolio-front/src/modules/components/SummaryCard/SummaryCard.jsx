import React, { Component } from 'react';

import './SummaryCard.scss';

class SummaryCard extends Component {

  binding = {};

  constructor(props) {
    super(props);
    this.state = {};
    this.setProps(props);
  }

  setProps(props) {
    this.binding = props;
  }

  getProps() {
    return this.binding;
  }

  render() {
    const { number, title, icon } = this.getProps();
    return (
      <div className="col card card-black">
        <div className="card-body">
          <div className="row">
            <div className="col">
              <div className="green-success card-black-number">
                <p>{ number }</p>
              </div>
            </div>
            <div className="col">
              <div className="green-success card-black-icon">
                <i className={ icon }></i>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="card-black-title">
                <p>{ title }</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
};

export default SummaryCard;