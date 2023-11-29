import React from 'react'
import './UnderWeight.css'
function UnderWeight() {
  return (
    <div>
      <img src='https://assets.lybrate.com/q_auto:eco,f_auto,w_850/imgs/product/kwds/diet-chart/Underweight-Diet-Chart-v1.webp' className='ps-5 mt-5' width="1000px">
      </img>
      <p className="fs-3 mt-5 lead text-center fw-bold">Diet Chart for Underweight person</p>
      <div className='tab'>
      <table>
        <thead>
          <tr>
            <td colSpan="2" className='fw-bold'>Weekly diet plan</td>
          </tr>
        </thead>
        <tbody>
        <tr>
          <td>Breakfast (8:00-8:30AM)</td>
          <td>2 egg brown bread sandwich + green chutney + 1 cup milk + 3 cashews + 4 almonds + 2 walnuts</td>
        </tr>
        <tr>
          <td>Mid-Meal (11:00-11:30AM)</td>
          <td>1 cup banana shake</td>
        </tr>
        <tr>
          <td>Lunch (2:00-2:30PM)</td>
          <td>1 cup arhar dal + 1 cup potato curry + 3 chapatti + 1/2 cup rice + 1/2 cup low fat curd + salad</td>
        </tr>
        <tr>
          <td>Evening (4:00-4:30PM)</td>
          <td>1 cup strawberry smoothie + 1 cup vegetable poha</td>
        </tr>
        <tr>
          <td>Dinner (8:00-8:30PM)</td>
          <td>1.5 cup chicken curry + 3 chapatti + salad</td>
        </tr>
        </tbody>
      </table>
      </div>
    </div>
  )
}

export default UnderWeight