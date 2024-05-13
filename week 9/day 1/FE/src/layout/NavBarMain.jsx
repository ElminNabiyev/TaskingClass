import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function NavBarMain() {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/basket">Basket</Link>
      </nav>
    </header>
  )
}

export default NavBarMain
