import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Header from "./Header";

Enzyme.configure({adapter: new Adapter()})

describe("When Header renders", () => {
    it("displays a clickable link inside an anchor tag", () => {
        const head = shallow(<Header />)
        const headPage = head.find("a")
        expect(headPage.length).toEqual(1)
    })
})