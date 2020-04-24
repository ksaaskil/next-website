import React from "react"
import Index from "../pages/index"
import { shallow } from "enzyme"

describe("Index component", () => {
  it.skip("renders <Index /> component", () => {
    const wrapper = shallow(<Index />)
    expect(wrapper).not.toBe(null)
  })
})
