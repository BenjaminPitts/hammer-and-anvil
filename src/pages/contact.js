import * as React from "react"
import Form from '../components/form'
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"
import Seo from "../components/seo"

const ContactPage = () => (
  <Layout>
    <Seo title="Contact" />
    <h2> Please reach out via email or phone if you have any questions:</h2>
    
    <div class='outer-services-box'>
    <StaticImage
      src="../images/email-icon.png"
      width={50}
      quality={100}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="ear"
      style={{ margin: `1rem` }}
    />
    <b><a href='mailto:hammer.anvil.hearing@gmail.com'>hammer.anvil.hearing@gmail.com</a></b>
    </div>
      
    
    <div class='outer-services-box'>
    <StaticImage
      src="../images/phone-icon.png"
      width={50}
      quality={100}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="ear"
      style={{ margin: `1rem` }}
    />
    
    <b><a href= 'tel:3038476662'>(303) 847-6662</a></b>
    </div>

    
    <br /><br />
    <h2>Or Send a Message Directly:</h2>
    <Form />

<h1>Contact</h1>

  </Layout>
)

export default ContactPage
