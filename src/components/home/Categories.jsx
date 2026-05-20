import categories from "../../data/categories";

function Categories() {
  return (
    <section className="w-full px-8 md:px-16 py-20">

      {/* Heading */}
      <div className="text-center mb-14">

        <h2 className="text-4xl md:text-5xl font-bold text-[#3E3232]">
          Explore Categories
        </h2>

        <p className="mt-4 text-gray-600 text-lg">
          Discover unique handmade creations from talented artists.
        </p>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {categories.map((category) => (
          
          <div
            key={category.id}
            className="group relative overflow-hidden rounded-3xl shadow-lg cursor-pointer"
          >

            {/* Image */}
            <img
              src={category.image}
              alt={category.title}
              className="w-full h-[400px] object-cover group-hover:scale-110 transition duration-500"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30 flex items-end p-6">

              <h3 className="text-white text-2xl font-semibold">
                {category.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;