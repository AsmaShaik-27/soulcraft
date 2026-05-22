const ProductCard = ({ product }) => {
  return (
    <div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
      
      {/* Image */}
      <div className="overflow-hidden relative">
        <img
          src={product.image}
          alt={product.name}
          className="h-72 w-full object-cover group-hover:scale-110 transition duration-700"
        />

        {/* Category Badge */}
        <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-[#7f5539] text-xs font-semibold px-4 py-2 rounded-full">
          {product.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-6">
        
        {/* Rating */}
        <div className="flex items-center gap-1 mb-3">
          <span className="text-yellow-500">★</span>
          <span className="text-sm text-[#6f5c57] font-medium">
            {product.rating}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-2xl font-semibold text-[#3d2c29] mb-3">
          {product.name}
        </h3>

        {/* Description */}
        <p className="text-[#6f5c57] text-sm leading-relaxed mb-5">
          {product.description}
        </p>

        {/* Bottom */}
        <div className="flex items-center justify-between">
          <p className="text-xl font-bold text-[#7f5539]">
            {product.price}
          </p>

          <button className="bg-[#7f5539] text-white px-5 py-2 rounded-full hover:bg-[#5e3b28] transition duration-300">
            View
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;