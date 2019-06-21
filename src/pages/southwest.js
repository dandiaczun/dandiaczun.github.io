import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import pic04 from '../assets/images/pic04.jpg'

class Generic extends React.Component {
  render() {

    return (
      <Layout>
        <Helmet title="Dan Diaczun | Chicago UX Developer" />
        {/* <HeaderGeneric /> */}
        <header id="header">
            <h1>Southwest Airlines</h1>
            <p>Origin & Destination Landing Pages</p>
        </header>
        <div id="main">
          <section id="content" className="main">
            <p>In mid-2018 Performics pitched a re-design and build of their origin and destination landing pages, which are generate roughly $100 million in revenue. These new pages were designed to address past issues that Southwest had with these pages, mainly poor conversions and bounce rates. My team had worked in tandem with Southwest's UX team to create several personas that better reflected their current customer who was most likely to book a flight through one of these pages and designed our page to incorporate Southwest's updated branding. A modular based template was then built which would then power approximately 8600 landing pages on Southwest.com.</p>
            <span className="image main"><img src={pic04} alt="" /></span>
            <p>A mobile first approach was adopted which saw increases in performance, accessiblity and SEO rankings. The new pages also saw a 300% increase in mobile bookings in their first 2 months of being live and continue to be some of the highest performing landing pages on Southwest.com.</p>
            <h2>Role &amp; Technologies Used</h2>
            <p>During this project I served as the lead front-end developer and assisted with strategy, user experience, wireframes &amp; prototypes. The page template was built using Bootstrap and Django, which was then hosted on a proprietary Python application and AWS. </p>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Generic
