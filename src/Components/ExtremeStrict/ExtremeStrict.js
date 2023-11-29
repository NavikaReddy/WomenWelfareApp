import React from 'react'
import './ExtremeStrict.css'
function ExtremeStrict() {
  return (
    <div>
      <img src='https://assets.lybrate.com/q_auto:eco,f_auto,w_850/imgs/product/kwds/diet-chart/Obesity-Diet-Chart-v1.webp' width="1000px" height="500px"></img>
      <p className="fs-3 mt-5 lead text-center fw-bold">Extreme Strict Diet Plan</p>
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
          <td>3 egg whites + 1 toasted brown bread + 1/2 cup low fat milk (no sugar)</td>
        </tr>
        <tr>
          <td>Mid-Meal (11:00-11:30AM)</td>
          <td>1 cup papaya</td>
        </tr>
        <tr>
          <td>Lunch (2:00-2:30PM)</td>
          <td>1 cup arhar dal + 1 chapatti + 1/2 cup low fat curd + salad</td>
        </tr>
        <tr>
          <td>Evening (4:00-4:30PM)</td>
          <td>1 cup vegetable soup</td>
        </tr>
        <tr>
          <td>Dinner (8:00-8:30PM)</td>
          <td>1 cup pumpkin + 1 chapatti + salad</td>
        </tr>
        </tbody>
      </table>
      </div>
    </div>
  )
}

export default ExtremeStrict