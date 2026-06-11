import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { products } from "../../data/products";

const SimilarArtworks = ({ currentProduct }) => {
  const scrollRef = useRef(null);

  const similarProducts = products.filter(
    (item) => item.id !== currentProduct.id
  );

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -350 : 350,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16">
      <div className="flex items-center justify-between mb-8">
        <div>
          <p
            className="text-sm uppercase tracking-[0.25em] text-[#8B6B4A] mb-2"
            style={{ fontFamily: "Inter" }}
          >
            Explore More
          </p>

          <h2
            className="text-4xl font-medium text-[#1A1816]"
            style={{ fontFamily: "Cormorant Garamond" }}
          >
            Similar Artworks
          </h2>
        </div>

        <div className="hidden md:flex gap-3">
          <button
            onClick={() => scroll("left")}
            className="w-11 h-11 rounded-full border border-black/20 flex items-center justify-center hover:bg-[#1A1816] hover:text-white transition"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={() => scroll("right")}
            className="w-11 h-11 rounded-full border border-black/20 flex items-center justify-center hover:bg-[#1A1816] hover:text-white transition"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scroll-smooth pb-4 scrollbar-hide"
      >
        {similarProducts.map((item) => (
          <Link
            to={`/product/${item.id}`}
            key={item.id}
            className="min-w-[260px] bg-white rounded-[1.5rem] overflow-hidden border border-black/5 group"
          >
            <div className="h-72 overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
              />
            </div>

            <div className="p-5">
              <h3
                className="text-xl font-medium text-[#1A1816]"
                style={{ fontFamily: "Cormorant Garamond" }}
              >
                {item.title}
              </h3>

              <p
                className="text-sm text-neutral-500 mt-1"
                style={{ fontFamily: "Inter" }}
              >
                by {item.artist}
              </p>

              <p
                className="text-[#1A1816] mt-3"
                style={{ fontFamily: "Inter" }}
              >
                ₹{item.price}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default SimilarArtworks;