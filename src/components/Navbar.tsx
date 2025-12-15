"use client";

import { useState } from "react";
import Link from "next/link";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/features" },
  { label: "Course Preview", href: "/courses" },
  { label: "How it Works", href: "/how-it-works" },
  { label: "About Us", href: "/about" },
  { label: "FAQ", href: "/faq" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <nav className="flex justify-between items-center h-20 px-6 shadow-md font-poppins">
        
        {/* LEFT – LOGO */}
        <div className="font-black text-2xl">
          <Link href="/">Quizzy</Link>
        </div>

        {/* MIDDLE – NAV LINKS (DESKTOP) */}
        <ul className="hidden lg:flex space-x-12 text-[20px] text-[#5F5F5F]">
          {navItems.map((item, index) => (
            <li key={index} className="hover:text-blue-600 transition">
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul> {/* Closing tag added here */}
        
        {/* RIGHT – BUTTON (DESKTOP) */}
        <div className="hidden lg:flex h-10 px-5 bg-blue-600 text-white items-center justify-center rounded-md hover:bg-blue-700 transition cursor-pointer">
          Download
        </div>

        {/* HAMBURGER MENU (MOBILE) */}
        <button
          className="lg:hidden text-3xl"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          ☰ {/* Added icon for the button */}
        </button>
      </nav>

      {/* MOBILE DROPDOWN */}
      {isOpen && (
        <div className="lg:hidden bg-white shadow-md py-4 px-6 space-y-4 text-lg text-[#5F5F5F]">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="block border-b border-gray-200 pb-2 hover:text-blue-600 transition"
              onClick={() => setIsOpen(false)} // Ensure this is set to close the menu
            >
              {item.label}
            </Link>
          ))}
          
          {/* Mobile Download Button */}
          <div
            className="h-10 w-full bg-blue-600 text-white flex items-center justify-center rounded-md hover:bg-blue-700 transition cursor-pointer"
            onClick={() => setIsOpen(false)} // Add click to close for clarity
          >
            Download
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;