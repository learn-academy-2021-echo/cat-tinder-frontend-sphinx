import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import './CatShow.css'

class CatShow extends Component {
  render() {
    const { cat } = this.props
    return(
    <>
      <div id="cat-show-container">
      {/* <h1>CatShow page</h1> */}
      <div id="cat-show-image">
      { cat ? <img src={cat.image} alt="cute cat pic" width ="300px"/> : null }
      </div>

      <div id="cat-show-info">
        <p>Name: <span class="span-txt-show">{cat ? cat.name : null }</span></p>
        <p>Age: <span class="span-txt-show">{cat ? cat.age : null }</span></p>
        <p>Enjoys: <span class="span-txt-show">{cat ? cat.enjoys : null }</span></p>
      </div>
      
      

      { cat ? <NavLink id="edit-btn" to={`/catedit/${cat.id}`} key={cat.id}>
          <p>Edit Cat Info</p>
      </NavLink> : <p>Go to create Cat</p>}
      </div>
     
    </>
    )
  }
}

export default CatShow;
