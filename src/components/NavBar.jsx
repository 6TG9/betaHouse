import React, { useContext, useState, useRef, useEffect } from "react";
import navImg from "../../public/Group 9282.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const NavBar = () => {
  const { user, logout } = useContext(AuthContext);

  const [open, setOpen] = useState(false); // dropdown for avatar
  const [menuOpen, setMenuOpen] = useState(false); // mobile nav menu
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
    <div className="nav flex items-center justify-between py-5 px-6 lg:px-[48.9px] backdrop-blur relative">
      {/* LOGO */}
      <img src={navImg} alt="logo" className="w-32 lg:w-auto" />

      {/* MOBILE BURGER ICON */}
      <button
        className="lg:hidden text-white text-3xl"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      {/* DESKTOP LINKS */}
      <div className="hidden lg:flex gap-[33.05px] font-medium text-[#F5F5F5]">
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

      {/* DESKTOP AUTH */}
      {!user ? (
        <div className="hidden lg:flex gap-8">
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
        <div ref={dropdownRef} className="hidden lg:block relative">
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

      {/* MOBILE MENU (SLIDE DOWN) */}
      {menuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[#0F0F0F] text-white flex flex-col gap-6 p-6 mt-2 z-50 shadow-lg">
          <Link to="/" className="text-xl" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link
            to="/properties"
            className="text-xl"
            onClick={() => setMenuOpen(false)}
          >
            Properties
          </Link>
          <Link
            to="/about"
            className="text-xl"
            onClick={() => setMenuOpen(false)}
          >
            About Us
          </Link>
          <Link
            to="/blog"
            className="text-xl"
            onClick={() => setMenuOpen(false)}
          >
            Blog
          </Link>
          <Link
            to="/contact"
            className="text-xl"
            onClick={() => setMenuOpen(false)}
          >
            Contact Us
          </Link>

          {/* MOBILE AUTH */}
          {!user ? (
            <div className="flex flex-col gap-4 mt-3">
              <Link
                to="/signup"
                className="border-2 p-2 rounded-lg border-[#F5F5F5] text-center text-[#F5F5F5]"
                onClick={() => setMenuOpen(false)}
              >
                Sign Up
              </Link>
              <Link
                to="/signin"
                className="border-2 p-2 rounded-lg border-[#3D9970] bg-[#3D9970] text-center text-[#F5F5F5]"
                onClick={() => setMenuOpen(false)}
              >
                Login
              </Link>
            </div>
          ) : (
            <div className="mt-3">
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={user.avatar || "https://via.placeholder.com/40"}
                  className="w-10 h-10 rounded-full border"
                  alt="avatar"
                />
                <span>{user.name}</span>
              </div>
              <button
                onClick={() => {
                  logout();
                  setMenuOpen(false);
                }}
                className="w-full px-4 py-2 bg-red-600 rounded-lg"
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
