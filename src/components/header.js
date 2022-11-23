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
<div class='header'>
<Link to='/'>
    <StaticImage
      src="../images/H&A-banner.png"
      id='top'
      width={700}
      quality={100}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="Hammer and Anvil Hearing"
      style={{ margin: `0rem` }}
    />
</Link>
  <div class='nav'>
      <Link to="/"> Home</Link> |
      <Link to="/services/"> Products & Services</Link> |
      <Link to='/testimonials/'> Clients & Testimonials</Link> |
      <Link to ='/contact/'> Contact</Link>
  </div>
      <a class='consultation' href='https://calendly.com/benjaminjackpitts/30min' target='blank'>Schedule a FREE Consultation Today</a>

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
