import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.scss"
const Header = () => {
  return (
   <>
   <nav>
    <div className='navbar'>
      <div className='logo'>Manup</div>
   <div className='menu'>
     <ul>
        <li><Link className='list' to="/">Home</Link></li>
        <li><Link className='list' to="/add">Add</Link></li>
        <li><Link className='list' to="/wishlist">Wishlist</Link></li>
     </ul>
     </div>
    </div>
   </nav>
   
   
   </>
  )
}

export default Header