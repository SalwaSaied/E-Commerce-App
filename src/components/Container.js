import React from 'react'

const Container = (props) => {
  return (
    
    <section className={props.class1}>
        <div className='container-xxl'> 
            {props.childern}
        </div>
      
    </section>
  )
}

export default Container