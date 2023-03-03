import React from 'react'
import rasm from '../../Images/rasm.svg'
import rasm1 from '../../Images/rasm1.png'
import rasm2 from '../../Images/rasm2.png'
import rasm3 from '../../Images/rasm3.svg'
import rasm4 from '../../Images/rasm4.svg'
import rasm5 from '../../Images/rasm5.png'
const Section4 = () => {
  return (
    <div>
        <div className='container mx-auto p-8'>
        <h5 className='text-orange-500 text-3xl text-center'>Our Work</h5>
        <h1 className="md:text-4xl text-2xl pb-6 text-center  ">
        See Our Recent Case Studies
        </h1>

        <div className='grid md:grid-cols-3 text-center container mx-auto px-12 grid-cols-1   gap-4 '>
        <img src={rasm}/>
        <img src={rasm1}/>
        <img src={rasm2}/>
        <img src={rasm3}/>
        <img src={rasm4}/>
        <img src={rasm5}/>
        </div>




        </div>
    </div>
  )
}

export default Section4