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
      <div className="summary-card">
        <div className="summary-card-content">
          <div className="summary-card-data">
            <div className="summary-card-number green-success">
              <p>{ number }</p>
            </div>
            <div className="summary-card-title">
              <p>{ title }</p>
            </div>
          </div>
          <div className="summary-card-icon">
            <div className="summary-card-icon-content green-success">
              <i className={ icon }></i>
            </div>
          </div>
        </div>
      </div>
    );
  };
};

export default SummaryCard;