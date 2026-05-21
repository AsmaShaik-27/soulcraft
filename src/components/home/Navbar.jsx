import { motion } from "framer-motion";

function Navbar() {
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
      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">

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

        {/* Nav Links */}
        <ul
          className="hidden md:flex gap-12 text-[15px] text-[#4B4540]"
          style={{ fontFamily: "Inter" }}
        >
          {["Home", "Collections", "Artists", "Custom Art"].map((item) => (
            <li
              key={item}
              className="relative cursor-pointer group"
            >
              {item}

              <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-[#8B6B4A] transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Buttons */}
        <div className="flex items-center gap-5">

          {/* <button
            className="text-[#4B4540] text-sm"
            style={{ fontFamily: "Inter" }}
          >
            Login
          </button> */}
          <button
            className="px-5 py-2 border border-[#070707] text-[#060606]
            hover:bg-[#080404] hover:text-white transition duration-300 text-sm"
            style={{ fontFamily: "Inter" }}
          >
            Login
          </button>

          <button
            className="px-5 py-2 border border-[#1A1816] text-[#1A1816]
            hover:bg-[#1A1816] hover:text-white transition duration-300 text-sm"
            style={{ fontFamily: "Inter" }}
          >
            Become Artist
          </button>

        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;