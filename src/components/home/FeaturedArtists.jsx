import { motion } from "framer-motion";

const artists = [
  {
    name: "Elena Marrow",
    specialty: "Contemporary Textures",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=900&auto=format&fit=crop",
  },

  {
    name: "Aarav Sen",
    specialty: "Abstract Storytelling",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=900&auto=format&fit=crop",
  },

  {
    name: "Mila Vesper",
    specialty: "Dreamlike Illustrations",
    image:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=900&auto=format&fit=crop",
  },
];

function FeaturedArtists() {
  return (
    <section className="bg-[#F7F3EE] py-28 px-8">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-8"
        >

          <div>
            <p
              className="uppercase tracking-[0.25em] text-sm text-[#8B6B4A]"
              style={{ fontFamily: "Inter" }}
            >
              Featured Artists
            </p>

            <h2
              className="mt-4 text-5xl md:text-6xl text-[#1A1816]"
              style={{
                fontFamily: "Cormorant Garamond",
                fontWeight: 600,
              }}
            >
              Meet The Creators
            </h2>
          </div>

          <p
            className="max-w-md text-[#6B645D] leading-relaxed"
            style={{ fontFamily: "Inter" }}
          >
            Explore artists shaping emotional visual experiences
            through texture, storytelling, and handcrafted expression.
          </p>

        </motion.div>

        {/* Artist Grid */}
        <div className="mt-20 grid md:grid-cols-3 gap-10">

          {artists.map((artist, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >

              {/* Image */}
              <div className="overflow-hidden bg-[#EFE7DD]">

                <img
                  src={artist.image}
                  alt={artist.name}
                  className="w-full h-[500px] object-cover
                  grayscale-[10%]
                  group-hover:scale-[1.02]
                  transition duration-[2000ms]"
                />

              </div>

              {/* Content */}
              <div className="mt-5">

                <h3
                  className="text-4xl text-[#1A1816]"
                  style={{
                    fontFamily: "Cormorant Garamond",
                    fontWeight: 500,
                  }}
                >
                  {artist.name}
                </h3>

                <p
                  className="mt-2 text-[#8B6B4A] tracking-[0.15em] uppercase text-sm"
                  style={{ fontFamily: "Inter" }}
                >
                  {artist.specialty}
                </p>

              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedArtists;