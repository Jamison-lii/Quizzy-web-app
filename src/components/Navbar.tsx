"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/features" },
  { label: "Course Preview", href: "/courses" },
  { label: "How it works", href: "/how-it-works" },
  { label: "About Us", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact Us", href: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* NAVBAR */}
      <nav className="sticky top-0 bg-white flex justify-between items-center z-50 h-20 px-6 shadow-md font-poppins">
        
        {/* LEFT – LOGO */}
        <div className="font-black text-2xl">Quizzy</div>

        {/* MIDDLE – NAV LINKS (DESKTOP) */}
        <ul className="hidden lg:flex space-x-12 text-[20px]">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`transition ${
                    isActive
                      ? "text-[#5156FF] font-semibold"
                      : "text-[#5F5F5F] hover:text-[#5156FF]"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* RIGHT – BUTTON (DESKTOP) */}
        <div className="hidden lg:flex h-10 px-5 bg-[#5156FF] text-white items-center justify-center rounded-md hover:bg-blue-700 transition cursor-pointer">
          Download
        </div>

        {/* HAMBURGER */}
        <button
          className="lg:hidden text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </nav>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-white shadow-lg py-6 px-6 space-y-4 text-lg z-40">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`block pb-3 border-b transition ${
                  isActive
                    ? "text-[#5156FF] font-semibold"
                    : "text-[#5F5F5F] hover:text-[#5156FF]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}

          <button className="mt-4 w-full h-12 bg-[#5156FF] text-white rounded-lg font-medium hover:bg-blue-700 transition">
            Download
          </button>
        </div>
      )}
    </>
  );
};

export default Navbar;
