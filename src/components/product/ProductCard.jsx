import {
  Heart,
  ShoppingCart,
  Check,
} from "lucide-react";

import { useState } from "react";

import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {

  const [wishlisted, setWishlisted] =
    useState(false);

  const [addedToCart, setAddedToCart] =
    useState(false);

  return (
    <div className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300 flex flex-col">

      {/* Image Section */}
      <div className="relative overflow-hidden">

        {/* Wishlist */}
        <button
          onClick={() =>
            setWishlisted(!wishlisted)
          }
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/90 backdrop-blur flex items-center justify-center shadow-sm hover:scale-110 transition"
        >
          <Heart
            size={18}
            className={`transition ${
              wishlisted
                ? "fill-red-500 text-red-500"
                : "text-black"
            }`}
          />
        </button>

        {/* Product Image */}
        <Link
          to={`/product/${product.id}`}
        >
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-72 object-cover group-hover:scale-105 transition duration-500"
          />
        </Link>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">

        {/* Category */}
        <div className="mb-3">
          <span className="text-xs bg-[#f4ede7] text-[#6b4f3b] px-3 py-1 rounded-full">
            {product.category}
          </span>
        </div>

        {/* Title */}
        <Link
          to={`/product/${product.id}`}
        >
          <h3 className="text-xl font-semibold text-[#1A1816] hover:opacity-80 transition">
            {product.title}
          </h3>
        </Link>

        {/* Description */}
        <p className="text-sm text-gray-500 mt-2 line-clamp-1">
          {product.description}
        </p>

        {/* Artist */}
        <Link
          to={`/artist/${product.artistId}`}
          className="text-sm text-[#8b6b5b] mt-3 hover:underline"
        >
          by {product.artist}
        </Link>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Bottom */}
        <div className="pt-5">

          {/* Price */}
          <p className="text-2xl font-bold text-[#1A1816] mb-4">
            ₹{product.price}
          </p>

          {/* Buttons */}
          <div className="flex items-center gap-3">

            {/* Add To Cart */}
            <button
              onClick={() =>
                setAddedToCart(
                  !addedToCart
                )
              }
              className={`flex-1 py-3 rounded-full text-sm font-medium transition flex items-center justify-center gap-2 ${
                addedToCart
                  ? "bg-green-600 text-white"
                  : "border border-[#1A1816] text-[#1A1816] hover:bg-[#1A1816] hover:text-white"
              }`}
            >
              {addedToCart ? (
                <>
                  <Check size={16} />
                  Added
                </>
              ) : (
                <>
                  <ShoppingCart size={16} />
                  Cart
                </>
              )}
            </button>

            {/* Buy Now */}
            <button className="flex-1 bg-[#1A1816] text-white py-3 rounded-full text-sm font-medium hover:opacity-90 transition">
              Buy Now
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;