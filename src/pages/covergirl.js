import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import covergirl1 from '../assets/images/covergirl1.jpg'
import covergirl2 from '../assets/images/covergirl2.jpg'


class Generic extends React.Component {
  render() {

    return (
      <Layout>
        <Helmet title="Dan Diaczun | Chicago UI Developer" />
        <header id="header">
            <h1>Covergirl</h1>
            <p>Product Page Re-Design A/B Test</p>
        </header>
        <div id="main">
        <div className="portfolioNav">
          <ul>
            <li><a href="/devry" id="prev">Prev</a></li>
            <li><a href="/" id="home">Home</a></li>
            <li><a href="/sirva" id="next">Next</a></li>
          </ul>
        </div>
          <section id="content" className="main">
          <h2>Summary</h2>
            <p>While at Performics I had the opportunity to develop a series of A/B tests for Covergirl, an established brand that was looking to experiment with their product pages in order to increase conversions and time spent on the site. My team and I decided to re-design the page using large images that showcased some of the product’s details along with integrating a reviews feature, allowing Covergirl’s users to provide feedback on products.</p>
            <span className="image main"><img src={covergirl1} alt="" />
              <h5>Product Page Re-Design and User Review Integration</h5>
            </span>
            <span className="image main"><img src={covergirl2} alt="" />
              <h5>Buying Options Modal Window</h5>
            </span>
            <h2>Results</h2>
            <p>The re-designed product page won against the control and was integrated across all Covergirl product pages. It saw a 0.5% increase in conversions as well as a decrease in bounce rate from 50% to 38%, and usability tests from Covergirl showed that users favored the introduction of the reviews feature, citing that customer feedback was an important factor in their purchasing decisions.</p>
            <h2>Role & Technologies Used</h2>
            <p>During the course of these tests I served in a dual designer/developer role, designing and building the tests using Adobe Photoshop, Sketch and Optimizely.</p>
          </section>
          <div className="portfolioNav">
            <ul>
              <li><a href="/devry" id="prev">Prev</a></li>
              <li><a href="/" id="home">Home</a></li>
              <li><a href="/sirva" id="next">Next</a></li>
            </ul>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Generic
