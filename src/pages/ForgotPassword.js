import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import { Link } from 'react-router-dom'

function ForgotPassword() {
  return (
   <>
    <Meta title={"Forgot Password"}/>
    <BreadCrumb title="Forgot Password" />

    <div className='login-warapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className="auth-card">
                <h3 className='text-center'>Reset Your Password</h3>
                <p className='text-center my-2 mb-3'>We will send you an email to reset your paswword</p>
                <form action='' className='d-flex flex-column gap-15'>
                  
                   <div> 
                    <input type='password' name='password' className='form-control' placeholder='Password'/>
                  </div>
                  <div>
                    <div className='d-flex justify-content-center flex-column align-items-center gap-15'>
                      <button className='button border-0'type='submit'> Submit</button>
                      <Link to="/login">Cancel</Link>

                    </div>
                  </div>
                </form>
              </div>

            </div>
         </div>
         </div>
      </div>
   </>
  )
}

export default ForgotPassword
