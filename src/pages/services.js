import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"

const ServicesPage = () => (
  <Layout>
    <Seo title="Services" />

<StaticImage
  src="../images/services.jpeg"
  width={600}
  quality={95}
  formats={["AUTO", "WEBP", "AVIF"]}
  alt="Benjamin Pitts"
  style={{ margin: `1rem` }}
/>
  <Link to='/'><h3>Back to Homepage</h3></Link>
  </Layout>
)

export default ServicesPage
