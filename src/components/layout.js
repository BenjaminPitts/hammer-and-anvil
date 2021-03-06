/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Header from "./header"
import "./layout.css"
import { Link } from "gatsby"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: `var(--size-content)`,
          padding: `var(--size-gutter)`,
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            marginTop: `10rem`,
            fontSize: `var(--font-sm)`,
            background: `#1f1f1f`,
            color: `ivory`,
            padding: `2rem`,
          }}
        >
        <Link to='#top'><button class='top'>Back to Top</button></Link>

        <p class='footer'>
          <a href='https://www.facebook.com/HammerandAnvilHearing' target='_blank' >
          <StaticImage
            src="../images/fb.png"
            width={40}
            quality={100}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Hammer and Anvil Hearing"
            style={{ margin: `.5rem` }}
          /></a>
          <a href='https://www.instagram.com/hammer_and_anvil_hearing/' target='_blank'>
          <StaticImage
            src="../images/ig.png"
            width={40}
            quality={100}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Hammer and Anvil Hearing"
            style={{ margin: `.5rem` }}
          /></a>
          <a href='https://www.linkedin.com/in/gianni-digiacomo-6b218942/' target='_blank'>
          <StaticImage
            src="../images/li.png"
            width={40}
            quality={100}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Hammer and Anvil Hearing"
            style={{ margin: `.5rem` }}
          />
          </a>
        </p>
          ?? {new Date().getFullYear()} &middot; Hammer and Anvil Hearing
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
