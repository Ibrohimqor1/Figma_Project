import React from "react";
import Man from "../../Images/man.svg";
const Section6 = () => {
  return (
    <div>
      <div className=" md:flex block justify-between  shadow-md border rounded-md container mx-auto h-80">
        <div>
          <img src={Man} className="-mt-20     " />
        </div>

        <div className="  text-center  ">
          <h1 className="md:text-4xl  text-2xl float-right mr-20 mt-32">
            See Our Recent Case Studies
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Section6;
