import React from "react"
import "./index.scss"
import Layout from "../components/layout"
import Image from "../components/image"

export default () => (
  <Layout>
    <div style={{ margin: `3rem auto`, maxWidth: 600 }} />
    <Image image={"20180821-IMG_9232.jpg"} caption={"Kuusamo, Finland"} />
    <Image
      image={"20180829-IMG_9945-Edit-Edit.jpg"}
      caption={"Suomujoki, Finland"}
    />
  </Layout>
)
