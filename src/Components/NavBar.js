import React from 'react'
import Logo from '../logo.png'
import {Link} from 'react-router-dom';
function NavBar() {
  return (
    <div className='flex space-x-8   pl-6  md:space-x-8 border md:pl-12 items-center py-4'>
        <img src={Logo} className="w-[45px] md:w-[70px]"></img>
        <Link to="/" className='text-black-400 text-xl  md:text-3xl font-bold '>Movies</Link>
        <Link to="/favourites" className='text-black-400 text-xl  md:text-3xl font-bold '>Favourites</Link>
    </div>
  )
}

export default NavBar;