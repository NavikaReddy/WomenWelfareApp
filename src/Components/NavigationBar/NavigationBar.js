import React from 'react'
import './NavigationBar.css'
import { NavLink } from 'react-router-dom'


function NavigationBar() {


  const activeLink={
    color:"#EEF0F1",
    fontSize:"1.2rem",
    fontWeight:"bold"
  }
  
  const inactiveLink={
    color:"#aaaaaa",
    fontSize:"1.2rem"
  }
  
    return (
      <nav className="navbar navbar-expand-sm navbar-light">
    <div className="container-fluid">
      <a className="navbar-brand" href="#"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW8BDCo91JQ1ayGykjWINZYMZxgLpkgqEr7-WvnNCnBHSndRmluzd0mQRf&s=10" width='90px' height='60px' className='icon'/></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink className="nav-link" style={({isActive})=>{
              return isActive?activeLink:inactiveLink;
            }} to="/aboutus">
              AboutUs</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" style={({isActive})=>{
              return isActive?activeLink:inactiveLink;
            }} to="/health">
               Health</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" style={({isActive})=>{
              return isActive?activeLink:inactiveLink;
            }} to="/ecommerce">
               E-commerce</NavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
    )
  }

export default NavigationBar