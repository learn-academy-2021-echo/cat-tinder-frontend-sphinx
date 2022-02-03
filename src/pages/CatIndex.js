import React, { Component } from 'react';
import { NavLink } from "react-router-dom";


class CatIndex extends Component {
  render() {
    return(
    <div>
      <h1>Meet our furry friends!</h1>
        {this.props.cats.map(cat => {
          return (
          <NavLink to={`/catshow/${cat.id}`} key={cat.id}>
          <p>{cat.name}</p>
          </NavLink>
          )
        })}
    </div>
    )
  }
}

export default CatIndex;
