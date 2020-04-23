import React from "react"
import Index from "../pages/index"
import { shallow } from "enzyme"

describe("Index component", () => {
  it("renders <Index /> component", () => {
    const wrapper = shallow(<Index />)
    expect(wrapper).not.toBe(null)
  })
})
