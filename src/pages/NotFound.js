import React, { Component } from 'react';
import NotFoundSphinx from '../assets/notFoundSphinx.svg'
import './NotFound.css'
class NotFound extends Component {


  render() {
    return(
    <div id="notFound404">
      <img src={ NotFoundSphinx } alt="error_404" />
      <a href="http://localhost:3000/">Back to homepage</a>
    </div>
    )
  }
}

export default NotFound;
