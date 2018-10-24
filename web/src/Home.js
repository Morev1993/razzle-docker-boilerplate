import React from 'react';
import logo from './react.svg';
import './Home.css';
import keys from './keys';

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <div className="Home-header">
          <img src={logo} className="Home-logo" alt="logo" />
          <h2>Welcome to Razzle</h2>
        </div>
        <p className="Home-intro">
          To get started, edit <code>src/App.js</code> or{' '}
          <code>src/Home.js</code> and save to reload.
        </p>
        <ul className="Home-resources">
          <li>
            HELLO={keys.HELLO}
          </li>
          <li>
            API_BASEURL={keys.API_BASEURL}
          </li>
        </ul>
      </div>
    );
  }
}

export default Home;
