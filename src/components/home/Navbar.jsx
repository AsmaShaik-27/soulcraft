function Navbar() {
  return (
    <nav className="w-full px-8 py-5 flex items-center justify-between bg-[#F8F5F2] shadow-sm">
      
      {/* Logo */}
      <div>
        <h1 className="text-3xl font-bold text-[#3E3232]">
          SoulCraft
        </h1>
      </div>

      {/* Nav Links */}
      <ul className="hidden md:flex gap-8 text-lg font-medium">
        <li className="cursor-pointer hover:text-[#C4A484] transition">
          Home
        </li>

        <li className="cursor-pointer hover:text-[#C4A484] transition">
          Categories
        </li>

        <li className="cursor-pointer hover:text-[#C4A484] transition">
          Explore
        </li>

        <li className="cursor-pointer hover:text-[#C4A484] transition">
          Artists
        </li>
      </ul>

      {/* Buttons */}
      <div className="flex gap-4">
        <button className="px-5 py-2 border border-[#3E3232] rounded-full hover:bg-[#3E3232] hover:text-white transition">
          Login
        </button>

        <button className="px-5 py-2 bg-[#3E3232] text-white rounded-full hover:bg-[#C4A484] transition">
          Become Artist
        </button>
      </div>
    </nav>
  );
}

export default Navbar;