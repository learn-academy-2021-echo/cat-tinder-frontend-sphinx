import React, { Component } from 'react';

class CatShow extends Component {
  render() {
    const { cat } = this.props
    return(
    <>
      <h1>CatShow page</h1>
      <p>Name: {cat ? cat.name : null }</p>
      <p>Age: {cat ? cat.age : null }</p>
      <p>Enjoys: {cat ? cat.enjoys : null }</p>
      
      { cat ? <img src={cat.image} alt="cute cat pic" width ="300px"/> : null }
    </>
    )
  }
}

export default CatShow;
