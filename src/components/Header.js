import React, { Component } from 'react';
import './Header.css'
import SphinxLogo from '../assets/Sphinx_logo.svg'

class Header extends Component {


  render() {
    return(
    <div id="header">
      <a href="http://localhost:3000/"><img src={ SphinxLogo } alt="Sphinx Logo"/></a>
      {/* <h1>Header page</h1> */}

    </div>
    )
  }
}

export default Header;
