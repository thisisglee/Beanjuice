import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div className="home">
          <div className="showcase">
            <h1>We love coffee</h1>
            <h3>on average, we drink 3 cups per day.</h3>
            <a href="#services" class="btn">View our services</a>
          </div>
      </div>
  );
  }
}

export default Home;
