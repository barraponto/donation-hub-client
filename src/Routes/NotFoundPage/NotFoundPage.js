import React, { Component } from 'react'
import './NotFoundPage.css';

class NotFoundPage extends Component {

  static defaultProps = {
    location: {},
    history: {
      push: () => { },
    },
  }

  render() {
    return(
      <div className="notFound">
        <h2>404 - Page not found</h2>
        <p>Uh Oh! Looks like you've ventured off the map.</p> 
      </div>
    );
  }
}

export default NotFoundPage