import React, { useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { PropertyGrid } from "../components/PropertyGrid";

import oneL from "../../public/Link.png";
import twoL from "../../public/Link (1).png";
import threeL from "../../public/Link (2).png";
import fourL from "../../public/Link (3).png";

import { FaLocationDot } from "react-icons/fa6";

import arrle from "../../public/frame c.png";
import arrri from "../../public/frame c (1).png";

const Dashboard = () => {
  //  ============ FILTER STATES ============
  const [locationInput, setLocationInput] = useState("");
  const [propertyTypeInput, setPropertyTypeInput] = useState("");
  const [bedrooms, setBedrooms] = useState(0);

  const [filters, setFilters] = useState(null);

  // bedroom counter
  const incre = () => setBedrooms(bedrooms + 1);
  const reduc = () => bedrooms > 0 && setBedrooms(bedrooms - 1);

  // APPLY FILTERS → sent to PropertyGrid
  const applyFilters = () => {
    setFilters({
      location: locationInput,
      propertyType: propertyTypeInput,
      bedrooms,
    });
  };

  return (
    <div className="homebg min-h-screen">
      <NavBar />

      {/* HERO */}
      <div className="hero flex flex-col py-26 gap-[52px]">
        <div className="flex flex-col text-center gap-8 mx-auto">
          <h1 className="text-6xl font-bold text-[#ffffff]">
            Browse Our Properties
          </h1>
          <p className="text-2xl font-normal text-[#ffffff] leading-relaxed px-80">
            Find your perfect home among our curated properties. Start browsing
            now!
          </p>
        </div>

        {/* FILTER BAR */}
        <div className="w-[1238px] mx-auto mt-6 bg-white/20 p-6">
          <div className="mx-auto bg-white rounded-2xl shadow-sm flex items-center gap-8">
            {/* LOCATION */}
            <div className="flex flex-col p-4 flex-1">
              <label className="text-xs font-semibold tracking-wide text-gray-700">
                LOCATION
              </label>
              <input
                type="text"
                placeholder="eg. Gbagada"
                className="mt-1 text-sm text-gray-500 outline-none"
                value={locationInput}
                onChange={(e) => setLocationInput(e.target.value)}
              />
            </div>

            <div className="w-1 h-10 bg-gray-300"></div>

            {/* PROPERTY TYPE */}
            <div className="flex flex-col p-4 flex-1">
              <label className="text-xs font-semibold tracking-wide text-gray-700">
                PROPERTY TYPE
              </label>
              <input
                type="text"
                placeholder="eg. Duplex, Bedroom Flat"
                className="mt-1 text-sm text-gray-500 outline-none"
                value={propertyTypeInput}
                onChange={(e) => setPropertyTypeInput(e.target.value)}
              />
            </div>

            <div className="w-1 h-10 bg-gray-300"></div>

            {/* BEDROOMS */}
            <div className="flex flex-col items-center flex-1">
              <label className="text-xs font-semibold tracking-wide text-gray-700">
                BEDROOM
              </label>
              <div className="flex items-center gap-4 mt-1">
                <button
                  onClick={reduc}
                  className="w-7 h-7 border border-gray-400 rounded-full flex items-center justify-center text-lg"
                >
                  -
                </button>

                <span className="text-gray-800">{bedrooms}</span>

                <button
                  onClick={incre}
                  className="w-7 h-7 border border-gray-400 rounded-full flex items-center justify-center text-lg"
                >
                  +
                </button>
              </div>
            </div>

            {/* APPLY FILTER BUTTON */}
            <button
              onClick={applyFilters}
              className="items-center bg-[#3D9970] w-[250px] p-6 rounded-r-2xl text-white h-full"
            >
              Find Property
            </button>
          </div>
        </div>
      </div>

      {/* PROPERTY GRID */}
      <div className="pgri mt-16 mb-20 max-w-7xl px-10 mx-auto">
        <PropertyGrid
          filters={filters}
          resetFilters={() =>
            setFilters({ location: "", propertyType: "", bedrooms: null })
          }
        />
      </div>

      {/* DISCOVER PROPERTIES SECTION */}
      <section className="properties flex flex-col mx-auto items-center mb-20">
        <h2 className="font-semibold text-5xl">
          Discover Our Popular Properties
        </h2>

        <div className="mt-12 flex relative">
          <img
            src={arrle}
            alt=""
            className="w-[54px] h-[54px] absolute left-[-30px] z-10 bottom-45"
          />

          <div className="flex gap-6">
            <div className="relative">
              <img src={twoL} alt="" />
              <div className="absolute bottom-4 text-white left-4">
                <h3>Semi Detached Duplex</h3>
                <p>₦1,430,000,000</p>
                <p>6 Bed | 3 Bath | 720 sq ft</p>
                <div className="flex items-center gap-2">
                  <FaLocationDot />
                  <p>Victoria Island, Lagos</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <img src={oneL} alt="" />
              <div className="absolute bottom-4 text-white left-4">
                <h3>Special Duplex</h3>
                <p>₦670,000,000</p>
                <p>6 Bed | 3 Bath | 720 sq ft</p>
                <div className="flex items-center gap-2">
                  <FaLocationDot />
                  <p>Victoria Island, Lagos</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <img src={threeL} alt="" />
              <div className="absolute bottom-4 text-white left-4">
                <h3>Split-Level House</h3>
                <p>₦340,000,000</p>
                <p>6 Bed | 3 Bath | 720 sq ft</p>
                <div className="flex items-center gap-2">
                  <FaLocationDot />
                  <p>Victoria Island, Lagos</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <img src={fourL} alt="" />
              <div className="absolute bottom-4 text-white left-4">
                <h3>Twin Duplex</h3>
                <p>₦290,000,000</p>
                <p>6 Bed | 3 Bath | 720 sq ft</p>
                <div className="flex items-center gap-2">
                  <FaLocationDot />
                  <p>Victoria Island, Lagos</p>
                </div>
              </div>
            </div>
          </div>

          <img
            src={arrri}
            alt=""
            className="w-[54px] h-[54px] absolute right-[-30px] bottom-45"
          />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Dashboard;
