import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import App from './App'
import Home from './pages/Home'

Enzyme.configure({ adapter: new Adapter() })

// describe("",() => {
//   it("", () => {
//     expect().toEqual()
//   })
// })

describe("When the App renders",() => {
  it("displays a header and a footer", () => {
    //Arrange
    const renderedApp = shallow(<App/>)
      //variable that calls on shallow which is passed an argument of a component call
    //Act
    const renderedHeader = renderedApp.find("Header")
    const renderedFooter = renderedApp.find("Footer")
    //Assert
    expect(renderedHeader.length).toEqual(1)
    expect(renderedFooter.length).toEqual(1)
  })
  it("providing a route '/' to the home component",() => {
    //Arrange
    const renderedApp = shallow(<App/>)
    //Act
    const renderedHomeRoute = renderedApp.find('[path="/"]')
   
    console.log("rendered Home Debug", renderedHomeRoute.debug());
    console.log("rendered Home Props", renderedHomeRoute.props());
    //Assert
    expect(renderedHomeRoute.length).toEqual(1)
    expect(renderedHomeRoute.props().component).toEqual(Home)
  })
})