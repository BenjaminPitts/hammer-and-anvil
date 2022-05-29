/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

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
            marginTop: `5rem`,
            fontSize: `var(--font-sm)`,
            background: `#090909`,
            color: `ivory`,
            padding: `2rem`,
          }}
        >
        <p>  
          <a href='https://www.facebook.com/HammerandAnvilHearing' target='_blank' > Facebook </a> |
          <a href='https://www.instagram.com/hammer_and_anvil_hearing/' target='_blank'> Instagram </a> |
          <a href='https://www.linkedin.com/in/gianni-digiacomo-6b218942/' target='_blank'> LinkedIn </a>
        </p>
          © {new Date().getFullYear()} &middot; Hammer and Anvil Hearing
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
