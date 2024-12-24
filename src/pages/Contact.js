import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import { AiOutlineHome, AiOutlineMail } from 'react-icons/ai'
import { BiPhoneCall, BiInfoCircle } from 'react-icons/bi'

function Contact() {
  
  return (
    <>
     <Meta title={"Contact Us"}/>
     <BreadCrumb title="Contact Us" />
    <div className='cotact-warapper py-5 home-wrapper-2'>
     <div className="container-xxl">
     <div className='row'>
        <div className='col-12'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110500.37948221799!2d31.336842200000014!3d30.061611300000017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458198246c9ae5b%3A0xa609f443829b0055!2sAmazon%20Egypt%20Warehouse!5e0!3m2!1sen!2seg!4v1721253834451!5m2!1sen!2seg"
         width="600" 
         height="450" 
         className="border-0 w-100"
         allowFullScreen="" 
         loading="lazy" 
         referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className='col-12 mt-5'>
          <div className='contact-inner-waraper d-flex justify-content-between'>
            <div>
            <h3 className='contact-title mb-4'>Contact Us</h3>
              <form action='' className='d-flex flex-column gap-15'>
                <div>
                  <input type='text' className='form-control' placeholder='Name'/>
                </div>
                <div>
                  <input type='email' className='form-control' placeholder='Email'/>
                </div>
                <div>
                  <input type='number' className='form-control' placeholder='Mobile Number'/>
                </div>
                <div>
                  <textarea 
                  name='' 
                  id='' 
                  rows="4"
                  className='w-100 form-control'
                  placeholder='Comment'
                  ></textarea>
                </div>
                <div>
              <button className='button border-0'>Submit</button>
            </div>
              </form>
            </div>
            <div>
            <h3 className='contact-title mb-4'>Get in Touch With </h3>
            <div>
              <ul className='ps-0'>
                <li className='mb-3 d-flex gap-15 align-items-center'>
                  <AiOutlineHome className='fs-5 '/>
                  <address className='mb-0'> Hno:277, Near Village chopal, Mandoura, Snopat, 20ariana</address>
                </li>
                <li className='mb-3 d-flex gap-15 align-items-center'>
                  <BiPhoneCall className='fs-5 '/>
                  <a href='tel:+91 524879522'>+91 524879522</a>
                </li>
                <li className='mb-3 d-flex gap-15 align-items-center'>
                  <AiOutlineMail className='fs-5 '/>
                  <a href='mailto:navdeepj@gmail.com'>navdeepj@gmail.com</a>
                </li>
                <li className='mb-3 d-flex gap-15 align-items-center'>
                  <BiInfoCircle className='fs-5 '/>
                   <p className='mb-0 '>Monday - Friday 10 AM - 8 PM</p>
                </li>

              </ul>
            </div>
            </div>
          </div>
        </div>
      </div>
     </div>
    </div>
    </>
  )
}

export default Contact
