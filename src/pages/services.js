import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"

const ServicesPage = () => (
  <Layout>
    <Seo title="Services" />

<StaticImage
  src="../images/products.jpeg"
  width={600}
  quality={95}
  formats={["AUTO", "WEBP", "AVIF"]}
  alt="Hammer and Anvil Hearing"
  style={{ margin: `1rem` }}
/>

<StaticImage
  src="../images/services.jpeg"
  width={600}
  quality={95}
  formats={["AUTO", "WEBP", "AVIF"]}
  alt="Hammer and Anvil Hearing"
  style={{ margin: `1rem` }}
/>

  <Link to='#top'><h3>Back to Top</h3></Link>
  </Layout>
)

export default ServicesPage
