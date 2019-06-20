import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import HeaderGeneric from '../components/HeaderGeneric'
import pic04 from '../assets/images/pic04.jpg'

class Generic extends React.Component {
  render() {

    return (
      <Layout>
        <Helmet title="Dan Diaczun | Chicago UX Developer" />
        {/* <HeaderGeneric /> */}
        <header id="header">
            <h1>Clairol Pro</h1>
            <p>Product Launch Page</p>
        </header>
        <div id="main">
          <section id="content" className="main">
            <p>While at Performics we were approached by ClariolPro, an existing client, who were unhappy with their current website and felt that it didn't match the look and feel of a new product launching in the spring of 2019. With minimal assets, my team and I re-designed and developed a new product page for their site that reflected their current branding and was designed to support their goal of increasing conversions and educating customers.</p>
            <span className="image main"><img src={pic04} alt="" /></span>
            <p>The re-designed page saw a 12.4% click-through rate vs. 4.8% for the existing product pages and drove 18% of all site conversions. It was the 3rd most viewed product page on clairolpro.com and saw a bounce rate that was 51% lower than the site average.</p>
            <h2>Role & Technologies Used</h2>
            <p>During this project I served as the lead front-end developer and assisted with designing wireframes using Axure & the initial whiteboard strategy sessions. The page was developed using Bootstrap, Django & jQuery, and hosted on a propriety Python application & AWS.</p>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Generic