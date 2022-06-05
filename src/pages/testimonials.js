import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"

const ClientsPage = () => (
  <Layout>
    <Seo title="Clients" />
<div class='client-outer-box'>

  <div class='client-inner-box'>
    <strong>
    <StaticImage
      src="../images/bi.jpeg"
      width={250}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="Hammer and Anvil Hearing"
      style={{ margin: `1rem` }}
    />
    </strong>
    <h4>Blood Incantation</h4>
    <h4><i>"we're famous now!"</i></h4>
  </div>

  <div class='client-inner-box'>
    <strong>
    <StaticImage
      src="../images/sherwood.jpeg"
      width={250}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="Hammer and Anvil Hearing"
      style={{ margin: `1rem` }}
    />
    </strong>
    <h4>Sherwood Webber - Skinless</h4>
    <h4><i>"hearing is cool"</i></h4>
  </div>

  <div class='client-inner-box'>
    <strong>
    <StaticImage
      src="../images/jp.jpeg"
      width={250}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="Hammer and Anvil Hearing"
      style={{ margin: `1rem` }}
    />
    </strong>
    <h4>JP Damaron - Vermin Womb</h4>
    <h4><i>"I like spaghetti"</i></h4>
  </div>

  <div class='client-inner-box'>
    <strong>
    <StaticImage
      src="../images/khemmis.jpeg"
      width={250}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="Hammer and Anvil Hearing"
      style={{ margin: `1rem` }}
    />
    </strong>
    <h4>Ben Hutchenson - Khemmis</h4>
    <h4><i>"we tour with Opeth and whatnot"</i></h4>
  </div>

  <div class='client-inner-box'>
    <strong>
    <StaticImage
      src="../images/abrams.jpeg"
      width={250}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="Hammer and Anvil Hearing"
      style={{ margin: `1rem` }}
    />
    </strong>
    <h4>Zac Amster - Abrams</h4>
    <h4><i>"great product and affordable price!"</i></h4>
  </div>

  <div class='client-inner-box'>
    <strong>
    <StaticImage
      src="../images/wayfarer.jpeg"
      width={250}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="Hammer and Anvil Hearing"
      style={{ margin: `1rem` }}
    />
    </strong>
    <h4>Shane McCarthy - Wayfarer</h4>
    <h4><i>"a romance with hearing protection."</i></h4>
  </div>

  <div class='client-inner-box'>
    <strong>
    <StaticImage
      src="../images/gothic.jpeg"
      width={250}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="Hammer and Anvil Hearing"
      style={{ margin: `1rem` }}
    />
    </strong>
    <h4>Richard Quintana - Gothic Theatre Staff</h4>
    <h4><i>"helps me do my job with ease"</i></h4>
  </div>

</div>

  </Layout>
)

export default ClientsPage
