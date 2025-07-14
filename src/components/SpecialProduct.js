import React from 'react'
import ReactStars from "react-rating-stars-component"
import { Link } from 'react-router-dom'


function SpecialProduct() {
  return (
    <div className='col-4'>
        <div className='special-product-card'>
            <div className='d-flex justify-cotent-between'>
                <div>
                <img src="images/speaker.jpg" className='img-fluid' alt="speaker" />
                </div>
                <div className='special-product-content'>
                    <h5 className='brand'>Sony</h5>
                    <h6 className='title'>Beoplay A1 Portable Bluetooth Speaker with ...</h6>
                    <ReactStars 
                        count={5}
                        value={3}
                        edit={false} /* if i want the user edit make it true*/
                        size={24}
                        activeColor="#ffd700"
                        />
                    <p className='price'>
                        <span className='red-p'>$100.00</span> &nbsp; <strike>$200.00</strike></p>
                    <div className='discount-till d-flex align-items-center gap-10'>
                        <p className='mb-0'>
                            <b>5 </b>days
                        </p>
                        <div className="d-flex gap-10 align-items-center">
                            <span className='badge rounded-circle p-3 bg-danger'>1</span>:
                            <span className='badge rounded-circle p-3 bg-danger'>1</span>:
                            <span className='badge rounded-circle p-3 bg-danger'>1</span>
                        </div>
                    </div>
                    <div className='prod-count my-3'>
                            <p>Products: 5</p>
                            <div className='progress'>
                                <div>
                                   <div className="progress-bar"
                                     role="progressbar" 
                                     style={{width: "25%"}} 
                                     aria-valuenow="25" 
                                     aria-valuemin="0" 
                                     aria-valuemax="100"> </div>
                                </div>
                            </div>
                        </div>
                    <Link className='button'>Add to Cart</Link>
                </div>
            </div>

        </div>
      
    </div>
  )
}

export default SpecialProduct
