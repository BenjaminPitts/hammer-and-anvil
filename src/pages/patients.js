import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"

const ClientsPage = () => (
  <Layout>
    <Seo title="Patients" />

<div class='client-outer-box'>

  <div class='client-inner-box'>
    <strong>
    <StaticImage
      src="../images/phil.jpeg"
      width={300}
      quality={75}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="Hammer and Anvil Hearing"
      style={{ margin: `1rem`, border: `1px solid ivory` }}
    />
    </strong>
    <h4>Phil Pendergast - Khemmis</h4>
  </div>

  <div class='client-inner-box'>
    <strong>
    <StaticImage
      src="../images/sherwood.jpeg"
      width={300}
      quality={75}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="Hammer and Anvil Hearing"
      style={{ margin: `1rem`, border: `1px solid ivory` }}
    />
    </strong>
    <h4>Sherwood Webber - Skinless</h4>
  </div>

  <div class='client-inner-box'>
    <strong>
    <StaticImage
      src="../images/gothic.jpeg"
      width={300}
      quality={75}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="Hammer and Anvil Hearing"
      style={{ margin: `1rem`, border: `1px solid ivory` }}
    />
    </strong>
    <h4>Richard Quintana - Gothic Theatre Staff</h4>
  </div>

  <div class='client-inner-box'>
    <strong>
    <StaticImage
      src="../images/jp.jpeg"
      width={300}
      quality={75}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="Hammer and Anvil Hearing"
      style={{ margin: `1rem`, border: `1px solid ivory` }}
    />
    </strong>
    <h4>JP Damaron - Vermin Womb</h4>
  </div>

  <div class='client-inner-box'>
    <strong>
    <StaticImage
      src="../images/khemmis.jpeg"
      width={300}
      quality={75}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="Hammer and Anvil Hearing"
      style={{ margin: `1rem`, border: `1px solid ivory` }}
    />
    </strong>
    <h4>Ben Hutchenson - Khemmis</h4>
  </div>

  <div class='client-inner-box'>

    <strong>
    <StaticImage
      src="../images/bi.jpeg"
      width={300}
      quality={75}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="Hammer and Anvil Hearing"
      style={{ margin: `1rem`, border: `1px solid ivory` }}
    />
    </strong>
    <h4>Blood Incantation</h4>
  </div>

  <div class='client-inner-box'>
    <strong>
    <StaticImage
      src="../images/abrams.jpeg"
      width={300}
      quality={75}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="Hammer and Anvil Hearing"
      style={{ margin: `1rem`, border: `1px solid ivory` }}
    />
    </strong>
    <h4>Zac Amster - Abrams</h4>
  </div>

  <div class='client-inner-box'>
    <strong>
    <StaticImage
      src="../images/wayfarer.jpeg"
      width={300}
      quality={75}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="Hammer and Anvil Hearing"
      style={{ margin: `1rem`, border: `1px solid ivory` }}
    />
    </strong>
    <h4>Shane McCarthy - Wayfarer</h4>
  </div>

  <div class='client-inner-box'>
    <strong>
    <StaticImage
      src="../images/ben.jpeg"
      width={300}
      quality={75}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="Hammer and Anvil Hearing"
      style={{ margin: `1rem`, border: `1px solid ivory` }}
    />
    </strong>
    <h4>Ben Pitts - NightWraith</h4>
  </div>
  
  <div class='client-inner-box'>
    <strong>
    <StaticImage
      src="../images/necrogoblikon.jpeg"
      width={300}
      quality={75}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="Hammer and Anvil Hearing"
      style={{ margin: `1rem`, border: `1px solid ivory` }}
    />
    </strong>
    <h4>Eric Brown - Necrogoblikon</h4>
  </div>
  
  <div class='client-inner-box'>
    <strong>
    <StaticImage
      src="../images/hellgramites.jpeg"
      width={300}
      quality={75}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="Hammer and Anvil Hearing"
      style={{ margin: `1rem`, border: `1px solid ivory` }}
    />
    </strong>
    <h4>Erik Peterson - The Hellgrammites</h4>
  </div>
  
  <div class='client-inner-box'>
    <strong>
    <StaticImage
      src="../images/hashtronaut.jpeg"
      width={300}
      quality={75}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="Hammer and Anvil Hearing"
      style={{ margin: `1rem`, border: `1px solid ivory` }}
    />
    </strong>
    <h4>Robb - Hashtronaut</h4>
  </div>

</div>

<h1>Clients</h1>
  </Layout>

)

export default ClientsPage
