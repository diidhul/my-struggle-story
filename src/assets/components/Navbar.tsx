import { useState } from "react";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { AiOutlineGithub } from "react-icons/ai";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi"; // Tambahkan ikon hamburger
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [isOpen, setIsOpen] = useState(false); // State untuk kontrol menu

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const MenuItem = [
    { icon: BiLogoGmail, url: "https://mail.google.com/", alt: "gmail" },
    { icon: FaLinkedinIn, url: "https://www.linkedin.com", alt: "linkedin" },
    { icon: FaInstagram, url: "https://www.instagram.com", alt: "Instagram" },
    { icon: AiOutlineGithub, url: "https://www.github.com", alt: "github" },
  ];

  return (
    <>
      {isHome ? (
        <nav className="w-full flex justify-between py-5 px-6 md:px-16 items-center">
          {/* Logo */}
          <a className="text-lg md:text-xl font-bold cursor-pointer" href="/">
            <h1>
              ⏑_⏑<span className="text-amber-500 cursor-pointer"> .</span>
            </h1>
          </a>

          <div className="hidden md:flex gap-5">
            {MenuItem.map((menu, index) => (
              <a
                key={index}
                href={menu.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
              >
                <menu.icon size={30} />
              </a>
            ))}
          </div>

          <button className="md:hidden text-2xl" onClick={toggleMenu}>
            {isOpen ? <HiOutlineX /> : <HiOutlineMenu />}
          </button>
        </nav>
      ) : (
        <nav className="w-full flex justify-between py-5 px-6 md:px-16 items-center">
          {/* Logo */}
          <a className="text-lg md:text-xl font-bold cursor-pointer" href="/">
            <h1>
              î⁔î <span className="text-amber-500 cursor-pointer">.</span>
            </h1>
          </a>
        </nav>
      )}

      {/* Menu di layar kecil */}
      <nav
        className={`md:hidden absolute top-16 right-0 bg-white shadow-md p-5 w-48 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        {MenuItem.map((menu, index) => (
          <a
            key={index}
            href={menu.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 py-2 text-gray-700 hover:text-black"
          >
            <menu.icon size={26} />
            {menu.alt}
          </a>
        ))}
      </nav>
    </>
  );
};

export default Navbar;
