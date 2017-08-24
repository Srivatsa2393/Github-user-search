import React, { Component } from 'react';

class AboutPage extends Component {
  render() {
    return (
      <div className="conatiner">
        <h1>This project is all about getting Github username by search</h1>
        <p>This project uses React, Redux, React-Router for its development</p>
        <p>The project makes available for easy search of different repos</p>
        <img className="responsive-img" src="../../create.jpeg" />
      </div>
    );
  }
}

export default AboutPage;
