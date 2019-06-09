import React from "react"
import { storiesOf } from "@storybook/react"
import Index from "../pages/index"
import About from "../pages/about"

storiesOf(`index.js`, module).add(`default`, () => <Index />)

storiesOf(`index.js`, module).add(`about`, () => <About />)
