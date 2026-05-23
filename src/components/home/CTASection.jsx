export default function CTASection() {
  return (
    <section className="w-full bg-[#1A1816] py-24 px-6 md:px-12">
      <div className="max-w-5xl mx-auto text-center">
        
        <p
          className="uppercase tracking-[5px]
          text-sm text-[#C6A27E] mb-6"
          style={{ fontFamily: "Inter" }}
        >
          Discover SoulCraft
        </p>

        <h2
          className="text-4xl md:text-6xl
          leading-tight text-white mb-8"
          style={{ fontFamily: "Playfair Display" }}
        >
          Discover Handmade Creations
          <br />
          Crafted by Real Artists.
        </h2>

        <p
          className="max-w-2xl mx-auto text-[#D1D1D1]
          text-base md:text-lg leading-relaxed mb-10"
          style={{ fontFamily: "Inter" }}
        >
          Explore unique artworks, handmade decor, gifts,
          jewelry, and personalized creations made with
          passion by independent artists.
        </p>

        <div
          className="flex flex-col sm:flex-row
          items-center justify-center gap-5"
        >
          <button
            className="px-8 py-3 rounded-full
            bg-white text-[#1A1816]
            hover:scale-105 transition duration-300"
            style={{ fontFamily: "Inter" }}
          >
            Explore Products
          </button>

          <button
            className="px-8 py-3 rounded-full
            border border-white text-white
            hover:bg-white hover:text-[#1A1816]
            transition duration-300"
            style={{ fontFamily: "Inter" }}
          >
            Become an Artist
          </button>
        </div>
      </div>
    </section>
  );
}