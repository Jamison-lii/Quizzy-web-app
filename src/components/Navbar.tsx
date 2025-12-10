"use client";
import { useState } from "react";
import Link from "next/link";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact Us", href: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <nav className="flex justify-between items-center h-20 px-6 shadow-md font-poppins">
        
        {/* LEFT – LOGO */}
        <div className="font-black text-2xl">Quizzy</div>

        {/* MIDDLE – NAV LINKS (DESKTOP ONLY) */}
        <ul className="hidden lg:flex space-x-12 text-[20px] text-[#5F5F5F]">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>

        {/* RIGHT – BUTTON (DESKTOP ONLY) */}
        <div className="hidden lg:flex h-10 px-5 bg-blue-600 text-white items-center justify-center rounded-md hover:bg-blue-700 transition cursor-pointer">
          Download
        </div>

        {/* HAMBURGER MENU (MOBILE ONLY) */}
        <button
          className="lg:hidden text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </nav>

      {/* MOBILE DROPDOWN MENU */}
      {isOpen && (
        <div className="lg:hidden bg-white shadow-md py-4 px-6 space-y-4 text-lg text-[#5F5F5F]">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="block border-b border-gray-200 pb-2"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}

          {/* Mobile Download Button */}
          <div className="h-10 w-full bg-blue-600 text-white flex items-center justify-center rounded-md hover:bg-blue-700 transition cursor-pointer">
            Download
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
