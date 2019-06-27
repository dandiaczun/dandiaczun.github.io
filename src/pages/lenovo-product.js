import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'

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
          <section id="content" className="main">
            <p>Another Lenovo project I worked on at Blast Radius was building a microsite to support the launch of a new generation of YOGA tablets and laptops. The site needed to demonstrate the benefits of a multi-purpose device while allowing users to explore the different product features without affecting load times or site speed. </p>
            <p>The site was designed to showcase the product's unique features and used Ashton Kutcher, a Lenovo product engineer, to demonstrate it's capabilties.</p>
            <h2>Role & Technologies Used</h2>
            <p>I served as the front-end developer on this project, which was built using HTML5, CSS3, jQuery. The site was launched in 58 countries and saw 131,000 visitors in its first week.</p>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Generic
