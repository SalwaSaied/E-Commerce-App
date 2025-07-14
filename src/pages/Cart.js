import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import watch from "../images/watch.jpg";
import { AiFillDelete } from 'react-icons/ai';
import { Link } from 'react-router-dom';

function Cart() {
  return (
    <>
     <Meta title={"Cart"}/>
     <BreadCrumb title="Cart" />
     <section className='cart-wrapper py-5 home-wrapper-2 '>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <div className='cart-header py-3 d-flex justify-content-between align-items-center'>
                <h4 className='cart-col-1'>Product</h4>
                <h4 className='cart-col-2'>Price</h4>
                <h4 className='cart-col-3'>Quantity</h4>
                <h4 className='cart-col-4'>Total</h4>
            </div>
            <div className='cart-data mt-2 py-3 d-flex justify-content-between align-items-center'>
                <div className='cart-col-1 d-flex gap-15 justify-content-between align-items-center '>
                    <div className='w-25'>
                    <img src={watch} 
                    alt='product image'
                    className='img-fluid'/>
                    </div>
                    <div className='w-75'>
                        <p>FFGTE</p>
                        <p> Size: hgf</p>
                        <p>Color: kkhg</p>
                    </div>
                </div>
                <div className='cart-col-2'>
                    <h5 className='price'>$ 100</h5>
                </div>
                <div className='cart-col-3 d-flex gap-15 align-items-center'>
                    <div>
                        <input 
                        className='form-control' 
                        type='number' 
                        name='' 
                        id=''
                        min={1}
                        max={10}/>
                    </div>
                    <div>
                        <AiFillDelete className='text-danger '/>
                    </div>
                </div>
                <div className='cart-col-4'>
                <h5 className='price'>$ 100</h5>

                </div>
            </div>
    
           <div className='col-12 py-2 mt-4'>
            <div className='d-flex justify-content-between align-items-baseline'>
            <Link to="/product" className="button"> Continue to Shopping</Link>
            </div>
            <div className='d-flex flex-column align-items-end'> 
                <h4>SubTotal: $ 1000</h4>
                <p> taxes and shipping caluclating at checkout</p>
                <Link to= "/checkout" className='button'>Checkout</Link>
            </div>
           </div>
            </div>
        </div>
        </div>
    </section>
    </>
  )
}

export default Cart
