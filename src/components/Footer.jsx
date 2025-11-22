import React from "react";
import navImgTwo from "../../public/Group 9282foot.png";
import { FaLocationDot } from "react-icons/fa6";
import { MdLocalPhone } from "react-icons/md";
import { FaEnvelope } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="foot text-white flex flex-col bg-[#035A33]">
      {/* Top section */}
      <div className="flex flex-col md:flex-row flex-wrap md:pl-16 pl-6 pt-12 pb-10 gap-8 md:gap-36">
        {/* Logo & Info */}
        <div className="flex flex-col font-normal text-base md:w-[373px] w-full">
          <div>
            <img
              src={navImgTwo}
              alt="BetaHouse Logo"
              className="w-[180px] md:w-auto"
            />
          </div>
          <p className="leading-relaxed py-2 text-[#ffffffc4]">
            Discover, rent, and find your ideal home hassle-free with BetaHouse.
            Take control of your rental journey today!
          </p>
          <div className="flex items-center gap-3 text-[#ffffffc4]">
            <FaLocationDot />
            <p>95 Tinubu Estate, Lekki, Lagos</p>
          </div>
          <div className="flex items-center gap-3 text-[#ffffffc4]">
            <MdLocalPhone />
            <p>+234 675 8935 675</p>
          </div>
          <div className="flex items-center gap-3 text-[#ffffffc4]">
            <FaEnvelope />
            <p>support@rentbetahouse.com</p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-4 md:w-[118px] w-full">
          <h5 className="font-semibold text-lg md:text-[20px]">Quick Links</h5>
          <a href="#" className="font-normal text-base text-[#ffffffc4]">
            Home
          </a>
          <a href="#" className="font-normal text-base text-[#ffffffc4]">
            Properties
          </a>
          <a href="#" className="font-normal text-base text-[#ffffffc4]">
            About
          </a>
          <a href="#" className="font-normal text-base text-[#ffffffc4]">
            Contact us
          </a>
          <a href="#" className="font-normal text-base text-[#ffffffc4]">
            Blog
          </a>
        </div>

        {/* More */}
        <div className="flex flex-col gap-4 md:w-auto w-full">
          <h5 className="text-lg md:text-[21px] font-semibold">More</h5>
          <a href="#" className="font-normal text-base text-[#ffffffc4]">
            Agents
          </a>
          <a href="#" className="font-normal text-base text-[#ffffffc4]">
            Affordable Houses
          </a>
          <a href="#" className="font-normal text-base text-[#ffffffc4]">
            FAQ’s
          </a>
        </div>

        {/* Popular Search */}
        <div className="flex flex-col gap-4 md:w-auto w-full">
          <h5 className="text-lg md:text-[21px] font-semibold">
            Popular Search
          </h5>
          <a href="#" className="font-normal text-base text-[#ffffffc4]">
            Apartment for sale
          </a>
          <a href="#" className="font-normal text-base text-[#ffffffc4]">
            Apartment for rent
          </a>
          <a href="#" className="font-normal text-base text-[#ffffffc4]">
            3 bedroom flat
          </a>
          <a href="#" className="font-normal text-base text-[#ffffffc4]">
            Bungalow
          </a>
        </div>
      </div>

      {/* Divider */}
      <div className="border w-full border-[#6F6F6F]"></div>

      {/* Bottom section */}
      <div className="flex flex-col md:flex-row justify-between py-8 px-6 md:px-36 text-sm">
        <p>Copyright 2023 Betahouse | Designed by Michael.fig</p>
        <p>Privacy Policy</p>
      </div>
    </div>
  );
};

export default Footer;
