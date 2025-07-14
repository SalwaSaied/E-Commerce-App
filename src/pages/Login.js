import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import { Link } from 'react-router-dom'

function Login() {
  return (
   <>
    <Meta title={"Login"}/>
    <BreadCrumb title="Login" />

    <div className='login-warapper py-5 home-wrapper-2'>
       <div className='container-xxl'>
       <div className='row'>
            <div className='col-12'>
              <div className="auth-card">
                <h3 className='text-center'>Login</h3>
                <form action='' className='d-flex flex-column gap-15'>
                  <div>
                    <input type='email' name='email' className='form-control' placeholder='Email'/>
                   </div>
                   <div> 
                    <input type='password' name='password' className='form-control' placeholder='Password'/>
                  </div>
                  <div>
                  <Link to="/forgot-password">Forgot Password?</Link>
                    <div className='d-flex justify-content-center align-items-center gap-15'>
                      <button className='button border-0' type='submit'> Login</button>
                      <Link className="button signup" to="/sign-up">SignUp</Link>
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

export default Login
