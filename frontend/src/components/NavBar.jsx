import React from 'react'
import { Route,Routes,Link,NavLink } from 'react-router-dom'
import Home from '../pages/Home'
import Contact from '../pages/Contact'
import Explore from '../pages/Explore'
import AboutUs from '../pages/AboutUs'
import Login from '../pages/Login'
import SignUp from '../pages/SignUp'

function NavBar() {
  return (
    <div
    className='flex justify-around items-center  h-14 gap-6 bg-slate-500 p-1 sticky z-50  top-0'
    >
      <NavLink to='/' className={({isActive})=>` p-1 ${isActive?'text-yellow-100':'text-black'}`}>Home</NavLink>
      <NavLink to='/explore' className={({isActive})=>` p-1 ${isActive?'text-yellow-100':'text-black'}`}>Explore</NavLink>
      <NavLink to='/products' className={({isActive})=>` p-1 ${isActive?'text-yellow-100':'text-black'}`}>Products</NavLink>
      <NavLink to='/aboutus' className={({isActive})=>` p-1 ${isActive?'text-yellow-100':'text-black'}`}>AboutUs</NavLink>
      <NavLink to='/contact' className={({isActive})=>` p-1 ${isActive?'text-yellow-100':'text-black'}`}>Contact</NavLink>
      <NavLink to='/login' className={({isActive})=>` p-1 ${isActive?'text-yellow-100':'text-black'}`}>Login</NavLink>
      <NavLink to='/signup' className={({isActive})=>` p-1 ${isActive?'text-yellow-100':'text-black'}`}>SignUp</NavLink>

    </div>
  )
}

export default NavBar