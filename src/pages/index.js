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

const IMAGE_EXPERIMENT_NAME = "Image experiment"

const Index = () => {
  return (
    <>
      <Experiment name={IMAGE_EXPERIMENT_NAME}>
        <Variant name="A">
          <Images1 />
        </Variant>
        <Variant name="B">
          <Images2 />
        </Variant>
      </Experiment>
    </>
  )
}

experimentDebugger.enable()

const hasWindow = typeof window !== "undefined"

function buildGtag() {
  function sendEvent({ action, category, label }) {
    if (hasWindow && window.gtag) {
      console.log(`Sending gtag event`, { action, category, label })
      window.gtag("event", action, {
        event_category: category,
        event_label: label,
      })
    }
  }

  function emitShow(experimentName, variantName) {
    sendEvent({
      action: "show",
      category: `experiment:${experimentName}`,
      label: variantName,
    })
  }

  function emitWin(experimentName, variantName) {
    sendEvent({
      action: "win",
      category: `experiment:${experimentName}`,
      label: variantName,
    })
  }

  return {
    emitWin,
    emitShow,
  }
}

const gtag = buildGtag()

function addPlayListener() {
  emitter.addPlayListener((experimentName, variantName) => {
    console.log(
      `Displaying experiment ${experimentName} variant ${variantName}`
    )
    if (typeof window !== "undefined" && window.gtag) {
      gtag.emitShow(experimentName, variantName)
    }
  })
}

function addWinListener() {
  emitter.addWinListener((experimentName, variantName) => {
    console.log(`Variant ${variantName} of experiment ${experimentName} won`)
    if (typeof window !== "undefined" && window.gtag) {
      gtag.emitWin(experimentName, variantName)
    }
  })
}

export default () => {
  addPlayListener()
  addWinListener()

  React.useEffect(() => {
    let emittedWin = false

    const scrollListener = e => {
      const element = e.target.scrollingElement
      const isAtBottom =
        element.scrollHeight - element.scrollTop === element.clientHeight
      if (isAtBottom && !emittedWin) {
        emittedWin = true
        emitter.emitWin(IMAGE_EXPERIMENT_NAME)
      }
    }
    if (typeof window !== "undefined") {
      console.log("Adding scroll listener")
      window.addEventListener("scroll", scrollListener)
    }

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
