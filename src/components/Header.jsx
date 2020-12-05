import React from 'react'
import { Link } from 'react-router-dom'
import "./index.css";

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <header>
    <nav>
      <ul className="header_content">
        <li className="list"><Link to='/'>Home</Link></li>
        <li className="list"><Link to='/schedule'>Schedule</Link></li>
        <li className="list"><Link to='/cart'>Shopping Cart</Link></li>
      </ul>
    </nav>
  </header>
)

export default Header