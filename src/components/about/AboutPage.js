import React, { Component } from 'react';
import Header from '../common/Header';

class AboutPage extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <h1>This is a Redux project done by Srivatsa</h1>
        <p>This application has been built in react redux frontend</p>
        <p>This provides easy access to github repos</p>
      </div>
    );
  }
}

export default AboutPage;
