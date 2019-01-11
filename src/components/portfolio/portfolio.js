import React, { Component } from 'react';
export default class Portfolio extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="portfolio">
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>Some Projects I Have Worked On</h1>
              {/* portfolio-wrapper */}
              <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-01" title>
                      <img alt src="images/portfolio/imono4.png" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>IMONO</h5>
                          <p>Hubspot Custom Template</p>
                        </div>
                      </div>
                      <div className="link-icon"><i className="icon-plus" /></div>
                    </a>
                  </div>
                </div> {/* item end */}
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-02" title>
                      <img alt src="images/portfolio/angular1.png" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>Dramatic Designs</h5>
                          <p>Angular JS</p>
                        </div>
                      </div>
                      <div className="link-icon"><i className="icon-plus" /></div>
                    </a>
                  </div>
                </div> {/* item end */}
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-03" title>
                      <img alt src="images/portfolio/bb1.png" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>Bowery Bowl</h5>
                          <p>Laravel, PHP, Vue JS</p>
                        </div>
                      </div>
                      <div className="link-icon"><i className="icon-plus" /></div>
                    </a>
                  </div>
                </div> {/* item end */}
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-04" title>
                      <img alt src="images/portfolio/hitFinder.png" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>hitFinder</h5>
                          <p>MEAN Stack</p>
                        </div>
                      </div>
                      <div className="link-icon"><i className="icon-plus" /></div>
                    </a>
                  </div>
                </div> {/* item end */}
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-05" title>
                      <img alt src="images/portfolio/stringTheory.png" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>String Theory</h5>
                          <p>Express, Mongoose, Node JS</p>
                        </div>
                      </div>
                      <div className="link-icon"><i className="icon-plus" /></div>
                    </a>
                  </div>
                </div> {/* item end */}
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-06" title>
                      <img alt src="images/portfolio/musicwatts-1.png" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>Music Watts</h5>
                          <p>WordPress Custom Theme</p>
                        </div>
                      </div>
                      <div className="link-icon"><i className="icon-plus" /></div>
                    </a>
                  </div>
                </div> {/* item end */}
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-07" title>
                      <img alt src="images/portfolio/iw1.png" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>iWant</h5>
                          <p>Vue JS</p>
                        </div>
                      </div>
                      <div className="link-icon"><i className="icon-plus" /></div>
                    </a>
                  </div>
                </div> {/* item end */}
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-08" title>
                      <img alt src="images/portfolio/ebuys11.png" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>eBuys</h5>
                          <p>Ruby on Rails & React JS</p>
                        </div>
                      </div>
                      <div className="link-icon"><i className="icon-plus" /></div>
                    </a>
                  </div>
                </div>  {/* item end */}
              </div> {/* portfolio-wrapper end */}
            </div> {/* twelve columns end */}
            {/* Modal Popup
  	      --------------------------------------------------------------- */}
            <div id="modal-01" className="popup-modal mfp-hide">
              <img className="scale-with-grid" src="images/portfolio/modals/m-imono4.png" alt />
              <div className="description-box">
                <h4>IMONO - HubSpot Custom Template</h4>
                <p>A simple Landing Page site built first to deploy to Heroku and then to recreate and deploy a version of this site on HubSpot.</p>
                <span className="categories"><i className="fa fa-tag" />HubSpot, Web Design</span>
              </div>
              <div className="link-box">
                <a target="_blank" href="http://hubspot-developers-w1y9qt-5186824.hs-sites.com/imono">HubSpot-Live-Site</a>
                <a className="popup-modal-dismiss">Close</a>
              </div>
            </div>{/* modal-01 End */}
            <div id="modal-02" className="popup-modal mfp-hide">
              <img className="scale-with-grid" src="images/portfolio/modals/m-angular1.png" alt />
              <div className="description-box">
                <h4>Dramatic Designs - Angular Site</h4>
                <p>This Angular / Typescript app has several pages that can be accessed via the navigation bar. Future upgrades will include a gallery of projects on the "Our Work" page and likely feature Hero Zoom and Parallax effects.</p>
                <span className="categories"><i className="fa fa-tag" />Angular, Web Development</span>
              </div>
              <div className="link-box">
                <a target="_blank" href="https://amitzaman.com/portfolio/dramatic-designs/">Live-Site</a>
                <a className="popup-modal-dismiss">Close</a>
              </div>
            </div>{/* modal-02 End */}
            <div id="modal-03" className="popup-modal mfp-hide">
              <img className="scale-with-grid" src="images/portfolio/modals/m-bb1.png" alt />
              <div className="description-box">
                <h4>Bowery Bowl - Laravel/PHP, MySQL & Vue.js</h4>
                <p>This restaurant site has all workable menus and the Reservations page records all input messages and alerts/flash messages user when no required information is entered or when required information is sent/received.</p>
                <span className="categories"><i className="fa fa-tag" />Laravel, Branding, PHP, Vue</span>
              </div>
              <div className="link-box">
                <a target="_blank" href="http://bowerybowl.herokuapp.com/">Live-Site</a>
                <a className="popup-modal-dismiss">Close</a>
              </div>
            </div>{/* modal-03 End */}
            <div id="modal-04" className="popup-modal mfp-hide">
              <img className="scale-with-grid" src="images/portfolio/modals/m-hitFinder.png" alt />
              <div className="description-box">
                <h4>hitFinder - MEAN Stack (Collaboration)</h4>
                <p>In the interface of hitFinder an unregistered user can do a search for a list of hit songs by month, day and year, but they must be a registered and logged-in user to be able to create, edit, delete and save their personal playlists. Registed users can delete individual songs in their playlist or the whole playlist itself.</p>
                <span className="categories"><i className="fa fa-tag" />MEAN Stack, Mongoose, Express, Angular, Node, BCRYPT</span>
              </div>
              <div className="link-box">
                <a target="_blank" href="https://mighty-island-52745.herokuapp.com/">Live-Site</a>
                <a className="popup-modal-dismiss">Close</a>
              </div>
            </div>{/* modal-04 End */}
            <div id="modal-05" className="popup-modal mfp-hide">
              <img className="scale-with-grid" src="images/portfolio/modals/m-stringTheory.png" alt />
              <div className="description-box">
                <h4>String Theory - REST, EJS, Express, Mongoose, Node</h4>
                <p>In Builing this project, Node.js, Mongoose, Express and EJS were used and adhered to the MVC file structure. Additionally, several models had all 7 RESTful routes used and full CRUD.</p>
                <span className="categories"><i className="fa fa-tag" />EJS, Mongoose, Express, Node, Webdesign</span>
              </div>
              <div className="link-box">
                <a target="_blank" href="https://rocky-eyrie-78125.herokuapp.com/">Live-Site</a>
                <a className="popup-modal-dismiss">Close</a>
              </div>
            </div>{/* modal-05 End */}
            <div id="modal-06" className="popup-modal mfp-hide">
              <img className="scale-with-grid" src="images/portfolio/modals/m-musicwatts-1.png" alt />
              <div className="description-box">
                <h4>Music Watt - WordPress Custom Template</h4>
                <p>A Custom Theme Created in Wordpress.</p>
                <span className="categories"><i className="fa fa-tag" />WordPress, Custom Theme, Web Design, PHP</span>
              </div>
              <div className="link-box">
                <a target="_blank" href="http://www.behance.net">Live-Site</a>
                <a className="popup-modal-dismiss">Close</a>
              </div>
            </div>{/* modal-06 End */}
            <div id="modal-07" className="popup-modal mfp-hide">
              <img className="scale-with-grid" src="images/portfolio/modals/m-iw1.png" alt />
              <div className="description-box">
                <h4>iWant - Vue.js & BootStrap</h4>
                <p>The app has four pages to add different items, and can be expandable to add more. When entering items, there must be at least 3-characters in the entry, and will stretch-animate until the correct amount of characters are added to the entry. VUE default setting was used when creating the project and routes were manually installed near the end of development.<br/><br/>
When adding and deleting an item, css animations playfully indicate the action. The routing allows for easy navigation between the pages.</p>
                <span className="categories"><i className="fa fa-tag" />Vue, Bootstrap, Web Design</span>
              </div>
              <div className="link-box">
                <a target="_blank" href="https://iwant-app.herokuapp.com/">Live-Site</a>
                <a className="popup-modal-dismiss">Close</a>
              </div>
            </div>{/* modal-07 End */}
            <div id="modal-08" className="popup-modal mfp-hide">
              <img className="scale-with-grid" src="images/portfolio/modals/m-ebuys11.png" alt />
              <div className="description-box">
                <h4>eBuys - Ruby on Rails, React.js & PostgreSQL</h4>
                <p>This React & Ruby on Rails App is a simple wish list for the person who enjoys doing their shopping online.</p>
                <span className="categories"><i className="fa fa-tag" />React, Ruby on  Rails, PostgreSQL, Bulma Framework</span>
              </div>
              <div className="link-box">
                <a target="_blank" href="https://ebuys.herokuapp.com/">Live-Site</a>
                <a className="popup-modal-dismiss">Close</a>
              </div>
            </div>{/* modal-01 End */}
          </div> {/* row End */}
        </section>
      </React.Fragment>
    );
  }
}
