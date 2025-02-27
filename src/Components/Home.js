import React from 'react'

function Home() {
  return (
    
      <div className="container mx-auto py-12 px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Column 1 */}

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Column One</h2>
          <img 
            src="/col1.png" 
            alt="Column One" 
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <p className="text-gray-600 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
            Learn More
          </button>
        </div>

        {/* Column 2 */}

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Column Two</h2>
          <img 
            src="/col2.png" 
            alt="Column Two" 
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <p className="text-gray-600 mb-4">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
            Learn More
          </button>
        </div>

        {/* Column 3 */}

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Column Three</h2>
          <img 
            src="/col3.png" 
            alt="Column Three" 
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <p className="text-gray-600 mb-4">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </div>
  
  )
}

export default Home;
