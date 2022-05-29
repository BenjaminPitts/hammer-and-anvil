import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"

const ClientsPage = () => (
  <Layout>
    <Seo title="Clients" />
<div class='client-outer-box'>

  <div class='client-inner-box'>
    <strong>
    <StaticImage
      src="../images/bi.jpeg"
      width={250}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="Hammer and Anvil Hearing"
      style={{ margin: `1rem` }}
    />
    </strong>
    <h4>Blood Incantation</h4>
    <h4><i>"we're famous now!"</i></h4>
  </div>
  
  <div class='client-inner-box'>  
    <strong>
    <StaticImage
      src="../images/sherwood.jpeg"
      width={250}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="Hammer and Anvil Hearing"
      style={{ margin: `1rem` }}
    />
    </strong>
    <h4>Sherwood Webber - Skinless</h4>
    <h4><i>"hearing is cool"</i></h4>
  </div>
  
  <div class='client-inner-box'>  
    <strong>
    <StaticImage
      src="../images/jp.jpeg"
      width={250}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="Hammer and Anvil Hearing"
      style={{ margin: `1rem` }}
    />
    </strong>
    <h4>JP Damaron - Vermin Womb</h4>
    <h4><i>"I like spaghetti"</i></h4>
  </div>
  
</div>
<Link to='/'><h3>Back to Homepage</h3></Link>
  </Layout>
)

export default ClientsPage