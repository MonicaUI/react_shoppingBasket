import React from 'react'
import { Link } from 'react-router-dom'

const Schedule = () => (
  <div>
    <ul>
      <li>6/5 @ Evergreens</li>
      <li>6/8 vs Kickers</li>
      <li>6/14 @ United</li>
    </ul>
        <Link to='/redirect'>Try to redirect to shopping cart</Link>
  </div>
)

export default Schedule
