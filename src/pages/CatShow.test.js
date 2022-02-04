import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import CatShow from "./CatShow";

Enzyme.configure({adapter: new Adapter()})

describe("When CatShow renders", () => {
    it("displays name, age, and enjoys from cats", () => {
        const catShow = shallow(<CatShow />)
        const catInfo = catShow.find("p")
        expect(catInfo.length).toEqual(4)
    })
})