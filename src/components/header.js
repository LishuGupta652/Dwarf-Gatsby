import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import logo from "../images/gatsby-icon.png"

const Header = ({ siteTitle }) => (
  <header>
    <div className="nav-container">
      <nav>
        {/* <h1 className="logo">Dwarf</h1> */}
        <img src={logo} alt="logo" className="logo" />

        <ul className="nav-links">
          <li className="nav-link-active">Home</li>
          <li>About</li>
          <li>Contacts</li>
        </ul>
      </nav>
    </div>
    <div className="content">
      <div className="left">
        <h1>Dwarf</h1>
        <h2>Building Smart </h2>
        <h2>
          India<span className="dot">.</span>
        </h2>
      </div>
      <div className="right"></div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
