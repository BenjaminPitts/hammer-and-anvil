import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"

const AboutPage = () => (
  <Layout>
    <Seo title="About" />

    <h1>Gianni DiGiacomo - Owner</h1>
    <strong>
    <h3>Flexible Hours - Mobile Clinic - Competitive Pricing</h3>
    <StaticImage
      src="../images/Gianni.jpeg"
      width={200}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="GianniDiGiacomo"
      style={{ margin: `1rem` }}
    />
    </strong>
    <h3><i>I am a musician and entrepenuer from Denver, CO.</i></h3>

  </Layout>
)

export default AboutPage
