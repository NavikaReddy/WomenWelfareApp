import React from 'react'
import './AboutUs.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
function AboutUs() {
  return (
    <div className='aboutMain'>
      <Carousel className="mt-5" autoPlay interval="3000" transitionTime="3000" infiniteLoop showThumbs={false}>
                <div>
                    <img height="300px" width="100px" src="https://newsimg.giznext.com/mobile/production/news/wp-content/uploads/2022/06/27123140/Period-Tracker-735x400.png" />
                </div>
                <div>
                    <img height = "300px" width="100px" src="https://www.millanbabyshop.com/wp-content/uploads/2021/07/6ef1233dd73cb54e93be0aed55aa3e6c-removebg-preview.png" />
                </div>
            </Carousel>
      <h1 className="display-2 mt-5 text-center fw-bold"> <span className='about'>About</span><span className='us'>Us</span></h1>
      <h2 className='display-5 mission fw-bold'>Our Mission</h2>
      <p className='fs-5 lead'>We are dedicated to providing women with the information they need to prioritise their health and wellness, and make informed health decisions .Our app gives women a platform to establish their identities by offering them chances to start their own businesses selling goods including food, clothing, natural skincare, cosmetics, and handicrafts through e-commerce section of our app.</p>     
      <h2 className='display-5 mission fw-bold'>Our Vision</h2>
      <p className='fs-5 lead'>Our Vision is to ensure that Every Women achieve the best possible health </p>     
    </div>
  )
}

export default AboutUs