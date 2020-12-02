import React, { Component } from 'react';
import './TitlePage.scss';

class TitlePage extends Component {

  title = '';

  constructor(props) {
    super(props);
    this.state = {};
    this.title = props.titlePage;
  }

  render() {
    return (
      <h2 className="title-of-this-page">
        { this.title }
      </h2>
    )
  }
}

export default TitlePage;
