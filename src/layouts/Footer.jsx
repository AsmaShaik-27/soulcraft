const Footer = () => {
  return (
    <footer className="bg-[#2f1f1b] text-white pt-16 pb-8 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12 pb-12 border-b border-white/10">

          {/* Brand */}
          <div>
            <h2 className="text-4xl font-bold mb-5">
              SoulCraft
            </h2>

            <p className="text-white/70 leading-relaxed">
              Discover handcrafted creations made with creativity,
              passion, and artistic soul. Bringing handmade artistry
              closer to your home.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4 text-white/70">

              <li className="hover:text-[#d6b89c] transition cursor-pointer">
                Home
              </li>

              <li className="hover:text-[#d6b89c] transition cursor-pointer">
                Shop
              </li>

              <li className="hover:text-[#d6b89c] transition cursor-pointer">
                Custom Orders
              </li>

              <li className="hover:text-[#d6b89c] transition cursor-pointer">
                About Us
              </li>

              <li className="hover:text-[#d6b89c] transition cursor-pointer">
                Contact
              </li>

            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">
              Categories
            </h3>

            <ul className="space-y-4 text-white/70">

              <li className="hover:text-[#d6b89c] transition cursor-pointer">
                Mandala Art
              </li>

              <li className="hover:text-[#d6b89c] transition cursor-pointer">
                Resin Art
              </li>

              <li className="hover:text-[#d6b89c] transition cursor-pointer">
                Crochet Crafts
              </li>

              <li className="hover:text-[#d6b89c] transition cursor-pointer">
                Clay Art
              </li>

              <li className="hover:text-[#d6b89c] transition cursor-pointer">
                Handmade Gifts
              </li>

            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">
              Contact
            </h3>

            <div className="space-y-4 text-white/70">

              <p>India</p>

              <p>admin@soulcraft.com</p>

              <p>+91 98765 43210</p>

            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-white/60 text-sm">

          <p>
            © 2026 SoulCraft. All rights reserved.
          </p>

          <div className="flex gap-6">

            <p className="hover:text-white transition cursor-pointer">
              Privacy Policy
            </p>

            <p className="hover:text-white transition cursor-pointer">
              Terms & Conditions
            </p>

          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;