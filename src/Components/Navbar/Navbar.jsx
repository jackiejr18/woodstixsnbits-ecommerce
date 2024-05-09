import React, { useRef, useState } from 'react'
import './Navbar.css'

import logo from '../Assets/logo.svg'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'
import nav_dropdown from '../Assets/noun-drop-down-2978607.png'

const Navbar = () => {

  const [menu,setMenu] = useState('shop');
  const {getTotalCartItems} = useContext(ShopContext);
  const menuRef =useRef();

  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open'); 
  }

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} />
        <p>WoodStixsNBits</p>
      </div>
      <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown}/>
      <ul ref={menuRef} className='nav-menu'>
        <li onClick={()=>{setMenu('shop')}}><Link style={{textDecoration: 'none'}} to='/'>Shop</Link>{menu==='shop'?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu('new')}}><Link style={{textDecoration: 'none'}} to='/new'>New</Link>{menu==='new'?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu('popular')}}><Link style={{textDecoration: 'none'}} to='/popular'>Popular</Link>{menu==='popular'?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu('upcoming')}}><Link style={{textDecoration: 'none'}} to='/upcoming'>Upcoming</Link>{menu==='upcoming'?<hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><img src={cart_icon}/></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  )
}

export default Navbar

