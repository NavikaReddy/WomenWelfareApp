import React from 'react'
import './RegularDiet.css'
function RegularDiet() {
  return (
    <div>
      <img src='https://femina.wwmindia.com/content/2018/dec/balanced-diet-chart-1545123580.jpg' className='ps-5 mt-5' width="1000px" height="500px"></img>
      <p className="fs-3 mt-5 lead text-center fw-bold">Diet Chart for Fit person</p>
      <div className='tab'>
      <table>
        <thead>
          <tr>
            <td colSpan="2" className='fw-bold'>Weekly diet plan</td>
          </tr>
        </thead>
        <tbody>
        <tr>
          <td>Breakfast</td>
          <td>One grapefruit, Two poached eggs (or fried in a non-stick pan), One slice 100% whole wheat toast</td>
        </tr>
        <tr>
          <td>Snack</td>
          <td>One banana, 1 cup plain yogurt with 1 tablespoon honey</td>
        </tr>
        <tr>
          <td>Lunch</td>
          <td>6 ounces grilled chicken breast, Large garden salad (3 cups mixed greens with 1 cup cherry tomatoes, 1/4 avocado, topped with 2 tablespoons balsamic vinaigrette)</td>
        </tr>
        <tr>
          <td>Snack</td>
          <td>1 cup (about 10) baby carrots, 3 tablespoons hummus, 1/2 piece of pita bread</td>
        </tr>
        <tr>
          <td>Dinner</td>
          <td>1 cup steamed broccoli, 1 cup of brown rice, Halibut (4-ounce portion)</td>
        </tr>
        </tbody>
      </table>
      </div>
    </div>
  )
}

export default RegularDiet