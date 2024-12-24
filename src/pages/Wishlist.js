import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'

function Wishlist() {
  return (
    <>
    <Meta title={"Wishlist"}/>
    <BreadCrumb title="Wishlist" />
    <div className='wishlist-warapper py-5 home-wrapper-2'>
       <div className='container-xxl'>
        <div className='row'>
            <div className='col-3'>
                <div className='wishlist-card position-relative'>
                <img src="images/cross.svg" alt='cross' className='position-absolute cross img-fluid '/>
                <div className='wishlist-card-image '>
                <img src="images/watch.jpg" alt='watch' className='img-fluid w-100' />
               </div>
               <div className='px-3 py-3'>
               <h5 className='title'> Honor T1 7.0 AGB RAM 8 GB ROM 7 INCH with Wi-Fi +3G Tablet </h5>
               <h6 className='price mb-3 mt-3'>$100</h6>
               </div>
             
              </div>
            </div>

            <div className='col-3'>
                <div className='wishlist-card position-relative'>
                <img src="images/cross.svg" alt='cross' className='position-absolute cross img-fluid '/>
                <div className='wishlist-card-image '>
                <img src="images/watch.jpg" alt='watch' className='img-fluid w-100' />
               </div>
               <div className='px-3 py-3'>
               <h5 className='title'> Honor T1 7.0 AGB RAM 8 GB ROM 7 INCH with Wi-Fi +3G Tablet </h5>
               <h6 className='price mb-3 mt-3'>$100</h6>
               </div>
             
              </div>
            </div>

            <div className='col-3'>
                <div className='wishlist-card position-relative'>
                <img src="images/cross.svg" alt='cross' className='position-absolute cross img-fluid '/>
                <div className='wishlist-card-image '>
                <img src="images/watch.jpg" alt='watch' className='img-fluid w-100' />
               </div>
               <div className='px-3 py-3'>
               <h5 className='title'> Honor T1 7.0 AGB RAM 8 GB ROM 7 INCH with Wi-Fi +3G Tablet </h5>
               <h6 className='price mb-3 mt-3'>$100</h6>
               </div>
             
              </div>
            </div>


       </div>
       </div>
    </div>
   
    </>
  )
}

export default Wishlist
