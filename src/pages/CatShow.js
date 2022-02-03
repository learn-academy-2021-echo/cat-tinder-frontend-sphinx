import React, { Component } from 'react';

class CatShow extends Component {
  render() {
    const { cat } = this.props
    return(
    <>
      <h1>CatShow page</h1>
      <p>Name: {cat.name}</p>
      <p>Age: {cat.age}</p>
      <p>Enjoys: {cat.enjoys}</p>
      <img src={cat.image} alt="cute cat pic" width ="300px"/>
    </>
    )
  }
}

export default CatShow;
