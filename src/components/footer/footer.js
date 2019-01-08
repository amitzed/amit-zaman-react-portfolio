import React, { Component } from 'react';
export default class Footer extends Component {
  render() {
    return (
      <React.Fragment>
      <footer>
        <div className="row">
          <div className="twelve columns">
            <ul className="social-links">
              <li><a target="_blank" href="#"><i className="fa fa-facebook" /></a></li>
              <li><a target="_blank" href="#"><i className="fa fa-twitter" /></a></li>
              <li><a target="_blank" href="#"><i className="fa fa-google-plus" /></a></li>
              <li><a target="_blank" href="#"><i className="fa fa-linkedin" /></a></li>
              <li><a target="_blank" href="#"><i className="fa fa-instagram" /></a></li>
              <li><a target="_blank" href="#"><i className="fa fa-dribbble" /></a></li>
              <li><a target="_blank" href="#"><i className="fa fa-skype" /></a></li>
            </ul>
            <ul className="copyright">
              <li>© Copyright 2019 Amit Zaman</li>
              <li>Design by <a target="_blank" title="AmitZaman" href="https://amitzaman.com/">Amit Zaman</a></li>
            </ul>
          </div>
          <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
        </div>
      </footer>
      </React.Fragment>
    );
  }
}
