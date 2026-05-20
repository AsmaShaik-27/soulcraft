import { FaPalette, FaUserCheck, FaShippingFast } from "react-icons/fa";

function WhyChoose() {
  return (
    <section className="w-full px-8 md:px-16 py-24 bg-[#EFE7DF]">

      {/* Heading */}
      <div className="text-center mb-16">

        <h2 className="text-4xl md:text-5xl font-bold text-[#3E3232]">
          Why Choose SoulCraft
        </h2>

        <p className="mt-4 text-lg text-gray-600">
          A creative marketplace connecting passionate artists with art lovers.
        </p>
      </div>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Feature 1 */}
        <div className="bg-white p-10 rounded-3xl shadow-lg text-center hover:-translate-y-2 transition duration-300">

          <div className="flex justify-center text-5xl text-[#C4A484]">
            <FaPalette />
          </div>

          <h3 className="mt-6 text-2xl font-semibold text-[#3E3232]">
            Unique Handmade Art
          </h3>

          <p className="mt-4 text-gray-600 leading-relaxed">
            Discover original artworks crafted with creativity, passion and artistic excellence.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="bg-white p-10 rounded-3xl shadow-lg text-center hover:-translate-y-2 transition duration-300">

          <div className="flex justify-center text-5xl text-[#C4A484]">
            <FaUserCheck />
          </div>

          <h3 className="mt-6 text-2xl font-semibold text-[#3E3232]">
            Verified Artists
          </h3>

          <p className="mt-4 text-gray-600 leading-relaxed">
            Every artist on SoulCraft is reviewed and verified to maintain quality and authenticity.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="bg-white p-10 rounded-3xl shadow-lg text-center hover:-translate-y-2 transition duration-300">

          <div className="flex justify-center text-5xl text-[#C4A484]">
            <FaShippingFast />
          </div>

          <h3 className="mt-6 text-2xl font-semibold text-[#3E3232]">
            Smooth Order Experience
          </h3>

          <p className="mt-4 text-gray-600 leading-relaxed">
            Easily browse, order and track beautiful handmade creations from artists.
          </p>
        </div>
      </div>
    </section>
  );
}

export default WhyChoose;