import { Heart, ShoppingBag } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const [wishlisted, setWishlisted] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  return (
    <div className="group">
      <Link
        to={`/product/${product.id}`}
        className="relative block overflow-hidden"
      >
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-[360px] object-cover transition duration-500 group-hover:scale-[1.03]"
        />

        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition duration-300" />
      </Link>

      <div className="pt-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xl text-[#1A1816] mb-2">
              ₹{product.price}
            </p>

            <Link to={`/product/${product.id}`}>
              <h3 className="text-lg text-[#1A1816] leading-snug hover:underline">
                {product.title}
              </h3>
            </Link>

            <Link
              to={`/artist/${product.artist}`}
              className="block text-neutral-600 mt-1 hover:underline"
            >
              {product.artist}, India
            </Link>

            <p className="text-neutral-500 text-sm mt-1">
              {product.medium} &nbsp;•&nbsp; {product.size}
            </p>
          </div>

          <div className="flex items-center gap-4 pt-1">
            <button
              onClick={() => setWishlisted(!wishlisted)}
              className="hover:scale-110 transition"
            >
              <Heart
                size={23}
                strokeWidth={1.7}
                fill={wishlisted ? "#1A1816" : "none"}
              />
            </button>

            <button
              onClick={() => setAddedToCart(!addedToCart)}
              className="hover:scale-110 transition"
            >
              <ShoppingBag
                size={23}
                strokeWidth={1.7}
                fill={addedToCart ? "#1A1816" : "none"}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;