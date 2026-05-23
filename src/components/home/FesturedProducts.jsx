import { Heart, Star } from "lucide-react";

const products = [
  {
    id: 1,
    title: "Mandala Wall Art",
    artist: "by Aanya",
    price: "₹1,499",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=1200&auto=format&fit=crop",
    customizable: true,
  },
  {
    id: 2,
    title: "Resin Name Plate",
    artist: "by Kavya",
    price: "₹999",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=1200&auto=format&fit=crop",
    customizable: true,
  },
  {
    id: 3,
    title: "Handmade Jewelry",
    artist: "by Meera",
    price: "₹799",
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=1200&auto=format&fit=crop",
    customizable: false,
  },
  {
    id: 4,
    title: "Crochet Teddy",
    artist: "by Diya",
    price: "₹1,299",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1200&auto=format&fit=crop",
    customizable: true,
  },
];

export default function FeaturedProducts() {
  return (
    <section className="w-full bg-[#F9F6F1] py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <p
              className="text-sm uppercase tracking-[4px] text-[#8B5E3C] mb-3"
              style={{ fontFamily: "Inter" }}
            >
              Handmade Picks
            </p>

            <h2
              className="text-4xl md:text-5xl text-[#1A1816]"
              style={{ fontFamily: "Playfair Display" }}
            >
              Featured Products
            </h2>
          </div>

          <button
            className="mt-6 md:mt-0 border border-[#1A1816]
            px-6 py-3 rounded-full text-sm hover:bg-[#1A1816]
            hover:text-white transition duration-300"
            style={{ fontFamily: "Inter" }}
          >
            View All Products
          </button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-[28px] overflow-hidden
              transition duration-500 hover:-translate-y-2
              hover:shadow-2xl"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-[320px] object-cover
                  transition duration-700 group-hover:scale-110"
                />

                {/* Wishlist */}
                <button
                  className="absolute top-4 right-4 bg-white/90
                  p-2 rounded-full backdrop-blur-md
                  hover:scale-110 transition"
                >
                  <Heart size={18} className="text-[#1A1816]" />
                </button>

                {/* Badge */}
                {product.customizable && (
                  <div
                    className="absolute bottom-4 left-4 bg-[#1A1816]
                    text-white text-xs px-3 py-1 rounded-full"
                    style={{ fontFamily: "Inter" }}
                  >
                    Customizable
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center gap-1 mb-2">
                  <Star
                    size={16}
                    className="fill-yellow-400 text-yellow-400"
                  />
                  <span
                    className="text-sm text-[#4B4B4B]"
                    style={{ fontFamily: "Inter" }}
                  >
                    {product.rating}
                  </span>
                </div>

                <h3
                  className="text-xl text-[#1A1816] mb-1"
                  style={{ fontFamily: "Playfair Display" }}
                >
                  {product.title}
                </h3>

                <p
                  className="text-sm text-[#777]"
                  style={{ fontFamily: "Inter" }}
                >
                  {product.artist}
                </p>

                <div className="mt-4 flex items-center justify-between">
                  <p
                    className="text-lg text-[#8B5E3C]"
                    style={{ fontFamily: "Inter" }}
                  >
                    {product.price}
                  </p>

                  <button
                    className="text-sm border border-[#1A1816]
                    px-4 py-2 rounded-full hover:bg-[#1A1816]
                    hover:text-white transition duration-300"
                    style={{ fontFamily: "Inter" }}
                  >
                    View
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}