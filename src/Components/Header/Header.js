import React from "react";
import GirlsPhoto from "../../Images/girl.svg";
const Header = () => {
  return (
    <div className="container  mx-auto px-8 text-center sm:text-left md:flex justify-evenly block ">
      <div className="Haeder1part block md:container container mx-auto    ">
        <h1 className="md:text-7xl text-4xl py-12">
          Best <span className="text-orange-700  ">Marketing </span> <br />{" "}
          Digital Agency
        </h1>
        <p>
          Various versions have evolved over the years, <br /> sometimes by
          accident, sometimes on purpose
        </p>

        <button className="w-32 h-12 rounded-full m-6 bg-orange-600 text-white mt-8">
          Get Started
        </button>
        <button className="w-32 h-12 shadow-md rounded-full ml-3">
          Watch Video
        </button>
      </div>
      <div className="Header2Part">
        <img src={GirlsPhoto}></img>
      </div>
    </div>
  );
};

export default Header;
