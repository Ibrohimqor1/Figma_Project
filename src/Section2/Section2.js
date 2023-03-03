import React from 'react'

import Marketing from './../Images/Marketing.svg'
import Marketing1 from './../Images/M1.svg'
import Marketing2 from './../Images/m2.svg'
import Marketing3 from './../Images/M4.svg'
const Section2 = () => {
  return (
    <div>
        <div className="container   mx-auto px-8 text-center sm:text-left md:flex justify-evenly block ">
      <div className="Haeder1part block md:container container mx-auto    ">
        <h5 className='text-orange-500 text-3xl'>What we do</h5>
        <h1 className="md:text-4xl text-2xl pb-6  ">
        We Are Here To Help You <br/> Build Your Business
        </h1>
        <p>
        Sed ut perspiciatis unde omnis iste natus error sit of the voluptatem <br/> accusantium lorem sit doloremque, totam rem aperiam, eaque ipsa <br/> quae ab illo invento veritatis quasi architecto beatae vitae dicta.
        </p>

        <button className="w-40 h-12 rounded-full bg-orange-600 text-white mt-8">
        Explore all service
        </button>
       
      </div>
      <div className="Header2Part grid md:grid-cols-2 text-center container mx-auto px-12 grid-cols-1   gap-4  ">
        <img src={Marketing}></img>
        <img src={Marketing1}></img>
        <img src={Marketing2}></img>
        <img src={Marketing3}></img>
      </div>
    </div>
    </div>
  )
}

export default Section2