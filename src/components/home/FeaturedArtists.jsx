import artists from "../../data/artists";

function FeaturedArtists() {
  return (
    <section className="w-full px-8 md:px-16 py-24">

      {/* Heading */}
      <div className="text-center mb-16">

        <h2 className="text-4xl md:text-5xl font-bold text-[#3E3232]">
          Meet Our Artists
        </h2>

        <p className="mt-4 text-lg text-gray-600">
          Passionate creators bringing imagination and craftsmanship to life.
        </p>
      </div>

      {/* Artists Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {artists.map((artist) => (

          <div
            key={artist.id}
            className="bg-white rounded-3xl shadow-lg overflow-hidden text-center hover:-translate-y-2 transition duration-300"
          >

            {/* Artist Image */}
            <img
              src={artist.image}
              alt={artist.name}
              className="w-full h-[320px] object-cover"
            />

            {/* Artist Info */}
            <div className="p-6">

              <h3 className="text-2xl font-semibold text-[#3E3232]">
                {artist.name}
              </h3>

              <p className="mt-2 text-[#C4A484] font-medium">
                {artist.category}
              </p>

              <button className="mt-6 px-5 py-2 border border-[#3E3232] rounded-full hover:bg-[#3E3232] hover:text-white transition">
                View Profile
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedArtists;