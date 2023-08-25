import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div className="navbar">
        <div className="name">Todo Dojo</div>
        <div className="links">
            <Link to="/">Home</Link>
            <Link to='/addblog'>AddItem</Link>
        </div>
    </div>
    </>
  )
}

export default Navbar
