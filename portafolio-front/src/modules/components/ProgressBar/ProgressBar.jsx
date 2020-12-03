import React, { Component } from 'react';
import './ProgressBar.scss';

class ProgressBar extends Component {

  propsObj = {};
  constructor(props) {
    super(props);
    this.state = {};
    this.setProps(props);
  }
  
  setProps(propsObj) {
    this.propsObj = propsObj;
  }

  getProps() {
    return this.propsObj;
  }

  render() {
    const { text, percentage, icon } = this.getProps();
    return (
      <div className="progress-general-skills">
        <div className="progress-title-head row">
          <div className="progress-general-title col">
            <h4>{ text }</h4>
          </div>
          <div className="progress-general-icon col" style={{color: icon.iconColor}} >
            <i className={icon.icon}></i>
          </div>
        </div>
        <div className="progress">
          <div className="progress-bar" 
               role="progressbar" 
               style={{width: percentage, backgroundColor: icon.iconColor}} 
               aria-valuemin="0" 
               aria-valuemax="100">
                 { percentage }
          </div>
        </div>
      </div>
    )
  };
};

export default ProgressBar;

