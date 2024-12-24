import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'


function ResetPassword() {
  return (
    <>
     <Meta title={"Rest Password"}/>
     <BreadCrumb title="Reset Password" />

     
    <div className='login-warapper py-5 home-wrapper-2'>
       <div className='container-xxl'>
       <div className='row'>
            <div className='col-12'>
              <div className="auth-card">
                <h3 className='text-center'>Reset Password</h3>
                <form action='' className='d-flex flex-column gap-15'>
                <div> 
                    <input type='password' name='password' className='form-control' placeholder='Password'/>
                  </div>
                   <div> 
                    <input type='password' name='password' className='form-control' placeholder='Confirm Password'/>
                  </div>
                  <div>
                    <div className='d-flex justify-content-center align-items-center gap-15'>
                      <button className='button border-0'> Ok</button>
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

export default ResetPassword
