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
  const [locationInput, setLocationInput] = useState("");
  const [propertyTypeInput, setPropertyTypeInput] = useState("");
  const [bedrooms, setBedrooms] = useState(0);
  const [filters, setFilters] = useState(null);

  const incre = () => setBedrooms(bedrooms + 1);
  const reduc = () => bedrooms > 0 && setBedrooms(bedrooms - 1);

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
      <div className="hero flex flex-col py-24 gap-10 px-4 lg:px-0">
        <div className="flex flex-col text-center gap-6 mx-auto max-w-4xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Browse Our Properties
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white leading-relaxed px-0 sm:px-6 md:px-12 lg:px-40 mb-4">
            Find your perfect home among our curated properties. Start browsing
            now!
          </p>
        </div>

        {/* FILTER BAR */}
        <div className="w-full max-w-[1238px] mx-auto mt-6 bg-white/20 p-4 sm:p-6 rounded-2xl">
          <div className="bg-white rounded-2xl shadow-sm flex flex-col lg:flex-row items-center gap-4 lg:gap-8">
            {/* LOCATION */}
            <div className="flex flex-col p-4 flex-1 w-full">
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

            <div className="hidden lg:block w-px h-10 bg-gray-300"></div>

            {/* PROPERTY TYPE */}
            <div className="flex flex-col p-4 flex-1 w-full">
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

            <div className="hidden lg:block w-px h-10 bg-gray-300"></div>

            {/* BEDROOMS */}
            <div className="flex flex-col items-center flex-1 py-4 w-full">
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
              className="w-full lg:w-[250px] bg-[#3D9970] p-4 lg:p-6 rounded-b-2xl lg:rounded-r-2xl text-white font-semibold"
            >
              Find Property
            </button>
          </div>
        </div>
      </div>

      {/* PROPERTY GRID */}
      <div className="pgri mt-16 mb-20 max-w-7xl px-4 sm:px-10 mx-auto">
        <PropertyGrid
          filters={filters}
          resetFilters={() =>
            setFilters({ location: "", propertyType: "", bedrooms: null })
          }
        />
      </div>

      {/* DISCOVER PROPERTIES */}
      <section className="properties flex flex-col mx-auto items-center mb-20 px-4">
        <h2 className="font-semibold text-3xl sm:text-4xl md:text-5xl text-center">
          Discover Our Popular Properties
        </h2>

        <div className="mt-12 flex relative w-full overflow-x-auto scrollbar-hide px-4 py-4">
          <img
            src={arrle}
            alt=""
            className="hidden lg:block w-[54px] h-[54px] absolute -left-2.5 z-10 bottom-1/2"
          />

          <div className="flex gap-6">
            {[twoL, oneL, threeL, fourL].map((img, i) => (
              <div key={i} className="relative min-w-[260px]">
                <img src={img} alt="" className="rounded-xl w-full" />
                <div className="absolute bottom-4 text-white left-4 text-sm sm:text-base">
                  <h3 className="font-semibold">Luxury Duplex</h3>
                  <p>₦670,000,000</p>
                  <p>6 Bed | 3 Bath | 720 sq ft</p>
                  <div className="flex items-center gap-2">
                    <FaLocationDot />
                    <p>Victoria Island, Lagos</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <img
            src={arrri}
            alt=""
            className="hidden lg:block w-[54px] h-[54px] absolute right-10 bottom-1/2"
          />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Dashboard;
