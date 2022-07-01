import React from 'react'
import { Navbar } from 'react-bootstrap'

function Header() {
  return (
    <div className="App-header">
      <Navbar expand="lg">
        <Navbar.Brand className="navbar-brand mx-auto">
          Pricing maintenance App
        </Navbar.Brand>
      </Navbar>
    </div>
  )
}

export default Header
