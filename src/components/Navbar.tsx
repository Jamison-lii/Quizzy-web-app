// src/components/Navbar.tsx
import Link from "next/link";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Features", href: "/features" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact Us", href: "/contact" },
];

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center h-20 px-8 shadow-md bg-white dark:bg-gray-900 z-50 relative">
      
      {/* Logo */}
      <div className="font-black text-2xl text-black dark:text-white">
        Quizzy
      </div>

      {/* Nav Items */}
      <ul className=" lg:flex space-x-12 text-[20px] text-gray-600 dark:text-gray-300">
        {navItems.map((item, index) => (
          <li key={index}>
            <Link href={item.href}>{item.label}</Link>
          </li>
        ))}
      </ul>

      {/* Download Button */}
      <div className="h-10 px-5 bg-[#5156FF] text-white flex items-center justify-center 
                      rounded-md cursor-pointer hover:bg-[#4148d6] transition">
        Download
      </div>

    </nav>
  );
};

export default Navbar;
