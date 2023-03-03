import React from 'react'
import Logo11 from '../../Images/Logo11.svg'
import Logo12 from '../../Images/Logo12.svg'
import Logo13 from '../../Images/Logo13.svg'
import Logo14 from '../../Images/Logo14.svg'
import Logo15 from '../../Images/Logo15.svg'
const Section = () => {
  return (
    <div>
        <div>
            <h1 className='text-center text-bold font-sans p-8'>OUR TRUSTED CLIENTS</h1>
            <div className='container flex justify-evenly flex-wrap mx-auto p-8'>
            <img src={Logo11} className='p-6'></img>
            <img src={Logo12}className='p-6'></img>
            <img src={Logo13}className='p-6'></img>
            <img src={Logo14}className='p-6'></img>
            <img src={Logo15}className='p-6'></img>




            </div>
          
        </div>

    </div>
  )
}

export default Section