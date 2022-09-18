import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"


const IndexPage = () => (
  <Layout>
  <div class='outer-index-box'>

    <div class='inner-index-box'>
    <strong>
    <StaticImage
      src="../images/mission.jpeg"
      width={450}
      quality={100}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="Hammer and Anvil Hearing"
      style={{ margin: `1rem` }}
    />
    </strong>

    <strong>
    <StaticImage
      src="../images/testing.jpeg"
      width={250}
      quality={100}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="Hammer and Anvil Hearing"
      style={{ margin: `1rem` }}
    />
    </strong>

    <strong>
    <StaticImage
      src="../images/tinitus.jpeg"
      width={250}
      quality={100}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="Hammer and Anvil Hearing"
      style={{ margin: `1rem` }}
    />
    </strong>
    </div>
  </div>

    <div class='text-block'>
    <h5><i>"Music-induced hearing loss (MIHL) is a result from listening to music that exceeds 85 decibels for prolonged periods of time. A decibel, or dB, is a unit to measure sound intensity, and 85 dB is roughly equivalent to the sound of heavy city traffic. Our listening devices and preferred listening levels are the leading cause for MIHL. For example, when you’re working out at the gym and you up the volume of your music to 100% to drown out the music the gym is broadcasting, you are putting yourself at risk for permanent hearing loss."</i>
    <a class='more' href='https://hearinghealthfoundation.org/blogs/music-induced-hearing-loss-what-do-college-students-know' target='blank'> ...  Full Article</a>
    </h5>
    </div>

    <div class='outer-index-box'>
    <div class='inner-index-box'>
    <h2>Gianni DiGiacomo - Owner</h2>
    <h4>Flexible Hours - Mobile Clinic - Competitive Pricing</h4>

    <strong>
    <StaticImage
      src="../images/Gianni.jpeg"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="Gianni DiGiacomo"
      style={{ margin: `1rem` }}
    />
    </strong>
    </div>

    <div class='inner-index-box'>
    <div class='text-block'>
    <h3><i><b>"I'm Gianni DiGiacomo, a musician from Denver, CO and advocate to protect hearing in my community.</b> I own and operate Hammer & Anvil hearing, a company that provides remote hearing testing, and hearing aid services. We provide custom musician earplugs, in-ear monitors, hearing aids, hearing aid maintainence/repair, educational resources & consultation, and assisted listening devices. I've worked in Audiology for over ten years and have the education and knowledge to provide an excellent patient experience."</i></h3>
      </div>
      </div>
    </div>
    <br />
    <h1>Hammer and Anvil Hearing</h1>



  </Layout>
)

export default IndexPage
