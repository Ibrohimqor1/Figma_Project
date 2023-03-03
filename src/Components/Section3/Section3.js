import React from 'react'
import about from '../../Images/about.png'
const Section2 = () => {
  return (
    <div>
          <div className="container  mx-auto px-8 text-center sm:text-left md:flex justify-evenly block ">
      <div className="Haeder1part block md:container container mx-auto my-24    ">
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
      <div className="Header2Part    container mx-auto     ">
      <img className='' src={about}></img>
      </div>
    </div>
    </div>
  )
}

export default Section2