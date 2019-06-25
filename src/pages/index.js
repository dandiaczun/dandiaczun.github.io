import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Waypoint from 'react-waypoint'

import Layout from '../components/layout'
import Header from '../components/Header'
import Nav from '../components/Nav'
import pic01 from '../assets/images/pic01.jpg'

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stickyNav: false
    }
  }

  _handleWaypointEnter= () => {
    this.setState(() => ({ stickyNav: false }));
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }));
  }

  render() {

    return (
      <Layout>
        <Helmet title="Dan Diaczun // Chicago UX Developer" />

        <Header />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        >
        </Waypoint>
        <Nav sticky={this.state.stickyNav} />

        <div id="main">

          <section id="intro" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>About Me</h2>
                </header>
                <p>You're probably asking yourself "what the $#@% is a UX developer?" I thought the same when I first heard it, but then after taking a step back I realized it's what describes me best. I've always been passionate about the intersection of creativity and technology and </p>
                <ul className="actions">
                  <li><Link to="/generic" className="button">Read More</Link></li>
                </ul>
              </div>
              <span className="image"><img src={pic01} alt="" /></span>
            </div>
          </section>

          <section id="first" className="main special">
            <header className="major">
              <h2>How I Work</h2>
            </header>
            <ul className="features">
              <li>
                <span className="icon major style1 fa-code"></span>
                <h3>Code</h3>
                <p>With a background in front-end development and natural curiosity to understand how things work, I'm comfortable across the modern front-end stack and am quick to learn new technologies.</p>
              </li>
              <li>
                <span className="icon major style3 fa-user-circle-o"></span>
                <h3>User Experience</h3>
                <p>Understanding the users' needs and behaviors is the cornerstone of my work. I strive to use an empathetic in my design decisions and use analytics to hone my understanding.</p>
              </li>
              <li>
                <span className="icon major style5 fa-lightbulb-o"></span>
                <h3>Strategy</h3>
                <p>Whether it's with a pen &amp; paper or a whiteboard, I love brainstorming solutions to complex problems. No idea is a bad idea and nothing is off limits.</p>
              </li>
            </ul>
          </section>

          <section id="second" className="main special">
            <header className="major">
              <h2>My Portfolio</h2>
            </header>
            <ul className="portfolio">
              <li>
                <span className="icon major style1"></span>
                <h3>Southwest Airlines</h3>
                <Link to="/southwest" className="button">Learn More</Link>
              </li>
              <li>
                <span className="icon major style3"></span>
                <h3>Clairol Pro</h3>
                <Link to="/clairolpro" className="button">Learn More</Link>
              </li>
              <li>
                <span className="icon major style5"></span>
                <h3>DeVry University</h3>
                <Link to="/devry" className="button">Learn More</Link>
              </li>
              <li>
                <span className="icon major style5"></span>
                <h3>SIRVA</h3>
                <Link to="/sirva" className="button">Learn More</Link>
              </li>
              <li>
                <span className="icon major style5"></span>
                <h3>Lenovo Social</h3>
                <Link to="/lenovo-social" className="button">Learn More</Link>
              </li>
              <li>
                <span className="icon major style5"></span>
                <h3>Lenovo Product Launch</h3>
                <Link to="/lenovo-product" className="button">Learn More</Link>
              </li>
            </ul>
          </section>
          {/*
          <section id="cta" className="main special">
            <header className="major">
              <h2>Congue imperdiet</h2>
              <p>Donec imperdiet consequat consequat. Suspendisse feugiat congue<br />
              posuere. Nulla massa urna, fermentum eget quam aliquet.</p>
            </header>
            <footer className="major">
              <ul className="actions">
                <li><Link to="/generic" className="button special">Get Started</Link></li>
                <li><Link to="/generic" className="button">Learn More</Link></li>
              </ul>
            </footer>
          </section>
          */}
        </div>

      </Layout>
    )
  }
}

export default Index
