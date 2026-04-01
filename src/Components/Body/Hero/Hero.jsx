import React from "react";
import HeroImg from '../../../assets/banner.png'
import { IoPlayOutline } from "react-icons/io5";

const Hero = () => {
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content gap-15 flex-col lg:flex-row-reverse">
          <img src={HeroImg} className="max-w-sm rounded-lg shadow-2xl w-full" />
          
          <div>
            <h1 className="text-3xl md:text-7xl font-extrabold">Supercharge Your Digital Workflow</h1>
            <p className="py-6 text-xl">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>

            <div className="flex gap-4">
                <button className="btn rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white transition-all duration-200 ease-in-out hover:-translate-y-1">Explore Products</button>
                <button className="btn btn-outline rounded-full text-[#9514FA] transition-all duration-200 ease-in-out hover:-translate-y-1"><IoPlayOutline /> Watch Demo</button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
