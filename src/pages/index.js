import React from "react"
import "./index.scss"
import Layout from "../components/layout"

const PUBLIC_ASSETS_PREFIX =
  "https://s3-eu-west-1.amazonaws.com/kimmo-public-assets/"

const Image = ({ image, caption }) => {
  return (
    <div className="image-box">
      <div className="image">
        <figure>
          <img src={`${PUBLIC_ASSETS_PREFIX}${image}`} />
          {/*figcaption>{caption}</figcaption>*/}
        </figure>
      </div>
      {/*<div className="image-caption">{caption}</div>*/}
    </div>
  )
}

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
