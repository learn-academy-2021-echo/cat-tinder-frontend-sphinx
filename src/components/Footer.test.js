import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Footer from "./Footer";

Enzyme.configure({adapter: new Adapter()})

describe("When Footer renders", () => {
    it("displays the Footer page", () => {
        const foot = shallow(<Footer />)
        const footPage = foot.find("p").text()
        expect(footPage).toEqual("Copyright © 2022 Sphinx, Noah & Gluay")
    })
})