import React from 'react'
import Logo from '../../Images/Logo.svg'
const Navbar = () => {
  return (
    <div>
        <nav>
          <div className='container justify-between p-4 flex mx-auto px-8'>
            <div className='flex container1'>
                <img w-full  src={Logo}/>
               
            </div>
            <div className='flex  container-2'>
                <ul className=' md:flex hidden   p-4'>
                    <li className='px-4'>Features</li>
                    <li className='px-4'>Pricing Plans</li>
                    <li className='px4'>Support</li>
                    <li className='px-4'> About us</li>
                </ul>
            </div>
            {/* ;;;;;;;;;;;; */}
            {/* ............. */}
            <div className='container-4'>
                <button className='w-32 h-12 rounded-full text-white bg-orange-400 md:text-xs text-base'>Contact Us</button>
            </div>
             </div>
        </nav>
    </div>
  )
}

export default Navbar