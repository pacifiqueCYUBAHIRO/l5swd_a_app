import React from 'react'

import { Link } from 'react-router-dom';

function Navbar() {
  return (
    
      <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex space-x-40 items-center">
        <p className="text-xl p-1 font-bold">Logo</p>
        <ul className="flex space-x-6">
          <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
          <li><Link to ="/" className="hover:text-gray-310">About</Link></li>
          <li><Link to ="/" className="hover:text-gray-300">Services</Link></li>
          <li><Link to ="/" className="hover:text-gray-300">Contact</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;
