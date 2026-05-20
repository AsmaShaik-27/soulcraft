import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="w-full bg-[#3E3232] text-white px-8 md:px-16 py-16">

      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* Brand */}
        <div>

          <h2 className="text-4xl font-bold">
            SoulCraft
          </h2>

          <p className="mt-5 text-gray-300 leading-relaxed">
            A creative marketplace connecting talented artists with art lovers around the world.
          </p>
        </div>

        {/* Explore */}
        <div>

          <h3 className="text-2xl font-semibold mb-5">
            Explore
          </h3>

          <ul className="space-y-3 text-gray-300">

            <li className="hover:text-[#C4A484] cursor-pointer transition">
              Home
            </li>

            <li className="hover:text-[#C4A484] cursor-pointer transition">
              Categories
            </li>

            <li className="hover:text-[#C4A484] cursor-pointer transition">
              Artists
            </li>

            <li className="hover:text-[#C4A484] cursor-pointer transition">
              Explore Art
            </li>
          </ul>
        </div>

        {/* Categories */}
        <div>

          <h3 className="text-2xl font-semibold mb-5">
            Categories
          </h3>

          <ul className="space-y-3 text-gray-300">

            <li className="hover:text-[#C4A484] cursor-pointer transition">
              Mandala Art
            </li>

            <li className="hover:text-[#C4A484] cursor-pointer transition">
              Paintings
            </li>

            <li className="hover:text-[#C4A484] cursor-pointer transition">
              Resin Art
            </li>

            <li className="hover:text-[#C4A484] cursor-pointer transition">
              Thread Art
            </li>
          </ul>
        </div>

        {/* Socials */}
        <div>

          <h3 className="text-2xl font-semibold mb-5">
            Connect
          </h3>

          <div className="flex gap-5 text-3xl">

            <FaInstagram className="cursor-pointer hover:text-[#C4A484] transition" />

            <FaTwitter className="cursor-pointer hover:text-[#C4A484] transition" />

            <FaLinkedin className="cursor-pointer hover:text-[#C4A484] transition" />
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-600 mt-14 pt-6 text-center text-gray-400">

        <p>
          © 2026 SoulCraft. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;