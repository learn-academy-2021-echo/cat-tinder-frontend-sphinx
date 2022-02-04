import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import './CatShow.css'

class CatShow extends Component {
  render() {
    const { cat } = this.props
    return(
    <>
      <div id="cat-show-container">
      <h1>CatShow page</h1>
      <p>Name: {cat ? cat.name : null }</p>
      <p>Age: {cat ? cat.age : null }</p>
      <p>Enjoys: {cat ? cat.enjoys : null }</p>
      
      { cat ? <img src={cat.image} alt="cute cat pic" width ="300px"/> : null }

      { cat ? <NavLink id="edit-btn" to={`/catedit/${cat.id}`} key={cat.id}>
          <p>Edit Cat Info</p>
      </NavLink> : <p>Go to create Cat</p>}
      </div>
     
    </>
    )
  }
}

export default CatShow;
