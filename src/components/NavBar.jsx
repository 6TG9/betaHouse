import React, { useContext, useState, useRef, useEffect } from "react";
import navImg from "../../public/Group 9282.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const NavBar = () => {
  const { user, logout } = useContext(AuthContext);

  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  return (
    <div className="nav flex items-center py-[29px] px-[48.9px] backdrop-blur gap-[106px] relative">
      <img src={navImg} alt="" />

      <div className="flex gap-[33.05px] font-medium text-[#F5F5F5]">
        <Link to="/" className="text-xl">
          Home
        </Link>
        <Link to="/properties" className="text-xl">
          Properties
        </Link>
        <Link to="/about" className="text-xl">
          About Us
        </Link>
        <Link to="/blog" className="text-xl">
          Blog
        </Link>
        <Link to="/contact" className="text-lg">
          Contact Us
        </Link>
      </div>

      {/* Logged OUT */}
      {!user ? (
        <div className="flex gap-8">
          <Link
            to="/signup"
            className="border-2 p-2.5 rounded-lg border-[#F5F5F5] w-[140px] text-center text-[#F5F5F5]"
          >
            Sign Up
          </Link>
          <Link
            to="/signin"
            className="border-2 p-2.5 rounded-lg border-[#3D9970] bg-[#3D9970] w-[140px] text-center text-[#F5F5F5]"
          >
            Login
          </Link>
        </div>
      ) : (
        // Logged IN
        <div ref={dropdownRef} className="relative">
          {/* Clickable Avatar + Name */}
          <div
            className="flex items-center gap-3 cursor-pointer text-white"
            onClick={() => setOpen(!open)}
          >
            <img
              src={user.avatar || "https://via.placeholder.com/40"}
              className="w-10 h-10 rounded-full border border-gray-300"
              alt="avatar"
            />
            <span>{user.name}</span>
          </div>

          {/* Dropdown Menu */}
          {open && (
            <div className="absolute right-0 mt-3 w-40 bg-[#1B1B1B] text-white rounded-lg shadow-xl py-2 z-50">
              <button
                onClick={() => {
                  setOpen(false);
                  logout();
                }}
                className="w-full text-left px-4 py-2 hover:bg-[#333] transition"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default NavBar;
