import React, { Component } from 'react';
export default class Resume extends Component {
  render() {
    return (
      <React.Fragment>
      <section id="resume">
        {/* Education
      ----------------------------------------------- */}
        <div className="row education">
          <div className="three columns header-col">
            <h1><span>Education</span></h1>
          </div>
          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <h3>General Assembly</h3>
                <p className="info">Web Development<span></span> <em className="date"></em></p>
                <p>

                </p>
              </div>
            </div> {/* item end */}
            <div className="row item">
              <div className="twelve columns">
                <h3>Marylhurst University</h3>
                <p className="info">MBA, Finance<span></span> <em className="date"></em></p>
                <p>

                </p>
              </div>
            </div> {/* item end */}
          </div> {/* main-col end */}
        </div> {/* End Education */}
        {/* Work
      ----------------------------------------------- */}
        <div className="row work">
          <div className="three columns header-col">
            <h1><span>Work</span></h1>
          </div>
          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <h3>Freelance</h3>
                <p className="info">Web Developer<span>•</span> <em className="date">2018 - Present</em></p>
                <p>
                  Please visit <a target="_blank" href="https://amitzaman.com/portfolio/">AmitZaman.com</a> to see a collection of all projects with direct links to live deployments.
                </p>
              </div>
            </div> {/* item end */}
            <div className="row item">
              <div className="twelve columns">
                <h3>General Assembly</h3>
                <p className="info">Web Development Fellow<span>•</span> <em className="date">2018</em></p>
                <p>
                  Participated in General Assembly's Web Development Immersive (WDI), a +450-hour full-time immersive web development program, completing in-class and personal projects focused on real-world applications of web
                  development principles, tools and best practices.
                </p>
              </div>
            </div> {/* item end */}
          </div> {/* main-col end */}
        </div> {/* End Work */}
        {/* Skills
      ----------------------------------------------- */}
        <div className="row skill">
          <div className="three columns header-col">
            <h1><span>Skills</span></h1>
          </div>
          <div className="nine columns main-col">
            <p>Areas of Experience include:<br/><br/>

              	FRONT-END: HTML/CSS, BOOTSTRAP, JAVASCRIPT, JQUERY, AJAX, NODE.JS, ANGULAR JS, REACT JS, VUE JS, SASS<br/><br/>

              	BACK-END: EXPRESS, MONGODB, MONGOOSE, RUBY ON RAILS, MYSQL, POSTGRESQL, PHP, PHPMYADMIN<br/><br/>

              	SOFTWARE: ATOM, BASH, TERMINAL, EXCEL, WORD, POWER POINT, AVID PRO-TOOLS<br/><br/>

              	ADDITIONAL: LARAVEL/PHP, GITHUB, WORDPRESS, HUBSPOT, HEROKU, SVG, AWS CERTIFIED CLOUD PRACTITIONER
            </p>
            <div className="bars">
              <ul className="skills">
                <li><span className="bar-expand wordpress" /><em>Wordpress</em></li>
                <li><span className="bar-expand hubspot" /><em>HubSpot</em></li>
                <li><span className="bar-expand css" /><em>CSS</em></li>
                <li><span className="bar-expand html5" /><em>HTML5</em></li>
                <li><span className="bar-expand javascript" /><em>JavaScript</em></li>
                <li><span className="bar-expand jquery" /><em>jQuery</em></li>
                  <li><span className="bar-expand ruby" /><em>Ruby on Rails</em></li>
                  <li><span className="bar-expand aws" /><em>Amazon Web Services</em></li>
              </ul>
            </div>{/* end skill-bars */}
          </div> {/* main-col end */}
        </div> {/* End skills */}
      </section>
      </React.Fragment>
    );
  }
}
