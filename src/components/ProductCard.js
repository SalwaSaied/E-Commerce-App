import React from 'react'
import ReactStars from "react-rating-stars-component"
import { Link, useLocation } from 'react-router-dom'
import prodcompare from "../images/prodcompare.svg";
import addcart from "../images/add-cart.svg";
import view from "../images/view.svg";
import famous1 from "../images/famous-1.jpg";
import watch from "../images/watch.jpg";
import wish from "../images/wish.svg";
import tab from "../images/tab.jpg";
import tab2 from "../images/tab2.jpg";



const ProductCard=(props)=>{
    const {grid}=props;
    let location=useLocation();
    
    return(
    <>
    <div 
    className={`${location.pathname == "/product"? `gr-${grid}` : "col-3"}`} >
        <Link
            to={`${location.pathname=="/"
                ? "/product/:id"
                :location.pathname=="/product/:id"
                ?"/product/:id"
                :":id"}`}
            className='product-card position-relative'>
            <div className='wishlist-icon position-absolute'>
                <img src={wish} alt='wishlist' />
            </div>
            <div className='product-image'>
                <img src={watch} className='img-fluid'  alt='prdouct image'/>
                <img src={famous1} className='img-fluid' alt='prdouct image'/>

            </div>
            <div className='product-details'>
                <h6 className='brand'>Havels</h6>
                <h5 className='product-title'>Kids heaphone bulk 10 pack multi colored for stdenrs</h5>
              
               <ReactStars 
               count={5}
               value={3}
               edit={false} /* if i want the user edit make it true*/
               size={24}
               activeColor="#ffd700"
               />
                <p className={`description' ${grid===12 ? "d-block" : "d-none"}`} >Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.</p>
                <p className='price'>$100.00</p>
            </div>
            <div className='action-bar position-absolute'>
                <div className='d-flex flex-column gap-15'>
                    <button className='border-0 bg-transparent'>
                    <img src={prodcompare} alt="compare"/>
                    </button>
                    <button className='border-0 bg-transparent'>
                    <img src={view} alt="view"/>
                    </button>
                    <button className='border-0 bg-transparent'>
                    <img src={addcart} alt="addcart"/>
                    </button>
                </div>
            </div>
        </Link>
    </div>


    <div 
    className={`${location.pathname == "/product"? `gr-${grid}` : "col-3"}`} >
        <Link
        to={`${location.pathname=="/"
            ? "/product/:id"
            :location.pathname=="/product/:id"
            ?"/product/:id"
            :":id"}`}
         className='product-card position-relative'>
            <div className='wishlist-icon position-absolute'>
            <button className='border-0 bg-transparent'>
            <img src={wish} alt='wishlist' />
            </button>
            </div>
            <div className='product-image'>
                <img src={tab} className='img-fluid'  alt='prdouct image'/>
                <img src={tab2} className='img-fluid' alt='prdouct image'/>

            </div>
            <div className='product-details'>
                <h6 className='brand'>Havels</h6>
                <h5 className='product-title'>Kids heaphone bulk 10 pack multi colored for stdenrs</h5>
              
               <ReactStars 
               count={5}
               value={3}
               edit={false} /* if i want the user edit make it true*/
               size={24}
               activeColor="#ffd700"
               />
                <p className={`description' ${grid===12 ? "d-block" : "d-none"}`}>Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.</p>
                <p className='price'>$100.00</p>
            </div>
            <div className='action-bar position-absolute'>
                <div className='d-flex flex-column gap-15'>
                   <button className='border-0 bg-transparent'>
                    <img src={prodcompare} alt="compare"/>
                    </button>
                   <button className='border-0 bg-transparent'>
                    <img src={view} alt="view"/>
                    </button>
                   <button className='border-0 bg-transparent'>
                    <img src={addcart} alt="addcart"/>
                    </button>
                </div>
            </div>
        </Link>
    </div>
    </>
    )
}

export default ProductCard

