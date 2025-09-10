import React from "react";
import pic1 from "../assets/Frame 1.png";
import pic2 from "../assets/Frame 2.png";
import pic3 from "../assets/Frame 3.png";
import pic4 from "../assets/Frame 4.png";
import { Link } from "react-router-dom";


const Options = () => {
  return (
    <div className="flex my-20 w-[80%] mr-auto justify-between z-0 max-md:w-[100%]   ">
    
     <div className="w-full flex gap-16 -mt-6 ">

        <div className="relative">

        <Link
        to="/strawberry"
        className=" h-[10vh] py-16 relative  z-10 flex overflow-hidden items-baseline justify-end  w-[100px]  scale-120 max-md:scale-110  "
        >
        <img
          src={pic1}
          alt="ice-cream2"
          className="h-[18vh] mt-12 scale-80 absolute -top-[1.2rem] z-40 transition-transform duration-500 ease-in-out rotate-[-15deg] hover:scale-110 hover:rotate-[15deg]"
        />

      </Link>

      <span className=" w-[62%] max-xl:w-[53%] max-sm:w-[55%] h-[30%] rounded-lg border absolute border-t-0  -bottom-1.5 left-[28px] max-xl:left-[35px] max-md:left-[24px] scale-[140%]"></span>

        </div>
     
        <div className="relative">

        <Link
        to="/blueberry"
        className=" h-[10vh] py-16 relative  z-10 flex overflow-hidden items-baseline justify-end  w-[100px]  scale-120 max-md:scale-110  "
           >
        <img
          src={pic2}
          alt="ice-cream2"
          className="h-[18vh]  mt-12 scale-80 absolute -top-[1.2rem] z-40 transition-transform duration-500 ease-in-out rotate-[-15deg] hover:scale-110 hover:rotate-[15deg]"
        />

      </Link>

      <span className="w-[62%] max-xl:w-[53%]  max-sm:w-[55%] h-[30%] rounded-lg border absolute border-t-0  -bottom-1.5 left-[28px] max-xl:left-[35px] max-md:left-[24px] scale-[140%]"></span>

        </div>

        <div className="relative">

        <Link
        to="/chocolate"
        className=" h-[10vh] py-16 relative  z-10 flex overflow-hidden items-baseline justify-end  w-[100px]  scale-120 max-md:scale-110  "
           >
        <img
          src={pic3}
          alt="ice-cream2"
          className="h-[18vh]  mt-12 scale-80 absolute -top-[1.2rem] z-40 transition-transform duration-500 ease-in-out rotate-[-15deg] hover:scale-110 hover:rotate-[15deg]"
        />
      </Link>
      <span className="w-[62%] max-xl:w-[53%]  max-sm:w-[55%] h-[30%] rounded-lg border absolute border-t-0  -bottom-1.5 left-[28px] max-xl:left-[35px] max-md:left-[24px] scale-[140%]"></span>
        </div>
        
        <div className="relative">

      <Link
        to="/evergreen"
        className=" h-[10vh] py-16 relative  z-10 flex overflow-hidden items-baseline justify-end  w-[100px]  scale-120 max-md:scale-110  "
        >
        <img
          src={pic4}
          alt="ice-cream2"
          className="h-[18vh]  mt-12 scale-80 absolute -top-[1.2rem] z-40 transition-transform duration-500 ease-in-out rotate-[-15deg] hover:scale-110 hover:rotate-[15deg]"
        />
      </Link>
      <span className="  w-[62%] max-xl:w-[53%]  max-sm:w-[55%] h-[30%] rounded-lg border absolute border-t-0  -bottom-1.5 left-[28px] max-xl:left-[35px] max-md:left-[24px] scale-[140%]"></span>
      </div>
     </div>


    </div>
  );
};

export default Options;
