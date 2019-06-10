import React from "react"
import "./index.scss"
import Layout from "../components/layout"
import Image from "../components/image"

const Peacock = "IMG_7126-Edit-2.jpg"
const BumbleBee = "IMG_6869-Edit-2.jpg"
const KuusamoBear = "20180821-IMG_9232.jpg"
const Suomujoki = "20180829-IMG_9945-Edit-Edit.jpg"

export default () => (
  <Layout>
    <Image image={KuusamoBear} caption={"Kuusamo, Finland"} />
    <Image image={Suomujoki} caption={"Suomujoki, Finland"} />
    <Image image={BumbleBee} caption={"Hauho, Finland"} />
    <Image image={Peacock} caption={"Hauho, Finland"} />
  </Layout>
)
