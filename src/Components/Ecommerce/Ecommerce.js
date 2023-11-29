import React from 'react'
import './Ecommerce.css'
function Ecommerce() {
  return (
    <div>
      < h1 className='tit text-center mt-5 mb-5 fw-bold'>Womenry</h1>
      <div className="card mb-3 bg-dark">
  <div className="row no-gutters">
    <div className="col-md-4">
      <img src="https://c8.alamy.com/comp/2HNP48J/difficult-choice-in-pharmacy-concept-young-frustrated-woman-cartoon-character-standing-trying-to-choose-right-medicine-in-pharmacy-shop-vector-illust-2HNP48J.jpg" className="card-img" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body mt-5">
        <h5 className="card-title text-light fw-bold">Buy women sanitation related products and medicines here</h5>
        <p className="card-text text-light">E-commerce website specially for women to buy the wide range of products of there choice.</p>
        <button className='btn btn-danger'>Buy Now</button>
      </div>
    </div>
  </div>
</div>
<div className="card mb-3 bg-dark">
  <div className="row no-gutters">
    <div className="col-md-8">
      <div className="card-body mt-5 pt-5">
        <h5 className="card-title text-light fw-bold">Set-up your own business by registering with us and sell your products here</h5>
        <p className="card-text text-light">E-commerce website specially for women to sell there handicrafts, homemade products, beauty products and many more...</p>
        <button className='btn btn-success'>Register with us</button>
      </div>
      
    </div>
    <div className="col-md-4">
    <img src="https://png.pngtree.com/png-clipart/20220131/original/pngtree-young-business-women-selling-bags-online-there-are-orders-every-day-png-image_7257764.png" className="card-img" alt="..."/>
    </div>
  </div>
</div>
      </div>
  )
}

export default Ecommerce