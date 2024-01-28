import React from "react"
import Logo from "../images/logo.svg"
import { pageLinks, socialLinks } from "../data"
import PageLinks from "./PageLinks"

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={Logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        {/* <!-- left this comment on purpose --> */}
        <PageLinks parentClass="nav-links" itemClass="nav-link"/>
        <ul className="nav-icons">
          {socialLinks.map((link) => {
            const {id, href, icon} = link
            return (
              <li key={id}>
                <a href={href} target="_blank" className="nav-icon">
                  <i className={`fab fa-${icon}`}></i>
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
