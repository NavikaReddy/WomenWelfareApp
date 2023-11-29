import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AboutUs from './Components/AboutUs/AboutUs'
import RootLayout from './RootLayout';
import Health from './Components/Health/Health'
import Main from './Components/Main/Main'
import Fitness from './Components/Fitness/Fitness'
import MenstrualTrack from './Components/MenstrualTrack/MenstrualTrack'
import Faqs from './Components/FAQS/Faqs'
import Ecommerce from './Components/Ecommerce/Ecommerce';
import PregnancyDiet from './Components/PregnancyDiet/PregnancyDiet';
import NutritionPlans from './Components/NutritionPlans/NutritionPlans';
import UnderWeight from './Components/UnderWeight/UnderWeight';
import RegularDiet from './Components/RegularDiet/RegularDiet';
import ExtremeStrict from './Components/ExtremeStrict/ExtremeStrict';
import Exercises from './Components/Exercises/Exercises';
function App() {
  //create browser router object
  const router = createBrowserRouter([
    {
      path:"/",
      element:<RootLayout/>,
      children:[
        {
          path:"/",
          element:<Main/>
        },
        {
          path:"/aboutus",
          element:<AboutUs/>
      },
      {
        path:"/health",
        element:<Health/>,
        children:[
          {
            path:"menstrual",
            element:<MenstrualTrack/>
          },
          {
            path:"fitness",
            element:<Fitness/>,
          },
          {
            path:"nutritionplans",
            element:<NutritionPlans/>,
            children:[
              {
              path:"underWeight",
              element:<UnderWeight/>
              },
              {
                path:"regularDiet",
                element:<RegularDiet/>
              },
              {
                path:"extremeStrict",
                element:<ExtremeStrict/>
              },
              {
                path:"exercise",
                element:<Exercises/>
              }
            ]
          },
          {
            path:"faqs",
            element:<Faqs/>
          },
          {
            path:"pregnancy",
            element:<PregnancyDiet/>
          }
        ]
      },
      {
        path:"/ecommerce",
        element:<Ecommerce/>
      }
    ]
    }
  ])
  return (
    <div>
        <RouterProvider router={router}/>
    </div>
  );
}

export default App;
