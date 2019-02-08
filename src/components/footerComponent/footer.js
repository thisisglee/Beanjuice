import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer>
            <div className="icons"><i className="fab fa-facebook fa-4x"></i> <i className="fab fa-twitter-square fa-4x"></i></div>
            <div className="address">
                <h2 className="phone"><a href="tel:170579439848">705-797-2455</a></h2>
                    <h2>Coffee House</h2>
                    <h3>174 Bayfield St Barrie, ON Canada L4M 3B5</h3>
            </div>
    </footer>
    );
  }
}

export default Footer;
