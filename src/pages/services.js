import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"

const ServicesPage = () => (
<Layout>
  <Seo title="Services" />

  <StaticImage
    src="../images/service1.png"
    width={1200}
    quality={70}
    formats={["AUTO", "WEBP", "AVIF"]}
    alt="Hammer and Anvil Hearing"
    style={{ margin: `1rem`, border: `1px solid ivory` }}
  />

<StaticImage
  src="../images/service2.png"
  width={1200}
  quality={70}
  formats={["AUTO", "WEBP", "AVIF"]}
  alt="Hammer and Anvil Hearing"
  style={{ margin: `1rem`, border: `1px solid ivory` }}
/>

<StaticImage
  src="../images/service3.png"
  width={1200}
  quality={70}
  formats={["AUTO", "WEBP", "AVIF"]}
  alt="Hammer and Anvil Hearing"
  style={{ margin: `1rem`, border: `1px solid ivory` }}
/>

<StaticImage
  src="../images/service4.png"
  width={1200}
  quality={70}
  formats={["AUTO", "WEBP", "AVIF"]}
  alt="Hammer and Anvil Hearing"
  style={{ margin: `1rem`, border: `1px solid blck` }}
/>

<StaticImage
  src="../images/service5.png"
  width={1200}
  quality={70}
  formats={["AUTO", "WEBP", "AVIF"]}
  alt="Hammer and Anvil Hearing"
  style={{ margin: `1rem`, border: `1px solid black` }}
/>

<h1>Services</h1>


</Layout>

)

export default ServicesPage
