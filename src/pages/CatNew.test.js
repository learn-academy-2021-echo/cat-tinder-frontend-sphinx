import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import CatNew from "./CatNew";

Enzyme.configure({adapter: new Adapter()})


describe("When CatNew renders there is a form to add a new cat", () => {
    it("has four fields to fill out, each with their own input", () => {
        const catNew = shallow(<CatNew />)
        const newCat = catNew.find("Input")
        expect(newCat.length).toEqual(4)
    })
    it("has a submit button", () => {
        const catNew = shallow(<CatNew />)
        const submitCat = catNew.find("Button")
        expect(submitCat.length).toEqual(1)
    })
})
