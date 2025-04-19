import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY > 0) {
      document.getElementById("navbar").classList.add("bg-primary");
      document.getElementById("navbar").classList.remove("bg-transparent");
    } else {
      document.getElementById("navbar").classList.remove("bg-primary");
      document.getElementById("navbar").classList.add("bg-transparent");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      id="navbar"
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-10 h-10 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Anshuman&nbsp;
            <span className="sm:block hidden">| Portfolio</span>
          </p>
        </Link>

        {/* Desktop Navigation Links (Centered) */}
        <ul className="hidden sm:flex flex-row gap-10 items-center">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        {/* Social Media Icons (Desktop) */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href="https://github.com/anshumansp/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#c026d3] transition-colors duration-300"
          >
            <FaGithub size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/anshuman-parmar-757666219/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#c026d3] transition-colors duration-300"
          >
            <FaLinkedin size={22} />
          </a>
        </div>

        {/* Mobile Menu */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}

              {/* Social Icons (Mobile) */}
              <div className="flex gap-4 mt-2">
                <a
                  href="https://github.com/anshumansp/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#c026d3] transition-colors duration-300"
                >
                  <FaGithub size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/in/anshuman-parmar-757666219/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#c026d3] transition-colors duration-300"
                >
                  <FaLinkedin size={18} />
                </a>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
