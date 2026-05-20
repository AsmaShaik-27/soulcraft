import artworks from "../../data/artworks";

function FeaturedArtworks() {
  return (
    <section className="w-full px-8 md:px-16 py-20">

      {/* Heading */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-14">

        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#3E3232]">
            Featured Artworks
          </h2>

          <p className="mt-4 text-gray-600 text-lg">
            Explore handcrafted creations from talented artists.
          </p>
        </div>

        <button className="mt-6 md:mt-0 px-6 py-3 border border-[#3E3232] rounded-full hover:bg-[#3E3232] hover:text-white transition">
          View All
        </button>
      </div>

      {/* Artwork Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {artworks.map((artwork) => (

          <div
            key={artwork.id}
            className="bg-white rounded-3xl overflow-hidden shadow-lg group cursor-pointer hover:-translate-y-2 transition duration-300"
          >

            {/* Artwork Image */}
            <div className="overflow-hidden">

              <img
                src={artwork.image}
                alt={artwork.title}
                className="w-full h-[320px] object-cover group-hover:scale-110 transition duration-500"
              />
            </div>

            {/* Artwork Info */}
            <div className="p-5">

              <div className="flex items-center justify-between">

                <span className="text-sm bg-[#E7D7C9] px-3 py-1 rounded-full text-[#3E3232]">
                  {artwork.category}
                </span>

                <span className="font-semibold text-[#3E3232]">
                  {artwork.price}
                </span>
              </div>

              <h3 className="mt-4 text-2xl font-semibold text-[#3E3232]">
                {artwork.title}
              </h3>

              <p className="mt-2 text-gray-500">
                by {artwork.artist}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedArtworks;