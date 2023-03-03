import React from 'react'
import customer from '../../Images/Customer.png'
import customer1 from '../../Images/koplabrasm.svg'
const Section5 = () => {
  return (
    <div>
         <div className="container  mx-auto px-12 text-center sm:text-left md:flex justify-evenly block ">
      <div className="Haeder1part block md:container container mx-auto    ">
        <h5 className='text-orange-500 text-3xl pl-12 pb-6'>testimonial</h5>
        <h1 className="md:text-4xl text-2xl pl-12  ">
        What Our Customer Say <br/>
                 About Us
        </h1>
       <img src={customer}/>

       
       
      </div>
      <div className="Header2Part    container mx-auto">
      <img className='mb-20' src={customer1}></img>
      </div>
    </div>
    </div>
  )
}

export default Section5