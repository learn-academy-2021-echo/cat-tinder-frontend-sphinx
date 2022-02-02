import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import NotFound from "./NotFound";

Enzyme.configure({adapter: new Adapter()})

describe("When NotFound renders", () => {
    it("displays a link with text in an anchor tag", () => {
        const lost = shallow(<NotFound />)
        const lostPage = lost.find("a").text()
        expect(lostPage).toEqual("Back to homepage")
    })
})