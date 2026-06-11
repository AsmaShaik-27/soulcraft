import { Heart, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { categoryDescriptions } from "../../data/productDescriptions";

const ProductInfo = ({ product }) => {
  const [wishlisted, setWishlisted] = useState(false);
  const [added, setAdded] = useState(false);

  const description =
  categoryDescriptions[product.category];
  return (
    <div className="lg:pt-8">
      <p
        className="text-sm uppercase tracking-[0.35em] text-[#8B6B4A] mb-8"
        style={{ fontFamily: "Inter" }}
      >
        {product.category}
      </p>

      <h1
        className="text-5xl md:text-6xl font-medium leading-[1.05] text-[#1A1816] max-w-xl"
        style={{ fontFamily: "Cormorant Garamond" }}
      >
        {product.title}
      </h1>

      <p
        className="mt-8 text-base text-neutral-700"
        style={{ fontFamily: "Inter" }}
      >
        by{" "}
        <span className="underline underline-offset-4 decoration-black/40 cursor-pointer hover:text-[#8B6B4A] transition">
          {product.artist}
        </span>
      </p>

      <div className="mt-12 border-y border-black/10 py-8">
        <p
          className="text-4xl text-[#1A1816]"
          style={{ fontFamily: "Cormorant Garamond" }}
        >
          ₹{product.price}
        </p>

        <p
          className="mt-6 max-w-xl text-[17px] text-neutral-600 leading-8"
          style={{ fontFamily: "Inter" }}
        >
          {description.shortDescription}
        </p>
      </div>

      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <button
          onClick={() => setAdded(true)}
          className="flex items-center justify-center gap-3 px-9 py-4 rounded-full bg-[#1A1816] text-white hover:bg-[#8B6B4A] transition text-base"
          style={{ fontFamily: "Inter" }}
        >
          <ShoppingCart size={18} />
          {added ? "Added to Cart" : "Add to Cart"}
        </button>

        <button
          className="px-9 py-4 rounded-full border border-[#1A1816] text-[#1A1816] hover:bg-[#1A1816] hover:text-white transition text-base"
          style={{ fontFamily: "Inter" }}
        >
          Buy Now
        </button>

        <button
          onClick={() => setWishlisted(!wishlisted)}
          className={`w-14 h-14 rounded-full border flex items-center justify-center transition ${
            wishlisted
              ? "bg-[#8B6B4A] text-white border-[#8B6B4A]"
              : "border-[#1A1816] text-[#1A1816] hover:bg-[#1A1816] hover:text-white"
          }`}
        >
          <Heart size={20} fill={wishlisted ? "white" : "none"} />
        </button>
      </div>

      <div
        className="mt-12 grid grid-cols-2 gap-6 text-sm"
        style={{ fontFamily: "Inter" }}
      >
        <div className="border-t border-black/10 pt-5">
          <p className="text-[#1A1816] font-medium mb-2">Customizable</p>
          <p className="text-neutral-600">
            {product.customizable ? "Available" : "Not available"}
          </p>
        </div>

        <div className="border-t border-black/10 pt-5">
          <p className="text-[#1A1816] font-medium mb-2">Delivery</p>
          <p className="text-neutral-600">5–8 business days</p>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;