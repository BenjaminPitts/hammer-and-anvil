import * as React from "react"
import Form from '../components/form'
import Layout from "../components/layout"
import Seo from "../components/seo"

const ContactPage = () => (
  <Layout>
    <Seo title="Contact" />
    <h1>Contact</h1>

    <h3><a href='mailto:hammer.anvil.hearing@gmail.com'>hammer.anvil.hearing@gmail.com</a></h3>
    <h3>(303) 847-6662</h3>
    <h2>Or Send a Message Directly:</h2>
    <Form />

  </Layout>
)

export default ContactPage
