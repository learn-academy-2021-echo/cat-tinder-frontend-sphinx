import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import './CatIndex.css';
import CatsBackground from '../assets/cats_color_bg.svg'


class CatIndex extends Component {
  render() {
    return(
    <div id="cat-index-container">
      <h1>Meet our <span className="span-txt">furry</span> friends!</h1>
        {this.props.cats ? this.props.cats.map(cat => {
          return (
          <NavLink to={`/catshow/${cat.id}`} key={cat.id}>
          <p>{cat.name}</p>
          </NavLink>
          ) 
        })
        : <p>No cats</p>
      }
      <img src={CatsBackground} alt="cats_lovers"/>
    </div>
    )
  }
}

export default CatIndex;
