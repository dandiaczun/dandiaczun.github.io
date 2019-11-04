import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'

import sirva_wire1 from '../assets/images/sirva-wire1.jpg'
import sirva_wire2 from '../assets/images/sirva-wire2.jpg'
import sirva_wire3 from '../assets/images/sirva-wire3.jpg'

class Generic extends React.Component {
  render() {

    return (
      <Layout>
        <Helmet title="Dan Diaczun | Chicago UI Developer" />
        <header id="header">
            <h1>SIRVA</h1>
            <p>Site Re-Design Wireframes</p>
        </header>
        <div id="main">
        <div className="portfolioNav">
          <ul>
            <li><a href="/devry" id="prev">Prev</a></li>
            <li><a href="/" id="home">Home</a></li>
            <li><a href="/lenovo-social" id="next">Next</a></li>
          </ul>
        </div>
          <section id="content" className="main">
            <h2>Summary</h2>
            <p>SIRVA is a global moving and relocation service provider that focuses on corporate clients and leverages technology and analytics to provide industry-leading solutions. SIRVA was a client of Performics' SEO services at the time and were unaware of the agency's user experience and design offerings and mentioned that they were considering a site re-design.
            My team and I pitched a full site UX audit along with new wireframes that were designed to factor in a SIRVA customer's behavior and increase conversions.</p>
            <span className="image main"><img src={sirva_wire1} alt="" /></span>
            <span className="image main"><img src={sirva_wire2} alt="" /></span>
            <span className="image main"><img src={sirva_wire3} alt="" /></span>
            <h2>Results</h2>
            <p>Using market research provided to us by SIRVA's marketing department, as well as analytics from SIRVA's existing site we were able discover underperforming elements on the current site and craft new wireframes that used a mobile-first approach to better connect with corporate professionals on the go. Elements from the wireframes were then designed, built and A/B tested using Optimizely, with the winners being integrated into the SIRVA site.</p>
            <h2>Role &amp; Technologies Used</h2>
            <p>I served as user experience designer and front-end developer on this project and was responsible for strategy, wireframes, and A/B test development. The wireframes were built using Axure and the A/B tests were built in Optimizely using Javascript, HTML5 and CSS3. </p>
          </section>
          <div className="portfolioNav">
            <ul>
              <li><a href="/devry" id="prev">Prev</a></li>
              <li><a href="/" id="home">Home</a></li>
              <li><a href="/lenovo-social" id="next">Next</a></li>
            </ul>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Generic
