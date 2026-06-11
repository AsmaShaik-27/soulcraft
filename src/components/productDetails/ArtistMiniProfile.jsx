const ArtworkMiniProfile = ({ product }) => {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-8">
      <div className="border-t border-black/10 pt-12 grid grid-cols-1 md:grid-cols-[0.35fr_1fr_0.25fr] gap-8 items-center">
        <div className="flex items-center gap-5">
          <img
            src={product.image}
            alt={product.artist}
            className="w-24 h-24 object-cover rounded-full"
          />

          <div className="md:hidden">
            <p
              className="text-xs uppercase tracking-[0.25em] text-[#8B6B4A] mb-2"
              style={{ fontFamily: "Inter" }}
            >
              Meet the Artist
            </p>

            <h2
              className="text-3xl font-medium text-[#1A1816]"
              style={{ fontFamily: "Cormorant Garamond" }}
            >
              {product.artist}
            </h2>
          </div>
        </div>

        <div>
          <p
            className="hidden md:block text-sm uppercase tracking-[0.3em] text-[#8B6B4A] mb-3"
            style={{ fontFamily: "Inter" }}
          >
            Meet the Artist
          </p>

          <h2
            className="hidden md:block text-4xl font-medium text-[#1A1816]"
            style={{ fontFamily: "Cormorant Garamond" }}
          >
            {product.artist}
          </h2>

          <p
            className="mt-4 text-neutral-600 leading-8 max-w-2xl"
            style={{ fontFamily: "Inter" }}
          >
            An independent artist creating soulful handmade pieces inspired by
            tradition, detail, and everyday emotions.
          </p>
        </div>

        <button
          className="justify-self-start md:justify-self-end px-7 py-3 rounded-full border border-[#1A1816] text-[#1A1816] hover:bg-[#1A1816] hover:text-white transition"
          style={{ fontFamily: "Inter" }}
        >
          View Profile
        </button>
      </div>
    </section>
  );
};

export default ArtworkMiniProfile;