const products = [1, 2, 3, 4];

const MoreFromArtist = () => {
  return (
    <section>
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-semibold">More from this Artist</h2>

        <button className="text-[#8b5e3c] hover:underline">
          View All
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((item) => (
          <div
            key={item}
            className="bg-white rounded-3xl overflow-hidden shadow-sm hover:-translate-y-1 transition"
          >
            <img
              src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=1200"
              alt="art"
              className="w-full h-72 object-cover"
            />

            <div className="p-5">
              <h3 className="font-medium text-lg">
                Earth Mandala
              </h3>

              <p className="text-neutral-500 text-sm mt-1">
                by Priya Arts
              </p>

              <p className="mt-4 font-semibold">
                ₹2,800
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MoreFromArtist;