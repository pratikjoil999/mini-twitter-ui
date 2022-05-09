import React from 'react';
import './nav.scss'
  import { Link } from 'react-router-dom';

export default class Nav extends React.Component {
  render() {    
    return (  
      <header className="navBar">
      <nav className="nav">

        <div className="nav_item">
        {/*   <ul >
            <li >
              <Link className="nav_link" to="/path1">Link 1</Link>
            </li>
            <li >
              <Link className="nav_link" to="/path2">Link 2</Link>
            </li>
            <li >
              <Link className="nav_link" to="/path3">Link 3</Link>
            </li>
          </ul> */}
        </div>
    </nav>
    </header>
    );
  }
}