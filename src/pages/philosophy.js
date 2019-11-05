import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import philosophy1 from '../assets/images/philosophy1.jpg'
import philosophy2 from '../assets/images/philosophy2.jpg'


class Generic extends React.Component {
  render() {

    return (
      <Layout>
        <Helmet title="Dan Diaczun | Chicago UI Developer" />
        <header id="header">
            <h1>Philosophy</h1>
            <p>Product Page A/B Tests</p>
        </header>
        <div id="main">
        <div className="portfolioNav">
          <ul>
            <li><a href="/southwest" id="prev">Prev</a></li>
            <li><a href="/" id="home">Home</a></li>
            <li><a href="/devry" id="next">Next</a></li>
          </ul>
        </div>
          <section id="content" className="main">
          <h2>Summary</h2>
            <p>One of my first projects at Performics was to design and build an animated infographic for Icebreaker, a New Zealand based outdoor clothing brand. Icebreaker was in the midst of a North American expansion and wanted to showcase some of its products with interactive content that would demonstrate its offerings and capabilities. My team and I recommended an infographic with animated elements that would show how Icebreaker products could be used in a real world setting and chose a hike up Mt. Whitney, the highest summit in the continental United States. </p>
            <span className="image main"><img src={philosophy1} alt="" />
            </span>
            <span className="image main"><img src={philosophy2} alt="" />
            </span>
            <h2>Results</h2>
            <p>The infographic was launched in March 2015 prior to Mt. Whitney’s climbing season, which runs from May through October and was featured on Icebreaker’s Facebook page. The infographic’s launch helped drive traffic to Icebreaker’s site which saw an increase in conversions prior to Mt. Whitney’s climbing season.</p>
            <h2>Role & Technologies Used</h2>
            <p>I was tasked with the design and development of this project which was designed with Adobe Illustrator & Photoshop and built using HTML5 and CSS3 for the animated elements. </p>
          </section>
          <div className="portfolioNav">
            <ul>
              <li><a href="/southwest" id="prev">Prev</a></li>
              <li><a href="/" id="home">Home</a></li>
              <li><a href="/devry" id="next">Next</a></li>
            </ul>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Generic
