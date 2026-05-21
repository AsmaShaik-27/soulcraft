import { motion } from "framer-motion";

const categories = [
  {
    title: "Mandala Art",
    description:
      "Intricate patterns inspired by balance, mindfulness, and spiritual harmony.",
    image:
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=900&auto=format&fit=crop",
  },

  {
    title: "Pencil Portraits",
    description:
      "Handcrafted sketches capturing emotion, realism, and timeless expression.",
    image:
      "https://images.unsplash.com/photo-1518998053901-5348d3961a04?q=80&w=900&auto=format&fit=crop",
  },

  {
    title: "Abstract Paintings",
    description:
      "Bold textures and expressive compositions filled with imagination and movement.",
    image:
      "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?q=80&w=900&auto=format&fit=crop",
  },
];

function FeaturedCollections() {
  return (
    <section className="bg-[#F7F3EE] py-28 px-8">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <p
            className="uppercase tracking-[0.25em] text-sm text-[#8B6B4A]"
            style={{ fontFamily: "Inter" }}
          >
            Discover Artistic Styles
          </p>

          <h2
            className="mt-4 text-5xl md:text-6xl text-[#1A1816]"
            style={{
              fontFamily: "Cormorant Garamond",
              fontWeight: 600,
            }}
          >
            Explore Art Forms
          </h2>

        </motion.div>

        {/* Grid */}
        <div className="mt-20 grid md:grid-cols-4 gap-10">

          {/* Art Categories */}
          {categories.map((item, index) => (
            <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.1,
                    delay: index * 0.15,
                }}
                viewport={{ once: true }}
                className="group cursor-pointer"
                >

                {/* Image */}
                <div className="relative overflow-hidden bg-[#EFE7DD]">

                    {/* Warm Overlay */}
                    <div
                    className="absolute inset-0 bg-[#1A1816]/0
                    group-hover:bg-[#1A1816]/10
                    transition duration-700 z-10"
                    ></div>

                    <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-[540px] object-cover
                    group-hover:scale-[1.05]
                    transition duration-[2500ms]"
                    />

                </div>

                {/* Content */}
                <div className="mt-6">

                    <h3
                    className="text-4xl text-[#1A1816]
                    group-hover:translate-x-1
                    transition duration-500"
                    style={{
                        fontFamily: "Cormorant Garamond",
                        fontWeight: 500,
                    }}
                    >
                    {item.title}
                    </h3>

                    <p
                    className="mt-3 text-[#6B645D] leading-relaxed"
                    style={{ fontFamily: "Inter" }}
                    >
                    {item.description}
                    </p>

                    <div
                    className="mt-5 flex items-center gap-2
                    text-sm uppercase tracking-[0.18em]
                    text-[#8B6B4A]
                    group-hover:gap-4
                    transition-all duration-500"
                    style={{ fontFamily: "Inter" }}
                    >
                    Explore Collection →
                    </div>

                </div>
                </motion.div>
          ))}

          {/* Explore More Card */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-[#EFE7DD] p-10 flex flex-col justify-between min-h-[540px] cursor-pointer group"
          >

            <div>

              <p
                className="uppercase tracking-[0.25em] text-sm text-[#8B6B4A]"
                style={{ fontFamily: "Inter" }}
              >
                Explore More
              </p>

              <h3
                className="mt-6 text-5xl text-[#1A1816] leading-tight"
                style={{
                  fontFamily: "Cormorant Garamond",
                  fontWeight: 600,
                }}
              >
                10+
                <br />
                Artistic
                <br />
                Styles
              </h3>

            </div>

            <div
              className="flex items-center gap-3 text-[#8B6B4A]
              uppercase tracking-[0.18em] text-sm
              group-hover:gap-5 transition-all duration-500"
              style={{ fontFamily: "Inter" }}
            >
              View All →
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default FeaturedCollections;