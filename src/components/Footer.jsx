import React from "react";
import navImgTwo from "../../public/Group 9282foot.png";
import { FaLocationDot } from "react-icons/fa6";
import { MdLocalPhone } from "react-icons/md";
import { FaEnvelope } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="foot text-[#ffffff] flex flex-col bg-[#035A33]">
      <div className="flex pl-[60px] pt-[66px] pb-10 gap-[148px]">
        <div className="flex flex-col font-normal text-base">
          <div>
            <img src={navImgTwo} alt="" />
          </div>
          <p className="leading-relaxed w-[373px] py-2 text-[#ffffffc4]">
            Discover, rent, and find your ideal home hassle-free with BetaHouse.
            Take control of your rental journey today!
          </p>
          <div className=" flex items-center gap-[15px] text-[#ffffffc4]">
            <FaLocationDot />
            <p>95 Tinubu Estate, Lekki, Lagos</p>
          </div>
          <div className=" flex items-center gap-[15px] text-[#ffffffc4]">
            <MdLocalPhone />
            <p>+234 675 8935 675</p>
          </div>
          <div className=" flex items-center gap-[15px] text-[#ffffffc4]">
            <FaEnvelope />
            <p>support@rentbetahouse.com</p>
          </div>
        </div>
        <div className="flex flex-col w-[118px] gap-4">
          <h5 className="font-semibold text-[20px]">Quick Links</h5>
          <a href="" className="font-normal text-base text-[#ffffffc4]">
            Home
          </a>
          <a href="" className="font-normal text-base text-[#ffffffc4]">
            Properties
          </a>
          <a href="" className="font-normal text-base text-[#ffffffc4]">
            About
          </a>
          <a href="" className="font-normal text-base text-[#ffffffc4]">
            Contact us
          </a>
          <a href="" className="font-normal text-base text-[#ffffffc4]">
            Blog
          </a>
        </div>
        <div className="flex flex-col gap-4">
          <h5 className="text-[21px] font-semibold">More</h5>
          <a href="" className="font-normal text-base text-[#ffffffc4]">
            Agents
          </a>
          <a
            href=""
            className="font-normal text-base text-[#ffffffc4] w-[147px]"
          >
            Affordable Houses
          </a>
          <a href="" className="font-normal text-base text-[#ffffffc4]">
            FAQ’s
          </a>
        </div>
        <div className="flex flex-col gap-4">
          <h5 className=" w-[159px] text-[21px] font-semibold">
            Popular Search
          </h5>
          <a
            href=""
            className="font-normal text-base text-[#ffffffc4] w-[147px]"
          >
            Apartment for sale
          </a>
          <a
            href=""
            className="font-normal text-base text-[#ffffffc4] w-[147px]"
          >
            Apartment for rent
          </a>
          <a
            href=""
            className="font-normal text-base text-[#ffffffc4] w-[147px]"
          >
            3 bedroom flat
          </a>
          <a
            href=""
            className="font-normal text-base text-[#ffffffc4] w-[147px]"
          >
            Bungalow
          </a>
        </div>
      </div>
      <div className="border w-full border-[#6F6F6F]"></div>
      <div className="flex justify-between py-8 px-[142px]">
        <p>Copyright 2023 Betahouse | Designed by Michael.fig</p>
        <p>Privacy Policy</p>
      </div>
    </div>
  );
};

export default Footer;
