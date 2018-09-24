import React from 'react'
import { Link } from 'react-router-dom'

const Master = ({ children }) => {
  return <div>
    <nav className="navbar navbar-expand-sm bg-light">
      <Link className="navbar-brand" to="/todos">Todos</Link>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/todos/create">Create</Link>
          </li>
        </ul>
      </div>
    </nav>
    <div className="container-fluid">
      {children}
    </div>
  </div>
}

export default Master
