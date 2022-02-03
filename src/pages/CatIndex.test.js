import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import CatIndex from "./CatIndex";

Enzyme.configure({adapter: new Adapter()})

describe("When CatIndex renders", () => {
    it("displays name of cats from mockCats", () => {
        const catIndex = shallow(<CatIndex />)
        const allcats = catIndex.find("p").text()
        expect(allcats).toEqual("No cats")
    })
})