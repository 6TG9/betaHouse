import React, { useEffect, useState } from "react";
import bedd from "../../public/Icon.png";
import throom from "../../public/Icon (1).png";
import heartt from "../../public/Link (4).png";
import sharee from "../../public/Icon (2).png";
import swetch from "../../public/swetch.png";
import filterImg from "../../public/filter.png";
import laft from "../../public/uis_angle-left.png";
import raght from "../../public/uis_angle-left (1).png";

const BACKEND_URL = "https://beta-ohxc.onrender.com";

const formatPrice = (price, period) => {
  if (!price) return "Price not available";
  const formatted = Number(price).toLocaleString();
  return period ? `₦ ${formatted} / ${period}` : `₦ ${formatted}`;
};

const getImageURL = (url) => {
  if (!url) return "/placeholder.jpg";
  return url.startsWith("http") ? url : `${BACKEND_URL}/uploads/${url}`;
}; // Cloudinary URLs are already full paths

const PropertyCard = ({ image, title, location, beds, baths, price }) => (
  <div className="rounded-2xl overflow-hidden border border-[#DDD8D8] flex flex-col">
    <div className="relative w-full h-60 sm:h-52 md:h-60">
      <img
        src={getImageURL(image)}
        alt={title}
        className="w-full h-full object-cover bg-gray-200"
      />
    </div>
    <div className="p-4 flex flex-col justify-between flex-1">
      <h3 className="font-semibold text-lg text-gray-900">{title}</h3>
      <div className="flex items-center text-sm text-gray-600 gap-1 mt-1">
        <svg width="16" height="16" fill="currentColor">
          <path d="M8 0a5 5 0 0 0-5 5c0 4 5 11 5 11s5-7 5-11a5 5 0 0 0-5-5zm0 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
        </svg>
        {location || "Location not specified"}
      </div>
      <div className="flex items-center gap-4 text-gray-700 text-sm mt-2 flex-wrap">
        <span className="flex items-center gap-1">
          <img src={bedd} alt="" />
          {beds ?? 0} Beds
        </span>
        <span className="flex items-center gap-1">
          <img src={throom} alt="" />
          {baths ?? 0} Baths
        </span>
      </div>
      <div className="flex justify-between items-center pt-3 border-t border-t-[#DDD8D8] mt-4 flex-wrap gap-2">
        <p className="font-semibold text-gray-900">{price}</p>
        <div className="flex items-center gap-3 text-gray-600">
          <img src={swetch} alt="" className="w-5 h-5" />
          <img src={sharee} alt="" className="w-5 h-5" />
          <img src={heartt} alt="" className="w-5 h-5" />
        </div>
      </div>
    </div>
  </div>
);

export const ResultHeader = ({ total }) => (
  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full px-4 sm:px-6 lg:px-0 max-w-7xl mx-auto gap-4 sm:gap-0">
    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
      <button className="flex items-center gap-2 text-gray-800 font-medium">
        <img src={filterImg} alt="filter" />
        More Filter
      </button>
      <p className="text-gray-800 text-sm">
        Showing <span className="font-semibold">1–{total}</span> of{" "}
        <span className="font-semibold">{total}</span> results
      </p>
    </div>
    <div className="flex items-center gap-1 text-sm">
      <span className="text-gray-600">Sort by:</span>
      <select className="bg-transparent cursor-pointer font-semibold text-gray-900 outline-none">
        <option>Default</option>
      </select>
    </div>
  </div>
);

export const PropertyGrid = ({ filters, resetFilters }) => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${BACKEND_URL}/api/properties`)
      .then((res) => res.json())
      .then((data) => {
        setProperties(Array.isArray(data.results) ? data.results : []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const locationFilter =
    typeof filters?.location === "string" ? filters.location.toLowerCase() : "";
  const typeFilter =
    typeof filters?.propertyType === "string"
      ? filters.propertyType.toLowerCase()
      : "";
  const bedroomFilter =
    typeof filters?.bedrooms === "number" ? filters.bedrooms : null;

  const filteredProperties = properties.filter((p) => {
    const matchesLocation =
      !locationFilter || p.location?.toLowerCase().includes(locationFilter);
    const matchesBedrooms = !bedroomFilter || p.beds >= bedroomFilter;
    const matchesType =
      !typeFilter || p.title?.toLowerCase().includes(typeFilter);
    return matchesLocation && matchesBedrooms && matchesType;
  });

  if (loading)
    return (
      <div className="text-center py-20 text-xl font-semibold text-gray-600">
        Loading properties...
      </div>
    );

  return (
    <>
      <ResultHeader total={filteredProperties.length} />

      {filteredProperties.length === 0 ? (
        <div className="w-full flex flex-col items-center justify-center py-20 text-center px-4">
          <div className="text-3xl font-bold text-gray-700 mb-4">
            No Results Found
          </div>
          <p className="text-gray-500 mb-6">
            Try adjusting your filters or search keywords.
          </p>
          <button
            onClick={resetFilters}
            className="px-4 py-2 bg-[#3E8C6A] text-white rounded-lg shadow hover:bg-[#2f6c52] transition"
          >
            Reload Properties
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 sm:p-6 lg:p-6 max-w-7xl mx-auto">
          {filteredProperties.map((p) => (
            <PropertyCard
              key={p._id}
              image={getImageURL(p.images?.[0])}
              title={p.title}
              location={p.location}
              beds={p.beds}
              baths={p.baths}
              price={formatPrice(p.price, p.period)}
            />
          ))}
        </div>
      )}

      {/* PAGINATION */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 py-6 px-4 sm:px-0">
        <button className="text-gray-500 hover:text-gray-700">
          <img src={laft} alt="prev" className="w-5 h-5" />
        </button>
        <div className="flex items-center gap-2 sm:gap-4 text-gray-700 font-medium flex-wrap justify-center">
          <span className="bg-[#3E8C6A] text-white px-3 py-1 rounded-md">
            1
          </span>
          <button className="hover:text-black">2</button>
          <button className="hover:text-black">3</button>
          <button className="hover:text-black">4</button>
        </div>
        <button className="text-gray-500 hover:text-gray-700">
          <img src={raght} alt="next" className="w-5 h-5" />
        </button>
      </div>
    </>
  );
};
