import React from "react"
import { Index } from "../pages/index"
import { shallow } from "enzyme"

describe("Index component", () => {
  it("renders <Index /> component", () => {
    const wrapper = shallow(<Index />)
    const primaryTitle = wrapper.find(".heading-primary--main")
    expect(primaryTitle).toHaveLength(1)
  })
})
