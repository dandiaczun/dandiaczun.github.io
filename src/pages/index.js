import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Waypoint from 'react-waypoint'

import Layout from '../components/layout'
import Header from '../components/Header'
import Nav from '../components/Nav'

import headshot from '../assets/images/headshot.jpg'
import southwest_thumb from '../assets/images/southwest-thumbnail.jpg'
import clairol_thumb from '../assets/images/clairol-thumbnail.jpg'
import devry_thumb from '../assets/images/devry-thumbnail.jpg'
import sirva_thumb from '../assets/images/sirva-thumbnail.jpg'
import lenovo_social_thumb from '../assets/images/lenovo-social-thumbnail.jpg'
import lenovo_product_thumb from '../assets/images/lenovo-product-thumbnail.jpg'

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
                {/*<div className="read-more-wrap">
                  <div className="read-more-content">
                    <p>I don't have a particulary interesting story as to how I became a UX developer, but I've always loved technology and learning how things work. Pair that with an eye for design and layout and here I am over 10 years later doing what I love, designing & building clean and elegant web solutions for Fortune 500 clients such as Southwest Airlines, Discover and United Healthcare. I love solving problems and learning new skills along the way, wherever and however possible.</p>
                    <p>In my free time I'm most likely doing something music related, whether it's catching a show, playing drums or bass guitar with an ensemble at the <a href="https://www.oldtownschool.org/" target="_blank">Old Town School of Music</a>, or browsing a record shop.</p>
                  </div>
                </div>*/}
                <input type="checkbox" class="read-more-state" id="post-2" />
                <div className="read-more-wrap">
                  <p>You're probably asking yourself "what the $#@% is a UX developer?" I thought the same when I first heard it, but then after taking a step back I realized it's what describes me best. I've always been passionate about the left-brain/right-brain marriage of design and technology and have strived to incorporate both into my work as much as possible.</p>
                  <p className="read-more-target">I don't have a particulary interesting story as to how I became a UX developer, but I've always loved technology and learning how things work. Pair that with an eye for design and layout and here I am over 10 years later doing what I love, designing & building clean and elegant web solutions for Fortune 500 clients such as Southwest Airlines, Discover and United Healthcare. I love solving problems and learning new skills along the way, wherever and however possible.</p>
                  <p className="read-more-target">In my free time I'm most likely doing something music related, whether it's catching a show, playing drums or bass guitar with an ensemble at the <a href="https://www.oldtownschool.org/" target="_blank">Old Town School of Music</a>, or browsing a record shop.</p>
                </div>
                <label for="post-2" class="read-more-trigger"></label>
              </div>
              <span className="image"><img src={headshot} alt="" /></span>
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
                <span className="image">
                  <img src={southwest_thumb} alt="Southwest Portfolio Thumbnail" />
                </span>
                <h3>Southwest Airlines</h3>
                <Link to="/southwest" className="button">Read More</Link>
              </li>
              <li>
                <span className="image">
                  <img src={clairol_thumb} alt="ClairolPro Portfolio Thumbnail" />
                </span>
                <h3>Clairol Pro</h3>
                <Link to="/clairolpro" className="button">Learn More</Link>
              </li>
              <li>
                <span className="image">
                  <img src={devry_thumb} alt="DeVry Portfolio Thumbnail" />
                </span>
                <h3>DeVry University</h3>
                <Link to="/devry" className="button">Learn More</Link>
              </li>
              <li>
                <span className="image">
                  <img src={sirva_thumb} alt="SIRVA Portfolio Thumbnail" />
                </span>
                <h3>SIRVA</h3>
                <Link to="/sirva" className="button">Learn More</Link>
              </li>
              <li>
                <span className="image">
                  <img src={lenovo_social_thumb} alt="Lenovo Social Thumbnail" />
                </span>
                <h3>Lenovo Social</h3>
                <Link to="/lenovo-social" className="button">Learn More</Link>
              </li>
              <li>
                <span className="image">
                  <img src={lenovo_product_thumb} alt="Lenovo Product Thumbnail" />
                </span>
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
