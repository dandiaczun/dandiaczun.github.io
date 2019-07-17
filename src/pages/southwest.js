import React from 'react'
import Helmet from 'react-helmet'

import Nav from '../components/Nav'
import Layout from '../components/layout'
import southwest_desktop from '../assets/images/southwest.jpg'
import southwest_wireframe from '../assets/images/southwest-wireframe.jpg'

class Page extends React.Component {
  render() {

    return (
      <Layout>
        <Helmet title="Dan Diaczun | Chicago UX Developer" />
        <header id="header">
            <h1>Southwest Airlines</h1>
            <p>Origin & Destination Landing Pages</p>
        </header>
        <div id="main">
          <div className="portfolioNav">
            <ul>
              <li><a href="/lenovo-product" id="prev">Prev</a></li>
              <li><a href="/" id="home">Home</a></li>
              <li><a href="/clairolpro" id="next">Next</a></li>
            </ul>
          </div>
          <section id="content" className="main">
            <h2>Summary</h2>
            <p>In mid-2018 Performics pitched a re-design and build of their origin and destination landing pages, which are generate roughly $100 million in revenue. These new pages were designed to address past issues that Southwest had with these pages, mainly poor conversions and bounce rates. My team had worked in tandem with Southwest's UX team to create several personas that better reflected their current customer who was most likely to book a flight through one of these pages and designed our page to incorporate Southwest's updated branding. A modular based template was then built which would then power approximately 8600 landing pages on Southwest.com.</p>
            <span className="image main"><img src={southwest_desktop} alt="" /></span>
            <span className="image main"><img src={southwest_wireframe} alt="" /></span>
            <h2>Results</h2>
            <p>A mobile first approach using adaptive content was implemented which saw a 28% decrease in page weight on mobile and a 58% decrease on desktop. The pages also saw increases in performance, accessiblity and SEO rankings along with a 93% decrease in usablitiy errors. The new pages also saw a 300% increase in mobile bookings in their first 2 months of being live and continue to be some of the highest performing landing pages on Southwest.com.</p>
            <h2>Role &amp; Technologies Used</h2>
            <p>During this project I served as the lead front-end developer and assisted with strategy, user experience, wireframes &amp; prototypes. The wireframes and prototypes were built using Axure while the page template was built using Bootstrap and Django, which was then hosted on a proprietary Python application and AWS. </p>
          </section>
          <div className="portfolioNav">
          <ul>
            <li><a href="/lenovo-product" id="prev">Prev</a></li>
            <li><a href="/" id="home">Home</a></li>
            <li><a href="/clairolpro" id="next">Next</a></li>
          </ul>
          </div>
        </div>

      </Layout>
    )
  }
}

export default Page
