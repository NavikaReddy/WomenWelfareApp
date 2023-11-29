import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Components/Footer/Footer'
import NavigationBar from './Components/NavigationBar/NavigationBar'
function RootLayout() {;
    return (
        <div>
            {/* navbar */}
            <NavigationBar/>
            {/*placeholder*/}
            <div className='container'>
            <Outlet/>
            </div>
            {/* Footer */}
            <Footer/>
        </div>
      )
}

export default RootLayout