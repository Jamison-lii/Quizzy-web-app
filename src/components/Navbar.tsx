import Link from 'next/link';
import React from 'react';

const navItems = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact Us", href: "/contact" },
];

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center h-20 px-8 shadow-sm font-poppins">
      
      {/* LEFT — LOGO */}
      <div className="font-black text-2xl">
        Quizzy
      </div>

      {/* MIDDLE — NAV ITEMS */}
      <ul className="hidden lg:flex space-x-12 text-[20px] text-[#5F5F5F]">
        {navItems.map((item, index) => (
          <li key={index}>
            <Link href={item.href}>{item.label}</Link>
          </li>
        ))}
      </ul>

      {/* RIGHT — BUTTON */}
      <div className="h-10 px-5 bg-[#5156FF] text-white flex items-center justify-center 
                      rounded-md cursor-pointer hover:bg-[#5156FF] transition">
        Download
      </div>

    </nav>
  );
}

export default Navbar;
