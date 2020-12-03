import React, { Component } from 'react';
import './Job.scss';

class Job extends Component {

  jobData = [];

  constructor (props) {
    super(props);
    this.state = {};
    this.setJobData(props.jobData);
  }

  setJobData(array) {
    this.jobData = array;
  }

  getJobData() {
    return this.jobData;
  }

  render() {
    const { name, position, endDate, startDate, tools, responsabilities } = this.getJobData();
    return (
      <div className="job">
        <div className="job-content">

          <div className="job-header">
            <div className="job-title">
              <h3><strong>{ name }</strong></h3>
              <h4>{ position }</h4>
              <div className="dates">
                <div className="date-start">
                  <p>{ startDate }</p>
                </div>
                <div className="separator">
                  <p> - </p>
                </div>
                <div className="date-end">
                  <p>{ endDate }</p>
                </div>
              </div>
            </div>
          </div>

          <div className="job-body">
            <div className="tools">
              <div className="tools-title">
                <h5>Herramientas utilizadas: </h5>
              </div>
              <div className="tools-list">
                <ul>
                  {
                    tools.map(tool => (
                      <li key={ tool.id }>
                        <strong>{ tool.title }: </strong> 
                        <small>{ tool.summary }</small>
                      </li>
                    ))
                  }
                </ul>
              </div>
            </div>
            <div className="main-responsabilities">
              <div className="responsabilities-title">
                <h5>Responsabilidades principales: </h5>
              </div>
              <div className="responsabilities-list">
                <ul>
                  {
                    responsabilities.map(resp => (
                      <li key={ resp.id }>
                        <strong>{ resp.description }</strong>
                      </li>
                    ))
                  }
                </ul>
              </div>
            </div>
          </div>

          <div className="separator">
            <hr/>
          </div>
          
        </div>
      </div>
    );
  };
};

export default Job;