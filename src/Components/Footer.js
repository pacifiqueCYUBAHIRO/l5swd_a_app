import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    
       <footer className="bg-gray-800 text-white p-8">
      <div className="container mx-auto grid grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-bold mb-4">About Us</h3>
          <p className="text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.</p>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul className="text-gray-300">
            <li className="mb-2"><Link className="hover:text-white">Terms of Service</Link></li>
            <li className="mb-2"><Link className="hover:text-white">Terms of Service</Link></li>
            <li className="mb-2"><Link className="hover:text-white">Terms of Service</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul className="text-gray-300">
            <li className="mb-2"><Link className="hover:text-white">Terms of Service</Link></li>
            <li className="mb-2"><Link className="hover:text-white">Terms of Service</Link></li>
            <li className="mb-2"><Link className="hover:text-white">Terms of Service</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Connect With Us</h3>
          <div className="flex space-x-4">
            <Link className="text-gray-300 hover:text-white">Facebook</Link>
            <Link className="text-gray-300 hover:text-white">Facebook</Link>
            <Link className="text-gray-300 hover:text-white">Facebook</Link>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-8 pt-6 border-t border-gray-600 text-center text-gray-300">
        <p>&copy; 2025 L5 SWD A. All rights reserved.</p>
      </div>
    </footer>
   
  )
}

export default Footer;
