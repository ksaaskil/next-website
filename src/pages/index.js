import React from "react"
import {
  Experiment,
  Variant,
  emitter,
  experimentDebugger,
} from "@marvelapp/react-ab-test"
import "./index.scss"
import Layout from "../components/layout"
import Image from "../components/image"

const Peacock = "IMG_7126-Edit-2.jpg"
const BumbleBee = "IMG_6869-Edit-2.jpg"
const KuusamoBear = "20180821-IMG_9232.jpg"
const Suomujoki = "20180829-IMG_9945-Edit-Edit.jpg"

const Images1 = () => (
  <>
    <Image image={KuusamoBear} caption={"Kuusamo, Finland"} />
    <Image image={Suomujoki} caption={"Suomujoki, Finland"} />
    <Image image={BumbleBee} caption={"Hauho, Finland"} />
    <Image image={Peacock} caption={"Hauho, Finland"} />
  </>
)

const Images2 = () => (
  <>
    <Image image={Peacock} caption={"Hauho, Finland"} />
    <Image image={KuusamoBear} caption={"Kuusamo, Finland"} />
    <Image image={Suomujoki} caption={"Suomujoki, Finland"} />
    <Image image={BumbleBee} caption={"Hauho, Finland"} />
  </>
)

const IMAGE_EXPERIMENT = "Image experiment"

const Index = () => (
  <>
    <Experiment name={IMAGE_EXPERIMENT}>
      <Variant name="A">
        <Images1 />
      </Variant>
      <Variant name="B">
        <Images2 />
      </Variant>
    </Experiment>
  </>
)

experimentDebugger.enable()

export default () => {
  React.useEffect(() => {
    let emittedWin = false

    const scrollListener = e => {
      // @ts-ignore
      const element = e.target.scrollingElement
      const isAtBottom =
        element.scrollHeight - element.scrollTop === element.clientHeight
      if (isAtBottom && !emittedWin) {
        emittedWin = true
        emitter.emitWin(IMAGE_EXPERIMENT)
      }
    }
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", scrollListener)
    }

    // Called when the experiment is displayed to the user.
    emitter.addPlayListener(function(experimentName, variantName) {
      console.log(
        `Displaying experiment ${experimentName} variant ${variantName}`
      )
    })

    // Called when a 'win' is emitted
    emitter.addWinListener(function(experimentName, variantName) {
      console.log(`Variant ${variantName} of experiment ${experimentName} won`)
    })

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", scrollListener)
      }
    }
  }, [])

  return (
    <Layout>
      <Index />
    </Layout>
  )
}
