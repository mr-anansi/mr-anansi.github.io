import React, { useState } from 'react'


const About = () => {


  return (
    <div className="section">
      <div className="container">
        <div className="tile is-ancester">
          <div className="tile is-parent is-vertical">
            <div className="tile is-child box">
              <h3 className="subtitle">Bio</h3>
              <p>
                I love making things work. I’ve been fascinated by the logic behind JavaScript since my introduction within digital roles. It also inspired my curiosity in how tech affected user solutions. I embrace change and love to learn more which is why I’m excited to continue my career as a junior developer.
              </p>
            </div>
            {/* <div className="tile is-child box"> */}
            <div className="tile is-parent">
              <div className="tile is-parent">
                <div className="tile is-child box">
                  <h3 className="subtitle">Little icons</h3>

                </div>
              </div>
              <div className="tile is-parent">
                <div className="tile is-child box">
                  <h3 className="subtitle">Little icons 2</h3>
                  <p>
                    Info
                  </p>
                </div>
              </div>
            </div>

          </div>
          {/* </div> */}
          <div className="tile is-4 is-parent is-vertical">
            <div className="tile is-child box">
              <div className="columns">
                <div className="column">
                  <div>
                    <figure><i className="skills-icon devicon-html5-plain"></i></figure>
                    <span>HTML</span>
                  </div>
                  <div>
                    <figure><i className="skills-icon devicon-css3-plain"></i></figure>
                    <span>CSS</span>
                  </div>
                  <div>
                    <figure><i className="skills-icon devicon-javascript-plain"></i></figure>
                    <span>JavaScript</span>
                  </div>
                  <div>
                    <figure><i className="skills-icon devicon-python-plain"></i></figure>
                    <span>Python</span>
                  </div>
                  <div>
                    <figure><i className="skills-icon devicon-bootstrap-plain"></i></figure>
                    <span>Bootstrap</span>
                  </div>
                  <div>
                    <figure><i className="skills-icon devicon-react-original"></i></figure>
                    <span>React</span>
                  </div>


                </div>
                <br />

                <div className="column">
                  <div>
                    <figure>  <i className="skills-icon devicon-express-original"></i></figure>
                    <span>Express</span>
                  </div>
                  <div>
                    <figure><i className="skills-icon devicon-nodejs-plain"></i></figure>
                    <span>Node.js</span>
                  </div>
                  <div>
                    <figure><i className="skills-icon devicon-sass-original"></i></figure>
                    <span>SASS</span>
                  </div><div>
                    <figure><i className="skills-icon devicon-babel-plain"></i></figure>
                    <span>Babel</span>
                  </div><div>
                    <figure><i className="skills-icon devicon-mongodb-plain"></i></figure>
                    <span>MongoDB</span>
                  </div><div>
                    <figure><i className="skills-icon devicon-git-plain"></i></figure>
                    <span>Git</span>
                  </div>
                </div>
                <br />

                <div className="column">
                  <div>
                    <figure><i className="skills-icon devicon-github-plain"></i></figure>
                    <span>Github</span>
                  </div><div>
                    <figure><i className="skills-icon devicon-heroku-original"></i></figure>
                    <span>Heroku</span>
                  </div>
                  <div>
                    <figure><i className="skills-icon devicon-mocha-plain"></i></figure>
                    <span>Mocha</span>
                  </div>
                  <div>
                    <figure><i className="skills-icon devicon-chrome-plain"></i></figure>
                    <span>Chrome</span>
                  </div><div>
                    <figure><i className="skills-icon devicon-atom-original"></i></figure>
                    <span>Atom</span>
                  </div><div>
                    <figure><i className="skills-icon devicon-trello-plain"></i></figure>
                    <span>Trello</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="tile is-child box">
              <h3 className="subtitle">Little icons 3</h3>
              <p>
                Info
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default About