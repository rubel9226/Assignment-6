import React from "react";
import shop from '../../assets/shopping-cart.png'
import DigiTools from '../../assets/DigiTools.png'
import { IoMenu } from "react-icons/io5";

const Navbar = ({selectCard}) => {
  return (
    <div className="bg-base-100 shadow-sm">
      <div className="navbar container mx-auto">
        <div className="navbar-start">

          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost text-4xl lg:hidden">
              <IoMenu />
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Products</a>
              </li>
              <li>
                <a href="">Features</a>
              </li>
              <li>
                <a>Pricing</a>
              </li>
              <li>
                <a>Testimonials</a>
              </li>
              <li>
                <a>FAQ</a>
              </li>
            </ul>
          </div>

          <img src={DigiTools} alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-[16px] font-semibold">
            <li className="rounded-full transition-all duration-300 ease-in-out hover:-translate-y-1">
              <a>Products</a>
            </li>
            <li className="rounded-full transition-all duration-300 ease-in-out hover:-translate-y-1">
              <a href="">Features</a>
            </li>
            <li className="rounded-full transition-all duration-300 ease-in-out hover:-translate-y-1">
              <a>Pricing</a>
            </li>
            <li className="rounded-full transition-all duration-300 ease-in-out hover:-translate-y-1">
              <a>Testimonials</a>
            </li>
            <li className="rounded-full transition-all duration-300 ease-in-out hover:-translate-y-1">
              <a>FAQ</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end flex gap-3 text-[16px] font-semibold">
          
          <div className="flex relative">
            <img className="z-10" src={shop} alt="" />
            <span className={`absolute -top-4 -right-2 w-5 h-5 flex text-sm justify-center items-center rounded-full bg-red-500 text-white ${selectCard.length === 0 && 'hidden'}`}>{selectCard.length}</span>
          </div>

          <button className=" px-3 py-1 rounded-full transition-all duration-300 ease-in-out hover:-translate-y-1">Login</button>
          <button className="btn rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white transition-all duration-200 ease-in-out hover:-translate-y-1">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
