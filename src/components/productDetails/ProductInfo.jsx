import { Heart, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const ProductInfo = ({ product }) => {
  const [wishlisted, setWishlisted] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  return (
    <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm">
      <p className="text-sm uppercase tracking-[0.3em] text-[#8B6B4A] mb-4">
        {product.category}
      </p>

      <h1
        className="text-4xl md:text-5xl text-[#1A1816] leading-tight mb-4"
        style={{ fontFamily: "Cormorant Garamond" }}
      >
        {product.title}
      </h1>

      <Link
        to={`/artist/${product.artist}`}
        className="text-[#6f5237] hover:underline text-base"
      >
        by {product.artist}
      </Link>

      <p className="text-3xl mt-8 mb-5 text-[#1A1816]">
        ₹{product.price}
      </p>

      <p className="text-neutral-600 leading-7 mb-8">
        {product.description ||
          "A carefully crafted artwork designed to bring warmth, detail and character into your space."}
      </p>

      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <button className="bg-[#1A1816] text-white px-8 py-4 rounded-full hover:bg-[#8B6B4A] transition">
          Buy Now
        </button>

        <button
          onClick={() => setAddedToCart(!addedToCart)}
          className="border border-[#1A1816] px-8 py-4 rounded-full flex items-center justify-center gap-2 hover:bg-[#1A1816] hover:text-white transition"
        >
          <ShoppingCart size={18} />
          {addedToCart ? "Added" : "Add To Cart"}
        </button>

        <button
          onClick={() => setWishlisted(!wishlisted)}
          className="border border-neutral-300 px-5 py-4 rounded-full flex items-center justify-center hover:border-[#1A1816] transition"
        >
          <Heart
            size={20}
            fill={wishlisted ? "#1A1816" : "none"}
          />
        </button>
      </div>

      <div className="border-t pt-6 grid grid-cols-2 gap-5 text-sm">
        <div>
          <p className="text-neutral-400">Medium</p>
          <p className="text-[#1A1816]">Handmade Artwork</p>
        </div>

        <div>
          <p className="text-neutral-400">Customizable</p>
          <p className="text-[#1A1816]">
            {product.customizable ? "Available" : "Not Available"}
          </p>
        </div>

        <div>
          <p className="text-neutral-400">Delivery</p>
          <p className="text-[#1A1816]">5 - 7 Days</p>
        </div>

        <div>
          <p className="text-neutral-400">Packaging</p>
          <p className="text-[#1A1816]">Secure Packed</p>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;