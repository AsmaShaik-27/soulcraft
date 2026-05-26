const ArtistMiniProfile = ({ product }) => {
  return (
    <section className="mt-20 bg-white border border-[#ddd4ca] p-7 md:p-10">
      <div className="grid md:grid-cols-[auto_1fr_auto] gap-8 items-center">

        <img
          src={product.artistImage || "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=500&auto=format&fit=crop"}
          alt={product.artist}
          className="w-28 h-28 rounded-full object-cover"
        />

        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-[#9a7555] mb-3">
            Meet the Artist
          </p>

          <h2 className="font-serif text-4xl mb-3">
            {product.artist}
          </h2>

          <div className="flex flex-wrap gap-6 text-sm text-[#6f675f] mb-4">
            <p>25 Artworks</p>
            <p>4 Years Experience</p>
            <p>Handmade Specialist</p>
          </div>

          <p className="text-[#5f574f] leading-7 max-w-3xl">
            {product.artistBio ||
              "An independent Indian artist creating meaningful handmade pieces inspired by culture, nature, and personal expression."}
          </p>
        </div>

        <button className="border border-[#1A1816] px-8 py-4 hover:bg-[#1A1816] hover:text-white transition">
          View Profile
        </button>

      </div>
    </section>
  );
};

export default ArtistMiniProfile;