import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#090909`,
      padding: `0`,
      marginBottom: `2rem`,
    }}
  >

<Link to='/'>
    <StaticImage
      src="../images/H&A-icon.jpeg"
      width={175}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="Hammer and Anvil Hearing"
      style={{ margin: `1.5rem` }}
    />
</Link>
  <div>
      <Link to="/"> Home</Link> |
      <Link to="/about/"> About</Link> |
      <Link to="/services/"> Services</Link> |
      <Link to='/testimonials/'> Testimonials</Link> | 
      <Link to ='/contact/'> Contact</Link>
          
      <a class='consultation' href='https://calendly.com/benjaminjackpitts/30min' target='blank'><h3>Schedule a FREE Consultation Today</h3></a>
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
