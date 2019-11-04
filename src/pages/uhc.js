import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import uhc1 from '../assets/images/uhc1.jpg'
import uhc2 from '../assets/images/uhc2.jpg'
import uhc3 from '../assets/images/uhc3.jpg'

class Generic extends React.Component {
  render() {

    return (
      <Layout>
        <Helmet title="Dan Diaczun | Chicago UI Developer" />
        <header id="header">
            <h1>United Healthcare</h1>
            <p>A/B Tests</p>
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
            <p>During my time at Performics I was tasked with creating a roadmap for a series of A/B tests from 2016 through 2019 which I also designed and built using Visual Website Optimizer (VWO) and Optimizely. All of the tests used a data-driven approach based on user research, brand guidelines and traffic data from Google Analytics. These sources were then leveraged to influence strategy and design decisions. The tests ranged in complexity from simple user interface modifications to re-designing the funnel checkout process as well as implementing a chat support platform. </p>
            <span className="image main"><img src={uhc1} alt="" /></span>
            <h5>fuck</h5>
            <span className="image main"><img src={uhc2} alt="" /></span>
            <h5>fuck</h5>
            <span className="image main"><img src={uhc3} alt="" /></span>
            <h5>butt</h5>
            <h2>Results</h2>
            <p>The individual tests had various rates of success, however average monthly revenue increased by $90,000, particulary after successful tests of the funnel and checkout pages.</p>
            <h2>Role & Technologies Used</h2>
            <p>Over the course of 3 years I served as lead front-end developer and user interface designer while creating the engagement’s overall roadmap and strategy for individual tests. I also assisted in creating wireframes and prototypes using Axure and Figma.</p>
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
