import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import { Link } from 'react-router-dom'
import { HiOutlineArrowLeft } from 'react-icons/hi'
import blog1 from "../images/blog-1.jpg";



function SingleBlog() {
  return (
   <>
     <Meta title={"Dynamic Blog Name"}/>
     <BreadCrumb title="Dynamic Blog Name" />

     <div className='blog-wrapper home-wrapper-2 py-5'>
        <div className='container-xxl'>
            <div className='row'>
                <div className='col-12'>
                
                 <div className='single-blog-card'>
                    <Link to="/blogs" className='d-flex align-items-center gap-10'>
                    <HiOutlineArrowLeft className='fs-4'/>
                    Go Back to blogs</Link>
                    <h3 className='title'>
                   A Beautiful sunday morning renaissance
                    </h3>
                    <img src={blog1} className='img-fluid w-100 my-4' alt='blog'/>
                    <p className='desc'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                     </p>

                    </div>

                </div>
            </div>
        </div>
    </div>
   </>
  )
}

export default SingleBlog
