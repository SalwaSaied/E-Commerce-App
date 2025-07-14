import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard=()=>{
    return(
   
        <div className='blog-card'>
            <div className='card-image'>
                <img src='images/blog-1.jpg' className='img-fluid w-100' alt='blog'/>
            </div>
            <div className='blog-content'>
                <p className='date'>10 Dec,2025 </p>
                <h5 className='title'>beautiful sunday morning renaissance</h5>
                <p className='desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                <Link  to="/blog/:id" className="button">Read More</Link>
            </div>
        </div>
    )
}


export default BlogCard

