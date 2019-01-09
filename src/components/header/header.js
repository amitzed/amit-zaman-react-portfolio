import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    let mySiteData = this.props.mySiteData;
    return (
      <React.Fragment>
        <header id="home">
          <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
            <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
            <ul id="nav" className="nav">
              <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
              <li><a className="smoothscroll" href="#about">About</a></li>
              <li><a className="smoothscroll" href="#portfolio">Portfolio</a></li>
              <li><a className="smoothscroll" href="#resume">Resume</a></li>
              <li><a className="smoothscroll" href="#contact">Contact</a></li>
            </ul> {/* end #nav */}
          </nav> {/* end #nav-wrap */}
          <div className="row banner">
            <div className="banner-text">
              <h1 className="responsive-headline">{mySiteData.name}</h1>
              <h3>{mySiteData.role}</h3>
              <h3> Click <a className="smoothscroll" href="#about">here </a>to learn more <a className="smoothscroll" href="#about">about me</a>.</h3>
              <hr />
              <ul className="social">
                <li><a target="_blank" href="https://www.linkedin.com/in/amitzaman/"><i className="fa fa-linkedin" /></a></li>
                <li><a target="_blank" href="https://github.com/amitzed"><i className="fa fa-github" /></a></li>
                <li><a target="_blank" href="https://amitzaman.com/"><i className="fa fa-globe" /></a></li>                
              </ul>
            </div>
          </div>
          <p className="scrolldown">
            <a className="smoothscroll" href="#about"><i className="icon-down-circle" /></a>
          </p>
        </header>
      </React.Fragment>
    );
  }
}
