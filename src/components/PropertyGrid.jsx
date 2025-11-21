import React from "react";
import bedd from "../../public/Icon.png";
import throom from "../../public/Icon (1).png";
import heartt from "../../public/Link (4).png";
import sharee from "../../public/Icon (2).png";
import swetch from "../../public/swetch.png";
import filterImg from "../../public/filter.png";
import laft from "../../public/uis_angle-left.png";
import raght from "../../public/uis_angle-left (1).png";
import wan from "../../public/div.project-inner.png"
import tan from "../../public/div.project-inner (1).png";
import tran from "../../public/div.project-inner (2).png";
import fan from "../../public/div.project-inner (3).png";
import fin from "../../public/div.project-inner (4).png";
import san from "../../public/div.project-inner (5).png";
import sen from "../../public/div.project-inner (6).png";
import eenn from "../../public/div.project-inner (7).png";
import nin from "../../public/div.project-inner (8).png";

// ====== STATIC PROPERTIES LIST ======
const properties = [
  {
    image: wan,
    title: "Real House Luxury Villa",
    location: "Victoria Island, Lagos",
    beds: 6,
    baths: 3,
    price: "₦ 3,340,000,000",
  },
  {
    image: tan,
    title: "Exquisite Haven Villa",
    location: "Festac, Lagos",
    beds: 5,
    baths: 3,
    price: "₦ 4,000,000/1 Year",
  },
  {
    image: tran,
    title: "Luxe Palatial Villa",
    location: "Gbagada, Lagos",
    beds: 7,
    baths: 3,
    price: "₦ 5,350,000,000",
  },
  {
    image: fan,
    title: "Harmony Luxury Villa",
    location: "Mushin Lagos",
    beds: 4,
    baths: 3,
    price: "₦ 4,000,000/1 Year",
  },
  {
    image: fin,
    title: "Real House Luxury Villa",
    location: "Victoria Island, Lagos",
    beds: 6,
    baths: 4,
    price: "₦ 350,000,000",
  },
  {
    image: san,
    title: "Real House Luxury Villa",
    location: "Lekki-Ajah, Lagos",
    beds: 5,
    baths: 3,
    price: "₦ 4,200,000/1 Year",
  },
  {
    image: sen,
    title: "Infinite Bliss Villa",
    location: "Ishiagu, Enugu",
    beds: 5,
    baths: 3,
    price: "₦ 2,350,000,000",
  },
  {
    image: eenn,
    title: "Real Houae Luxury Villa",
    location: "Works Layout, Owerri",
    beds: 8,
    baths: 6,
    price: "₦ 3,350,000/1 Year",
  },
  {
    image: nin,
    title: "Real House Villa",
    location: "Ikeja, Lagos",
    beds: 6,
    baths: 6,
    price: "₦ 600,000,000",
  },
];

// ====== CARD COMPONENT ======
const PropertyCard = ({ image, title, location, beds, baths, price }) => (
  <div className="rounded-2xl overflow-hidden border border-[#DDD8D8]">
    <div className="relative ">
      <img src={image} alt={title} className="w-full h-full bg-cover" />
    </div>

    <div className="p-4 space-y-2">
      <h3 className="font-semibold text-lg text-gray-900">{title}</h3>

      <div className="flex items-center text-sm text-gray-600 gap-1">
        <svg width="16" height="16" fill="currentColor">
          <path d="M8 0a5 5 0 0 0-5 5c0 4 5 11 5 11s5-7 5-11a5 5 0 0 0-5-5zm0 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
        </svg>
        {location}
      </div>

      <div className="flex items-center gap-6 text-gray-700 text-sm mt-2">
        <span className="flex items-center gap-1">
          <img src={bedd} alt="" />
          {beds} Bedrooms
        </span>

        <span className="flex items-center gap-1">
          <img src={throom} alt="" />
          {baths} Bathrooms
        </span>
      </div>

      <div className="flex justify-between items-center pt-3 border-t border-t-[#DDD8D8] my-6">
        <p className="font-semibold text-gray-900">{price}</p>

        <div className="flex items-center gap-3 text-gray-600">
          <img src={swetch} alt="" />
          <img src={sharee} alt="" />
          <img src={heartt} alt="" />
        </div>
      </div>
    </div>
  </div>
);

// ====== RESULT HEADER EXPORT ======
export const ResultHeader = () => {
  return (
    <div className="flex items-center justify-between w-full px-6 max-w-7xl mx-auto">
      <div className="flex items-center gap-6">
        <button className="flex items-center gap-2 text-gray-800 font-medium">
          <img src={filterImg} alt="filter" />
          More Filter
        </button>

        <p className="text-gray-800">
          Showing <span className="font-semibold">1–10</span> of{" "}
          <span className="font-semibold">15</span> results
        </p>
      </div>

      <div className="flex items-center gap-1">
        <span className="text-gray-600">Sort by:</span>
        <select className="bg-transparent cursor-pointer font-semibold text-gray-900 outline-none">
          <option>Default</option>
        </select>
      </div>
    </div>
  );
};

// ====== MAIN GRID EXPORT ======
// Main Property Grid Component (No Dependencies)
export const PropertyGrid = ({ filters, resetFilters }) => {
  // Safely normalize filter inputs
  const locationFilter =
    typeof filters?.location === "string" ? filters.location.toLowerCase() : "";

  const typeFilter =
    typeof filters?.propertyType === "string"
      ? filters.propertyType.toLowerCase()
      : "";

  const bedroomFilter =
    typeof filters?.bedrooms === "number" ? filters.bedrooms : null;

  // Real-time filtering
  const filteredProperties = properties.filter((p) => {
    const matchesLocation =
      !locationFilter || p.location.toLowerCase().includes(locationFilter);

    const matchesBedrooms = !bedroomFilter || p.beds >= bedroomFilter;

    const matchesType =
      !typeFilter || p.title.toLowerCase().includes(typeFilter);

    return matchesLocation && matchesBedrooms && matchesType;
  });

  return (
    <>
      <ResultHeader />

      {/* NO RESULT UI */}
      {filteredProperties.length === 0 ? (
        <div className="w-full flex flex-col items-center justify-center py-20 text-center">
          <div className="text-3xl font-bold text-gray-700 mb-4">
            No Results Found
          </div>
          <p className="text-gray-500 mb-6">
            Try adjusting your filters or search keywords.
          </p>

          {/* 🔥 RELOAD BUTTON */}
          <button
            onClick={resetFilters}
            className="px-4 py-2 bg-[#3E8C6A] text-white rounded-lg shadow hover:bg-[#2f6c52] transition"
          >
            Reload Properties
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 max-w-7xl mx-auto">
          {filteredProperties.map((p, index) => (
            <PropertyCard key={index} {...p} />
          ))}
        </div>
      )}

      {/* PAGINATION */}
      <div className="flex items-center justify-center gap-4 py-6">
        <button className="text-gray-500 hover:text-gray-700">
          <img src={laft} alt="" />
        </button>

        <div className="flex items-center gap-4 text-gray-700 font-medium">
          <span className="bg-[#3E8C6A] text-white px-3 py-1 rounded-md">
            1
          </span>

          <button className="hover:text-black">2</button>
          <button className="hover:text-black">3</button>
          <button className="hover:text-black">4</button>
        </div>

        <button className="text-gray-500 hover:text-gray-700">
          <img src={raght} alt="" />
        </button>
      </div>
    </>
  );
};

