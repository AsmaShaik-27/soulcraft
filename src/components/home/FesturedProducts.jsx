import ProductCard from "./ProductCard";

const featuredProducts = [
  {
    id: 1,
    name: "Mandala Wall Art",
    category: "Mandala",
    price: "₹1,499",
    image:
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=1200&auto=format&fit=crop",
    description: "Hand-painted mandala canvas artwork.",
    rating: 4.9,
  },
  {
    id: 2,
    name: "Resin Ocean Tray",
    category: "Resin Art",
    price: "₹2,199",
    image:
      "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?q=80&w=1200&auto=format&fit=crop",
    description: "Ocean-inspired handcrafted resin tray.",
    rating: 4.8,
  },
  {
    id: 3,
    name: "Crochet Flower Bouquet",
    category: "Crochet",
    price: "₹899",
    image:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1200&auto=format&fit=crop",
    description: "Everlasting handmade crochet flowers.",
    rating: 4.7,
  },
  {
    id: 4,
    name: "Clay Miniature Set",
    category: "Clay Craft",
    price: "₹1,299",
    image:
      "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=1200&auto=format&fit=crop",
    description: "Cute handcrafted clay miniatures.",
    rating: 4.9,
  },
];

const FeaturedProducts = () => {
  return (
    <section className="bg-[#fdf8f3] py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          
          <div>
            <p className="text-sm uppercase tracking-[4px] text-[#b08968] font-medium mb-3">
              Handpicked Collection
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-[#3d2c29] leading-tight mb-4">
              Featured Handmade
              <br />
              Creations
            </h2>

            <p className="text-[#6f5c57] max-w-2xl text-lg leading-relaxed">
              Explore our carefully curated handmade products crafted with
              creativity, passion, and artistic detail.
            </p>
          </div>

          <button className="border border-[#b08968] text-[#7f5539] px-6 py-3 rounded-full hover:bg-[#b08968] hover:text-white transition duration-300 w-fit">
            View All Products
          </button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;