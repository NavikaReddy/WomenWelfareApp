import React from 'react'
import {Link,Outlet} from 'react-router-dom'
import './NutritionPlans.css'
function NutritionPlans() {
  return (
    <div>
      <ul>
        {/* link for underweight diet plan*/}
        <li className="nav-item text-align-center">
        <Link className="nav-link" to="underWeight">UnderWeight Diet Plan</Link>
        </li>
        <li className="nav-item text-align-center">
        {/* link for regular diet plan*/}
        <Link className="nav-link" to="regularDiet">Regular Diet Plan</Link>
        </li>
        {/* link for ExtremeStrict diet plan*/}
        <li className="nav-item text-align-center">
        <Link className="nav-link" to="extremeStrict">Extreme Strict Diet Plan</Link>
        </li>
        {/* link for Excercise*/}
        <li className="nav-item text-align-center">
        <Link className="nav-link" to="exercise">Exercises</Link>
        </li>
    </ul>
    <Outlet/>
    </div>
  )
}

export default NutritionPlans