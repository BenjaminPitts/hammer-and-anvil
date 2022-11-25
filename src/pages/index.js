import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"


const IndexPage = () => (
  <Layout>
    <Seo title="Hammer and Anvil Hearing" />
  
  <div class='outer-services-box'>
  <StaticImage
    src="../images/H&A-icon.png"
    width={110}
    quality={100}
    formats={["AUTO", "WEBP", "AVIF"]}
    alt="ear"
    style={{ margin: `1rem` }}
  />
  <div class='text-block'>
    <h3>Hammer & Anvil Hearing is a remote audiology service. We travel to our patients homes for help with hearing loss, tinnitus and hearing aid services. We are very serious about  hearing conservation and specialize in music hearing conservation. Helping countless musicians since its inception, Hammer & Anvil Hearing ensures performing musicians, live sound engineers and concert hall staff protect their hearing with appropriate earplugs, hearing tests and education. Specializing in custom musician earplugs and in-ear-monitors, Hammer & Anvil offers services and products to keep musicians, music professionals and music lovers from damaging their most important instruments, their ears. </h3>
  </div>
  </div>
  
  <br />
  <div class='outer-services-box'>
  <div class='text-block'>
  <h3>Music-induced hearing loss (MIHL) is a result from listening to music that exceeds 85 decibels for prolonged periods of time. A decibel, or dB, is a unit to measure sound intensity, and 85 dB is roughly equivalent to the sound of heavy city traffic. Our listening devices and preferred listening levels are the leading cause for MIHL. For example, when you’re working out at the gym and you up the volume of your music to 100% to drown out the music the gym is broadcasting, you are putting yourself at risk for permanent hearing loss...<a class='more' href='https://hearinghealthfoundation.org/blogs/music-induced-hearing-loss-what-do-college-students-know' target='blank'>...  Full Article</a>
  </h3>
  </div>
  <StaticImage
    src="../images/H&A-icon.png"
    width={110}
    quality={100}
    formats={["AUTO", "WEBP", "AVIF"]}
    alt="ear"
    style={{ margin: `1rem` }}
  />
  </div>

    <br />
    <div class='outer-services-box'>
    <StaticImage
      src="../images/Gianni.jpeg"
      width={130}
      quality={90}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="Gianni DiGiacomo"
      style={{ margin: `.5rem` }}
    />
    <div class='text-block'>
    <h3><i><b>"I'm Gianni DiGiacomo, a musician from Denver, CO and advocate to protect hearing in my community.</b> I own and operate Hammer & Anvil hearing, a company that provides remote hearing testing, and hearing aid services. We provide custom musician earplugs, in-ear monitors, hearing aids, hearing aid maintainence/repair, educational resources & consultation, and assisted listening devices. I've worked in Audiology for over ten years and have the education and knowledge to provide an excellent patient experience."</i></h3>
    </div>
    </div>

        
    <br />

    <StaticImage
      src="../images/ear.jpeg"
      width={1200}
      quality={100}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="ear"
      style={{ margin: `1rem`, border: `1px solid black` }}
    />
        
    <br />
    <br />
    <h1>Hammer and Anvil Hearing</h1>


  </Layout>
)

export default IndexPage
