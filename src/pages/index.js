import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

// const links = [
// 
// ]
// 
// const samplePageLinks = [
// ]
// 
// const moreLinks = [
// ]

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = () => (
  <Layout>
<div class ='text-block'>
  <h3>Hammer and Anvil Hearing is committed to preventing hearing loss in the music community and beyond</h3>
</div>
    <strong>
    <StaticImage
      src="../images/H&A-4.jpeg"
      width={250}
      quality={100}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="Hammer and Anvil Hearing"
      style={{ margin: `1rem` }}
    />
    </strong>
    
    <strong>
    <StaticImage
      src="../images/ear.jpeg"
      width={250}
      quality={100}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="Hammer and Anvil Hearing"
      style={{ margin: `1rem` }}
    />
    </strong>
    
    <strong>
    <StaticImage
      src="../images/H&A-2.jpeg"
      width={250}
      quality={100}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="Hammer and Anvil Hearing"
      style={{ margin: `1rem` }}
    />
    </strong>
    <div class='text-block'>
    <h4><i>"Music-induced hearing loss (MIHL) is a result from listening to music that exceeds 85 decibels for prolonged periods of time. A decibel, or dB, is a unit to measure sound intensity, and 85 dB is roughly equivalent to the sound of heavy city traffic. Our listening devices and preferred listening levels are the leading cause for MIHL. For example, when you’re working out at the gym and you up the volume of your music to 100% to drown out the music the gym is broadcasting, you are putting yourself at risk for permanent hearing loss."</i></h4>
    </div>
    <h3><a href='https://hearinghealthfoundation.org/blogs/music-induced-hearing-loss-what-do-college-stude[…]nhmsaFQrqkTvrv_6HzhZJbGTIWRfK_Y9I-dMyOQ6Jm5vnwPiAphjNos' target='blank'>Read More</a></h3>
  </Layout>
)

export default IndexPage
