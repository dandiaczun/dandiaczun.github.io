import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import allstate1 from '../assets/images/allstate1.jpg'
import allstate2 from '../assets/images/allstate2.jpg'
import allstate3 from '../assets/images/allstate3.jpg'

class Generic extends React.Component {
  render() {

    return (
      <Layout>
        <Helmet title="Dan Diaczun | Chicago UI Developer" />
        <header id="header">
            <h1>Allstate</h1>
            <p>Car Health Product Page</p>
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
            <p>While at Performics I was tasked with designing and developing several landing and product pages for Allstate, one of the agency’s longest client relationships. This product page is an example of a new product that was launched in 2016 called Car Health (now Drivewise) which was designed to give drivers personalized feedback and offer savings & cash back through everyday safe driving, while encouraging and developing good driving habits. The page itself was designed to be informative and allow users to check the product’s compatibility with their car, while providing several call to actions to encourage users to purchase the product.</p>
            <span className="image main"><img src={allstate1} alt="" />
            </span>
            <span className="image main"><img src={allstate2} alt="" />
            </span>
            <span className="image main"><img src={allstate3} alt="" />
            </span>
            <h2>Results</h2>
            <p>The product launched in a few test markets to gauge interest and then was introduced on a national level. Usability tests showed that users favored the diagnostic features of the product and later research data from Allstate showed that interest increased due to the savings offerings and cash back for good driving habits.</p>
            <h2>Role & Technologies Used</h2>
            <p>For this landing page I was tasked with UI design and front-end development using HTML5 and CSS3. The page was then integrated into Allstate’s content management system, which was powered by Adobe Experience Manager.</p>
          </section>
          <div className="portfolioNav">
            <ul>
              <li><a href="/uhc" id="prev">Prev</a></li>
              <li><a href="/" id="home">Home</a></li>
              <li><a href="/icebreaker" id="next">Next</a></li>
            </ul>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Generic
