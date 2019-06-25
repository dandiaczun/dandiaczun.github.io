import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import pic04 from '../assets/images/pic04.jpg'

class Generic extends React.Component {
  render() {

    return (
      <Layout>
        <Helmet title="Dan Diaczun | Chicago UX Developer" />
        <header id="header">
            <h1>DeVry University</h1>
            <p>Keller Graduate School Site Re-Design & Build</p>
        </header>
        <div id="main">
          <section id="content" className="main">
            <h2>Summary</h2>
            <p>In 2017 DeVry University's Keller Graduate School of Management approached Performics about re-designing and building their website with a focus on increased conversions and a better mobile experience. Their previous site was not responsive or optimized for a mobile experience so my team and I decided a mobile first approach was absolutely necessary. Their target demographic for these pages was prospective students between the ages of 22-30 who relied heavily on their mobile devices to search for prospective schools. </p>
            <span className="image main"><img src={pic04} alt="" /></span>
            <h2>Results</h2>
            <p>The re-designed site saw 25% increase in load time on mobile devices compared to the old site while the bounce rate decreased 15% from 60% to 45%. The site's copy was also re-written by Performics' in-house copy team which saw increases in SEO rankings and conversions.</p>
            <h2>Role & Technologies Used</h2>
            <p>I served as UX designer and front-end developer on this project, designing the wireframes and building the site using HTML5, CSS and Javascript, which was then integrated into DeVry's Angular app that powered their entire site.</p>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Generic
