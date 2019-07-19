import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import lenovo_product1 from '../assets/images/lenovo-product1.jpg'
import lenovo_product2 from '../assets/images/lenovo-product2.jpg'


class Generic extends React.Component {
  render() {

    return (
      <Layout>
        <Helmet title="Dan Diaczun | Chicago UX Developer" />
        <header id="header">
            <h1>Lenovo</h1>
            <p>YOGA Product Launch Site</p>
        </header>
        <div id="main">
        <div className="portfolioNav">
          <ul>
            <li><a href="/lenovo-social" id="prev">Prev</a></li>
            <li><a href="/" id="home">Home</a></li>
            <li><a href="/southwest" id="next">Next</a></li>
          </ul>
        </div>
          <section id="content" className="main">
            <p>Another Lenovo project I worked on at Blast Radius was building a microsite to support the launch of a new generation of YOGA tablets and laptops. The site needed to demonstrate the benefits of a multi-purpose device while allowing users to explore the different product features without affecting load times or site speed. The site was designed to showcase the product's unique features and used Ashton Kutcher, a Lenovo product engineer, to demonstrate it's capabilties.</p>
            <span className="image main"><img src={lenovo_product1} alt="" /></span>
            <span className="image main"><img src={lenovo_product2} alt="" /></span>
            <h2>Results</h2>
            <p>The site was launched in 58 countries across 30 operating systems and devices and saw 131,000 visitors in its first week of traffic, the most for any Lenovo product site at the time.</p>
            <h2>Role & Technologies Used</h2>
            <p>I served as the front-end developer on this project, which was built using HTML5, CSS3, jQuery.</p>
          </section>
          <div className="portfolioNav">
            <ul>
              <li><a href="/lenovo-social" id="prev">Prev</a></li>
              <li><a href="/" id="home">Home</a></li>
              <li><a href="/southwest" id="next">Next</a></li>
            </ul>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Generic
