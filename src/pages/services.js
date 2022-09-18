import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"

const ServicesPage = () => (
<Layout>
  <Seo title="Services" />
  <h1>Products & Services</h1>

  <div class='outer-services-box'>

  <StaticImage
    src="../images/plugs.jpeg"
    width={550}
    quality={100}
    formats={["AUTO", "WEBP", "AVIF"]}
    alt="Hammer and Anvil Hearing"
    style={{ margin: `1rem` }}
  />

<StaticImage
  src="../images/monitors.jpeg"
  width={550}
  quality={100}
  formats={["AUTO", "WEBP", "AVIF"]}
  alt="Hammer and Anvil Hearing"
  style={{ margin: `1rem` }}
/>

<StaticImage
  src="../images/monitor-service.jpeg"
  width={550}
  quality={100}
  formats={["AUTO", "WEBP", "AVIF"]}
  alt="Hammer and Anvil Hearing"
  style={{ margin: `1rem` }}
/>

<StaticImage
  src="../images/testing.jpeg"
  width={550}
  quality={100}
  formats={["AUTO", "WEBP", "AVIF"]}
  alt="Hammer and Anvil Hearing"
  style={{ margin: `1rem` }}
/>

<StaticImage
  src="../images/aid.jpeg"
  width={550}
  quality={100}
  formats={["AUTO", "WEBP", "AVIF"]}
  alt="Hammer and Anvil Hearing"
  style={{ margin: `1rem` }}
/>

<StaticImage
  src="../images/aid-repairs.jpeg"
  width={550}
  quality={100}
  formats={["AUTO", "WEBP", "AVIF"]}
  alt="Hammer and Anvil Hearing"
  style={{ margin: `1rem` }}
/>


</div>
</Layout>

)

export default ServicesPage
