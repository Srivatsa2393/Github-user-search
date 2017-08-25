import React, { Component } from 'react';

import Searchbar from './Searchbar';

class HomePage extends Component {
  render() {
    return (
      <div className="container">
        <Searchbar
          user={this.state.user}
          onChange={this.updateSearch}
          onSave={this.saveSearch}
        />
      </div>
    );
  }
}

export default HomePage;
