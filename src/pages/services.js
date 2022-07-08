import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"

const ServicesPage = () => (
<Layout>
  <Seo title="Services" />
  
  <div class='outer-services-box'>
  <div class='services-box'>
  
  <StaticImage
    src="../images/services-2.jpeg"
    width={600}
    quality={100}
    formats={["AUTO", "WEBP", "AVIF"]}
    alt="Hammer and Anvil Hearing"
    style={{ margin: `1rem` }}
  />
    
<StaticImage
  src="../images/products.jpeg"
  width={600}
  quality={100}
  formats={["AUTO", "WEBP", "AVIF"]}
  alt="Hammer and Anvil Hearing"
  style={{ margin: `1rem` }}
/>

</div>
</div>
</Layout>

)

export default ServicesPage
