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
            <h1>SIRVA</h1>
            <p>Site Re-Design Wireframes</p>
        </header>
        <div id="main">
          <section id="content" className="main">
            <h2>Summary</h2>
            <p>SIRVA is a global moving and relocation service provider that focuses on corporate priorities and leverages technology and analytics to provide industry-leading solutions. In order to better serve their customers, SIRVA </p>
            <span className="image main"><img src={pic04} alt="" /></span>
            <h2>Results</h2>
            <p></p>
            <h2>Role &amp; Technologies Used</h2>
            <p>I served as the lead user experience designer on this project and was responsible for strategy and wireframes, which were built using Axure.</p>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Generic
