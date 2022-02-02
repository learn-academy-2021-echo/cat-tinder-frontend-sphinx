import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import NotFound from "./NotFound";

Enzyme.configure({adapter: new Adapter()})

describe("When NotFound renders", () => {
    it("displays 404 page", () => {
        const lost = shallow(<NotFound />)
        const lostPage = lost.find("a")
        expect(lostPage.length).toEqual(1)
    })
})