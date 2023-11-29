import React from 'react'
import {Link,Outlet} from 'react-router-dom'
import './Health.css'
function Health() {
  return (
    <div>
      <p className='display-2 text-center'>Health</p>
      <ul className="nav justify-content-center">
      <li className="nav-item">
        {/* link for fitness*/}
        <Link className="nav-link" to="fitness">Fitness</Link>
        </li>
        {/* link for menstrual tracking*/}
        <li className="nav-item">
        <Link className="nav-link" to="menstrual">Menstrual Tracking</Link>
        </li>
        {/* link for nutrtion plans*/}
        <li className="nav-item">
        <Link className="nav-link" to="nutritionplans">NutritionPlans</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="faqs">FAQS</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="pregnancy">PregnancyDiet</Link>
        </li>
    </ul>
    <Outlet/>
    </div>
  )
}

export default Health