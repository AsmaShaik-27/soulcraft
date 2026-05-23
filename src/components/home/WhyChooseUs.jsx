export default function WhyChooseUs() {
  return (
    <section className="w-full bg-[#F8F5F0] py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        
        <div
          className="grid lg:grid-cols-2 gap-14
          items-center"
        >
          {/* LEFT IMAGE */}
          <div className="relative">
            <div className="overflow-hidden rounded-[40px]">
              <img
                src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1400&auto=format&fit=crop"
                alt="Handmade Artist"
                className="w-full h-[500px] object-cover"
              />
            </div>

            {/* Floating Badge */}
            <div
              className="absolute bottom-6 left-6
              bg-white/90 backdrop-blur-md
              px-5 py-4 rounded-2xl shadow-lg"
            >
              <p
                className="text-sm text-[#8B5E3C] mb-1"
                style={{ fontFamily: "Inter" }}
              >
                Supporting
              </p>

              <h4
                className="text-xl text-[#1A1816]"
                style={{ fontFamily: "Playfair Display" }}
              >
                Independent Artists
              </h4>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <p
              className="uppercase tracking-[4px]
              text-sm text-[#8B5E3C] mb-5"
              style={{ fontFamily: "Inter" }}
            >
              Why SoulCraft
            </p>

            <h2
              className="text-4xl md:text-5xl
              leading-tight text-[#1A1816] mb-8"
              style={{ fontFamily: "Playfair Display" }}
            >
              Handmade creations
              <br />
              that feel personal.
            </h2>

            <p
              className="text-[#666]
              text-base md:text-lg leading-relaxed mb-10"
              style={{ fontFamily: "Inter" }}
            >
              SoulCraft brings together talented independent artists and people
              who value creativity, authenticity, and meaningful handmade work.
              From curated products to personalized creations, every piece tells
              a story crafted with passion.
            </p>

            {/* Points */}
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-3 h-3 rounded-full bg-[#8B5E3C] mt-2" />

                <div>
                  <h4
                    className="text-xl text-[#1A1816] mb-2"
                    style={{ fontFamily: "Playfair Display" }}
                  >
                    Curated Handmade Products
                  </h4>

                  <p
                    className="text-[#666] leading-relaxed"
                    style={{ fontFamily: "Inter" }}
                  >
                    Explore unique decor, jewelry, gifts, and artworks crafted
                    by real artists.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-3 h-3 rounded-full bg-[#8B5E3C] mt-2" />

                <div>
                  <h4
                    className="text-xl text-[#1A1816] mb-2"
                    style={{ fontFamily: "Playfair Display" }}
                  >
                    Personalized Experiences
                  </h4>

                  <p
                    className="text-[#666] leading-relaxed"
                    style={{ fontFamily: "Inter" }}
                  >
                    Collaborate with artists for custom creations tailored to
                    your ideas and emotions.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-3 h-3 rounded-full bg-[#8B5E3C] mt-2" />

                <div>
                  <h4
                    className="text-xl text-[#1A1816] mb-2"
                    style={{ fontFamily: "Playfair Display" }}
                  >
                    Empowering Independent Artists
                  </h4>

                  <p
                    className="text-[#666] leading-relaxed"
                    style={{ fontFamily: "Inter" }}
                  >
                    Every purchase directly supports passionate creators and
                    small artistic businesses.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}