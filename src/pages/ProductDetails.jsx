import { useParams } from "react-router-dom";

import Navbar from "../components/home/Navbar";
import Footer from "../layouts/Footer";

import { products } from "../data/products";

import {
  Heart,
  ShoppingCart,
  Check,
} from "lucide-react";

import { useState } from "react";

const ProductDetails = () => {

  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  const [wishlisted, setWishlisted] =
    useState(false);

  const [addedToCart, setAddedToCart] =
    useState(false);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Product not found
      </div>
    );
  }

  return (
    <div className="bg-[#fcfaf8] min-h-screen">

      <Navbar />

      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-27">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">

          {/* LEFT IMAGE */}
          <div>

            <div className="overflow-hidden rounded-[32px] border border-[#ece4dc] bg-white shadow-sm">

              <img
                src={product.image}
                alt={product.title}
                className="w-full h-[650px] object-cover hover:scale-105 transition duration-700"
              />

            </div>

          </div>

          {/* RIGHT CONTENT */}
          <div className="flex flex-col">

            {/* Category */}
            <div className="mb-5">

              <span className="text-sm bg-[#f3ebe4] text-[#8b6b5b] px-4 py-2 rounded-full">
                {product.category}
              </span>

            </div>

            {/* Title */}
            <h1
              className="text-4xl md:text-5xl text-[#1A1816] leading-tight"
              style={{
                fontFamily:
                  "Cormorant Garamond",
                fontWeight: 600,
              }}
            >
              {product.title}
            </h1>

            {/* Artist */}
            <p className="text-[#8b6b5b] text-lg mt-4">
              Crafted by{" "}
              <span className="font-medium">
                {product.artist}
              </span>
            </p>

            {/* Price */}
            <p className="text-4xl font-bold text-[#1A1816] mt-8">
              ₹{product.price}
            </p>

            {/* Description */}
            <div className="mt-8">

              <h2 className="text-xl font-semibold text-[#1A1816] mb-4">
                About this artwork
              </h2>

              <p className="text-gray-600 leading-relaxed">
                {product.description}
              </p>

            </div>

            {/* Features */}
            <div className="mt-10 space-y-4">

              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#8b6b5b]" />

                <p className="text-gray-700">
                  Handmade with premium craftsmanship
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#8b6b5b]" />

                <p className="text-gray-700">
                  Unique artisan-created piece
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#8b6b5b]" />

                <p className="text-gray-700">
                  Carefully curated for Soulcraft
                </p>
              </div>

              {product.customizable && (
                <div className="inline-flex items-center mt-4">

                  <span className="bg-[#efe4d8] text-[#8b6b5b] text-sm px-4 py-2 rounded-full">
                    Customizable
                  </span>

                </div>
              )}

            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-12">

              {/* Add To Cart */}
              <button
                onClick={() =>
                  setAddedToCart(
                    !addedToCart
                  )
                }
                className={`flex-1 py-4 rounded-2xl text-sm font-medium transition flex items-center justify-center gap-2 ${
                  addedToCart
                    ? "bg-green-600 text-white"
                    : "border border-[#1A1816] text-[#1A1816] hover:bg-[#1A1816] hover:text-white"
                }`}
              >
                {addedToCart ? (
                  <>
                    <Check size={18} />
                    Added to Cart
                  </>
                ) : (
                  <>
                    <ShoppingCart size={18} />
                    Add to Cart
                  </>
                )}
              </button>

              {/* Wishlist */}
              <button
                onClick={() =>
                  setWishlisted(
                    !wishlisted
                  )
                }
                className={`w-full sm:w-[70px] rounded-2xl border flex items-center justify-center transition ${
                  wishlisted
                    ? "bg-red-500 border-red-500 text-white"
                    : "border-[#1A1816] text-[#1A1816] hover:bg-[#1A1816] hover:text-white"
                }`}
              >
                <Heart
                  size={20}
                  className={
                    wishlisted
                      ? "fill-white"
                      : ""
                  }
                />
              </button>

            </div>

          </div>
        </div>

      </section>

      <Footer />

    </div>
  );
};

export default ProductDetails;