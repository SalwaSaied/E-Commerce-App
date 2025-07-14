import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'

function PrivacyPolicy() {
  return (
    <>
   <Meta title={"Privacy Ploicy"}/>
    <BreadCrumb title="Privacy Ploicy" />
    <div className='policy-wrapper py-5 home-wrapper-2'>
    <div className='continaer-xxl'>
      <div className='row'>
        <div className='col-12'>
          <div className='policy'></div>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default PrivacyPolicy