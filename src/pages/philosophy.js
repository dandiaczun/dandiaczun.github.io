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
            <p>Another series of A/B tests that I worked on at Performics was for Philosophy, a line of skincare and beauty products that was looking to increase conversions, particularly during their busy summer and fall sales. The tests initially began as simple user interface modifications and personalizations on the homepage that were designed to demonstrate the value of A/B testing to the client. They eventually grew in complexity to include new features on the product page such as an image carousel, a promotional code for discounts, re-designed shopping cart modal and the integration of a user review platform.</p>
            <span className="image main"><img src={philosophy1} alt="" />
              <h5>User Review Platform</h5>
            </span>
            <span className="image main"><img src={philosophy2} alt="" />
              <h5>Re-Designed Shopping Cart Modal with Promotional Code</h5>
            </span>
            <h2>Results</h2>
            <p>The more complex tests were launched prior to Philosophy’s fall sale, their largest online sale of the year which generates roughly 33% of their annual revenue. The tests were tied into promotional content on their Facebook page as well as paid Google ads, which helped deliver a 13% increase in conversions as well as Philosophy’s most successful fall sale in their history.</p>
            <h2>Role & Technologies Used</h2>
            <p>During these projects I served in a hybrid designer & developer role, where I designed the user interface elements and layouts of the A/B tests using Adobe Photoshop and Sketch. I then built the tests using Javascript, HTML5 & CSS3 in Optimizely and assisted in the Google Analytics integration. </p>
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
