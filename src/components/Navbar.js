import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
         <nav className="bg-blue-500 p-4">
      <div className="container mx-auto">
      <Link to={"/"} className="hover:no-underline"> <h1 className="text-white text-2xl font-bold">maxStore</h1></Link> 
      </div>
    </nav>
    </div>
  )
}

export default Navbar