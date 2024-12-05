"use client";
import React from "react";

const Navigation = () => {
  return (
    <nav className="flex justify-between items-center pt-4 bg-white text-black">
      <div className="nav-color-wrapper w-full flex flex-col lg:flex-row justify-between items-center px-5 py-3 rounded-2xl relative">
        {/* Logo Section */}
        <div className="w-full lg:w-auto flex justify-between items-center">
          <div className="text-xl font-bold flex items-center">
            <div className="relative z-10 bg-white rounded-2xl p-3 w-12 h-11 flex flex-wrap justify-center items-center gap-0.5">
              <div className="w-2 h-2 rounded-full bg-[#0EB4EB]"></div>
              <div className="w-2 h-2 rounded-full bg-black"></div>
              <div className="w-2 h-2 rounded-full bg-black"></div>
              <div className="w-2 h-2 rounded-full bg-black"></div>
            </div>
            <span className="text-2xl font-medium">ChronoTask</span>
          </div>

          {/* Mobile Menu Button - Now just decorative */}
          <button className="lg:hidden p-2">
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Center Navigation Links */}
        <div className="hidden lg:flex flex-row space-x-8 items-center order-none">
          <span className="hover:text-blue-500 cursor-pointer text-center">
            Features
          </span>
          <span className="hover:text-blue-500 cursor-pointer text-center">
            Solutions
          </span>
          <span className="hover:text-blue-500 cursor-pointer text-center">
            Resources
          </span>
          <span className="hover:text-blue-500 cursor-pointer text-center">
            Pricing
          </span>
        </div>

        {/* Right Side Buttons */}
        <div className="hidden lg:flex flex-row space-x-4 items-center">
          <button className="bg-transparent text-blue-500 px-4 py-2 rounded-full hover:bg-blue-100 transition-colors">
            Sign In
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
            Get Demo
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
