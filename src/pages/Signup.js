import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'

function Signup() {
  return (
   <>
    <Meta title={"Sign Up"}/>
    <BreadCrumb title="Sign Up" />

    <div className='login-warapper py-5 home-wrapper-2'>
       <div className='container-xxl'>
       <div className='row'>
            <div className='col-12'>
              <div className="auth-card">
                <h3 className='text-center'>Sign Up</h3>
                <form action='' className='d-flex flex-column gap-15'>
                <div>
                    <input type='text' name='name' className='form-control' placeholder='Name'/>
                   </div>
                  <div>
                    <input type='email' name='email' className='form-control' placeholder='Email'/>
                   </div>
                   <div>
                    <input type='tel' name='mobile' className='form-control' placeholder='Mobile'/>
                   </div>
                   <div> 
                    <input type='password' name='password' className='form-control' placeholder='Password'/>
                  </div>
                  <div>
                    <div className='d-flex justify-content-center align-items-center gap-15'>
                      <button className='button border-0'> Sign Up</button>
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

export default Signup
