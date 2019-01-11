import React, { Component } from 'react';
export default class About extends Component {
  render() {
    return (
      <React.Fragment>
      <section id="about">
              <div className="row">
                <div className="three columns">
                  <img className="profile-pic" src="images/cw-logo.jpg" alt />
                </div>
                <div className="nine columns main-col">
                  <h2>About Me</h2>
                  <p><strong>Web Developer </strong>known among peers and co-workers to be a considerate yet driven leader and team player. The combination of my analytical and creative nature has continually produced well thought out decisions that have kept the understanding and accessibility for others in mind. I have always been motivated to take both unorthodox and time-tested routes to find order out of chaos and ultimately simplify it without sacrificing beauty and functionality. As a developer in an unending quest to merge with new concepts, I am eager to contribute to and grow with new challenges.
                  </p>
                  <div className="row">
                    <div className="columns contact-details">
                      <h2>Contact</h2>
                      <p className="address">
                        <span>Christina Williams</span><br />

                      <span>LinkedIn: <a target="_blank" href="https://www.linkedin.com/in/amitzaman/"><i className="fa fa-linkedin" /></a><br/>GitHub: <a target="_blank" href="https://github.com/amitzed"><i className="fa fa-github" /></a><br/>WordPress Main Site: <a target="_blank" href="https://amitzaman.com/"><i className="fa fa-globe" /></a></span><br />
                        <span><a href="mailto:amitZMN@gmail.com">eMail Me</a></span>
                      </p>
                    </div>
                    <div className="columns download">
                      <p>
                        <a target="_blank" href="https://amitzaman.files.wordpress.com/2019/01/az-resume-email-2.pdf" className="button"><i className="fa fa-download" />View / Download Resume</a>
                      </p>
                    </div>
                  </div> {/* end row */}
                </div> {/* end .main-col */}
              </div>
            </section>
      </React.Fragment>
    );
  }
}
