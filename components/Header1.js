import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import HeaderLogo from '../common/HeaderLogo'

export default function Header1() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  const handleLinkClick = (path) => {
    setActiveLink(path);
  }

  return (
    <header className='container-fluid bg-warning shadow-sm'>
      <div className='container p-3'>
        <div className='row align-items-center justify-content-between'>
          <div className='logo col-auto'>
            <h2 className='font-weight-bold'><HeaderLogo /></h2>
          </div>
          <nav className='col-auto'>
            <ul className='nav'>
              <li className='nav-item'>
                <Link 
                  className={`nav-link text-dark ${activeLink === "/student" ? "active" : ""}`} 
                  to="/student"
                  onClick={() => handleLinkClick("/student")}
                >
                  <i className='fas fa-user-graduate'></i> Student
                </Link>
              </li>
              <li className='nav-item'>
                <Link 
                  className={`nav-link text-dark ${activeLink === "/form" ? "active" : ""}`} 
                  to="/form"
                  onClick={() => handleLinkClick("/form")}
                >
                  <i className='fas fa-file-alt'></i> Form
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}
