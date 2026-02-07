import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import "./Header.css";

const navItems = [
  { label: "HOME", to: "/" },
  { label: "SHOP", to: "/shop" },
  { label: "SERVICES", to: "/services" },
  { label: "CONTRACTING", to: "/contracting" },
  { label: "ABOUT US", to: "/about-us" },
  { label: "CONTACT", to: "/contact" },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      {/* ================= TOP BAR ================= */}
      <div className="flex items-center justify-between px-4 py-2 text-xs lg:text-sm lg:w-[75%] lg:mx-auto">
        {/* Left: Phone + Email */}
        <div className="flex flex-col leading-tight md:flex-row md:gap-6">
          <p>+91-7878658974</p>
          <p>hello@mgfurniture.com</p>
        </div>

        {/* Right: Social Icons */}
        <div className="flex gap-2">
          <a className="text-white bg-blue-500 p-1 rounded-full">
            <FaFacebookF size={13} />
          </a>
          <a className="text-white bg-pink-500 p-1 rounded-full">
            <FaInstagram size={13} />
          </a>
          <a className="text-white bg-green-500 p-1 rounded-full">
            <FaWhatsapp size={13} />
          </a>
        </div>
      </div>

      {/* Divider */}
      <div className="flex">
        <div className="w-1/2 border-t border-gray-300"></div>
        <div className="w-1/2 border-t border-gray-300"></div>
      </div>

      {/* ================= MOBILE HEADER ROW ================= */}
      <div className="lg:hidden flex items-center justify-between bg-gradient-to-t from-blue-100 from-86% to-transparent px-4 py-2 relative">
        {/* Hamburger */}
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>

        {/* Center Logo */}
        <NavLink to="/" className="absolute left-1/2 -translate-x-1/2">
          <img
            src="/Mg logo 3.svg"
            alt="MG Furniture"
            className="h-12 w-auto object-contain"
          />
        </NavLink>

        {/* Spacer */}
        <div className="w-[20px]"></div>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {menuOpen && (
        <div className="lg:hidden bg-white shadow-md">
          <div className="flex flex-col items-center gap-4 py-5">
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.to}
                onClick={() => setMenuOpen(false)}
                className="text-base font-medium"
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}

      {/* ================= DESKTOP NAV ================= */}
      <header className="hidden lg:block bg-gradient-to-t from-blue-100 from-86% to-transparent font-inter">
        <nav className="w-3/4 mx-auto flex items-center justify-between py-4">
          <div className="flex gap-12">
            {navItems.slice(0, 3).map((item) => (
              <NavLink
                key={item.label}
                to={item.to}
                className="text-lg font-medium hover:text-zinc-700"
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          <NavLink to="/">
            <img
              src="/Mg logo 3.svg"
              className="h-20 w-auto mb-1 object-contain"
              alt="MG Furniture"
            />
          </NavLink>

          <div className="flex gap-12">
            {navItems.slice(3).map((item) => (
              <NavLink
                key={item.label}
                to={item.to}
                className="text-lg font-medium"
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
const Footer = () => {
  return (
    <footer className="w-full bg-[#EAEAC9] font-inter">
      <div
        className="
          lg:w-3/4 mx-auto py-24
          flex flex-col gap-14
          lg:flex-row lg:gap-28
          px-4
        "
      >
        {/* BRAND */}
        <div>
          <div className="font-medium text-lg">
            <p>MG FURNITURE</p>
          </div>

          <div className="font-light py-5">
            <p>
              Crafting comfort and style, <br /> designed to fit your life.
            </p>
          </div>

          <div className="pl-0 lg:pl-5">
            <NavLink to="/">
              <img src="/MG logo2.svg" className="h-16 w-auto object-contain" />
            </NavLink>
          </div>

          <div className="flex mt-5 gap-4 lg:gap-3">
            <a className="text-white bg-blue-500 p-1 rounded-full">
              <FaFacebookF size={14} />
            </a>
            <a className="text-white bg-pink-500 p-1 rounded-full">
              <FaInstagram size={14} />
            </a>
            <a className="text-white bg-green-500 p-1 rounded-full">
              <FaWhatsapp size={14} />
            </a>
          </div>
        </div>

        {/* OFFICE */}
        <div>
          <div className="font-normal text-sm">
            <p>OFFICE</p>
          </div>

          <div className="font-light pt-5">
            <p>
              Amphitheatre Parkway,
              <br /> Mountain View, California,
              <br /> 94043, USA.
            </p>
          </div>

          <div className="font-light pt-5">hello@mgfurniture.com</div>
          <div className="font-light">+91 9694463626</div>
        </div>

        {/* LINKS */}
        <div className="flex gap-10 lg:gap-24">
          <div className="flex flex-col">
            <div className="font-medium text-sm pb-5">
              <p>MENU</p>
            </div>

            <NavLink to="/shop" className="text-base">
              Shop
            </NavLink>
            <NavLink to="/services" className="text-base pt-2">
              Services
            </NavLink>
            <NavLink to="/contracting" className="text-base pt-2">
              Contracting
            </NavLink>
          </div>

          <div className="flex flex-col">
            <div className="font-medium text-sm pb-5">
              <p>LINKS</p>
            </div>

            <NavLink to="/about-us" className="text-base">
              About Us
            </NavLink>
            <NavLink to="/contact" className="text-base pt-2">
              Contact
            </NavLink>
            <NavLink to="/testimonials" className="text-base pt-2">
              Testimonials
            </NavLink>
          </div>
        </div>
      </div>

      {/* DIVIDER */}
      <hr className="border-t border-gray-500 my-4 lg:w-3/4 mx-auto" />

      {/* BOTTOM BAR */}
      <div
        className="
          lg:w-3/4 mx-auto
          flex flex-col gap-3
          lg:flex-row lg:justify-between
          text-center lg:text-left
          pb-5 px-4
        "
      >
        <p className="text-base font-thin">Powered by HM Global.</p>
        <p className="text-base font-thin">Privacy Policy | Our Terms</p>
      </div>
    </footer>
  );
};

export { Footer };
