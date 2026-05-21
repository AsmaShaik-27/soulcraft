import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="relative min-h-screen bg-[#F7F3EE] overflow-hidden pt-32">

      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-16 items-center min-h-[90vh]">

        {/* LEFT CONTENT */}
        <div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="uppercase tracking-[0.25em] text-sm text-[#8B6B4A] mb-6"
            style={{ fontFamily: "Inter" }}
          >
            Curated Artistic Experiences
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-[#1A1816] leading-[0.95] text-6xl md:text-8xl"
            style={{
              fontFamily: "Cormorant Garamond",
              fontWeight: 600,
            }}
          >
            Art That
            <br />
            Feels
            <br />
            Personal.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-8 text-[#6B645D] text-lg leading-relaxed max-w-lg"
            style={{ fontFamily: "Inter" }}
          >
            Discover original creations, connect with talented artists,
            and commission artwork crafted uniquely for your story.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-10 flex gap-5"
          >

            <button
              className="px-8 py-4 bg-[#1A1816] text-white hover:bg-[#8B6B4A]
              transition duration-500"
              style={{ fontFamily: "Inter" }}
            >
              Explore Collection
            </button>

            <button
              className="px-8 py-4 border border-[#1A1816]
              text-[#1A1816] hover:bg-[#EFE7DD]
              transition duration-500"
              style={{ fontFamily: "Inter" }}
            >
              Commission Art
            </button>

          </motion.div>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="relative"
        >

          <div className="overflow-hidden rounded-sm">

            <img
              src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=900&auto=format&fit=crop"
              alt="Artwork"
              className="w-full h-[700px] object-cover hover:scale-[1.02] transition duration-[2500ms]"
            />

          </div>

          {/* Floating Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="absolute bottom-6 -left-8 bg-white p-6 shadow-xl max-w-[260px]"
          >

            <p
              className="text-sm text-[#8B6B4A] uppercase tracking-[0.2em]"
              style={{ fontFamily: "Inter" }}
            >
              Featured Artist
            </p>

            <h3
              className="mt-2 text-3xl text-[#1A1816]"
              style={{
                fontFamily: "Cormorant Garamond",
                fontWeight: 600,
              }}
            >
              Elena Marrow
            </h3>

            <p
              className="mt-2 text-[#6B645D] text-sm leading-relaxed"
              style={{ fontFamily: "Inter" }}
            >
              Blending modern textures with emotional storytelling.
            </p>

          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;