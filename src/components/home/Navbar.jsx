import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    "Home",
    "Collections",
    "Artists",
    "Custom Art",
  ];

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 w-full z-50
      bg-white/55 backdrop-blur-md
      border-b border-white/20
      shadow-[0_4px_30px_rgba(0,0,0,0.03)]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="cursor-pointer">
          <h1 className="flex items-center">

            <span
              className="text-[#1A1816] text-3xl tracking-[0.12em]"
              style={{
                fontFamily: "Inter",
                fontWeight: 600,
              }}
            >
              Soul
            </span>

            <span
              className="ml-1 text-5xl text-[#8B6B4A]"
              style={{
                fontFamily: "Cormorant Garamond",
                fontWeight: 600,
              }}
            >
              Craft
            </span>

          </h1>
        </div>

        {/* Desktop Nav Links */}
        <ul
          className="hidden md:flex gap-12 text-[15px] text-[#4B4540]"
          style={{ fontFamily: "Inter" }}
        >
          {navLinks.map((item) => (
            <li
              key={item}
              className="relative cursor-pointer group"
            >
              {item}

              <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-[#8B6B4A] transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-4">
          {/* Login Signup */}
          <button
            className="px-6 py-2.5 rounded-full border border-[#1A1816]
            text-[#1A1816] hover:bg-[#1A1816]
            hover:text-white transition-all duration-300 text-sm
            tracking-wide"
            style={{ fontFamily: "Inter" }}
          >
            Login / Sign Up
          </button>
          {/* Become Artist */}
          <button
            className="px-6 py-2.5 rounded-full bg-[#8B6B4A]
            text-white hover:bg-[#735537]
            transition-all duration-300 text-sm shadow-md
            hover:shadow-lg"
            style={{ fontFamily: "Inter" }}
          >
            Become Artist
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#1A1816]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-t border-[#eee3d8]"
          >
            <div className="px-6 py-8 flex flex-col gap-6">

              {/* Mobile Links */}
              <div
                className="flex flex-col gap-6 text-[#4B4540] text-lg"
                style={{ fontFamily: "Inter" }}
              >
                {navLinks.map((item) => (
                  <p
                    key={item}
                    className="cursor-pointer hover:text-[#8B6B4A] transition duration-300"
                  >
                    {item}
                  </p>
                ))}
              </div>

              {/* Mobile Buttons */}
              <div className="flex flex-col gap-4 pt-6">

                {/* Login Signup */}
                <button
                  className="w-full py-3 rounded-full border border-[#1A1816]
                  text-[#1A1816] hover:bg-[#1A1816]
                  hover:text-white transition-all duration-300"
                  style={{ fontFamily: "Inter" }}
                >
                  Login / Sign Up
                </button>

                {/* Become Artist */}
                <button
                  className="w-full py-3 rounded-full bg-[#8B6B4A]
                  text-white hover:bg-[#735537]
                  transition-all duration-300 shadow-md"
                  style={{ fontFamily: "Inter" }}
                >
                  Become Artist
                </button>

              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.nav>
  );
}

export default Navbar;
