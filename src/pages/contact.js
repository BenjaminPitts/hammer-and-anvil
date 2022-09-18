import * as React from "react"
import Form from '../components/form'
import Layout from "../components/layout"
import Seo from "../components/seo"

const ContactPage = () => (
  <Layout>
    <Seo title="Contact" />
    <h1>Contact</h1>

    <h3><strong>Email:</strong> <a href='mailto:hammer.anvil.hearing@gmail.com'>hammer.anvil.hearing@gmail.com</a></h3>
    <h3><strong>Phone: </strong><i> (303) 847-6662</i></h3>
    <h2>Send a message directly:</h2>
    <Form />

  </Layout>
)

export default ContactPage
