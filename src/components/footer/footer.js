import React, { Component } from 'react';
export default class Footer extends Component {
  render() {
    return (
      <React.Fragment>
      <footer>
        <div className="row">
          <div className="twelve columns">
            <ul className="social-links">
              <li><a target="_blank" href="https://www.linkedin.com/in/amitzaman/"><i className="fa fa-linkedin" /></a></li>
              <li><a target="_blank" href="https://github.com/amitzed"><i className="fa fa-github" /></a></li>
              <li><a target="_blank" href="https://amitzaman.com/"><i className="fa fa-globe" /></a></li>
            </ul>
            <ul className="copyright">
              <li>© Copyright 2019 Amit Zaman</li>
            </ul>
          </div>
          <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
        </div>
      </footer>
      </React.Fragment>
    );
  }
}
