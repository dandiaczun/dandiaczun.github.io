import React from 'react'

const PortfolioNav = (props) => (
  <nav id="nav" className={props.sticky ? 'alt' : ''}>
    <li>
      <a href="#">Previous</a>
    </li>
    <li>
      <a href="../">Home</a>
    </li>
    <li>
      <a href="#">Next</a>
    </li>
  </nav>
)

export default PortfolioNav
