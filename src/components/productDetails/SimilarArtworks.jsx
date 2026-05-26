import { useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { products } from "../../data/products";

const SimilarArtworks = ({ currentProduct }) => {
  const scrollRef = useRef(null);

  const similarProducts = products
    .filter((item) => item.id !== currentProduct.id)
    .slice(0, 8);

  const scroll = (direction) => {
    if (!scrollRef.current) return;

    scrollRef.current.scrollBy({
      left: direction === "left" ? -360 : 360,
      behavior: "smooth",
    });
  };

  return (
    <section className="mt-20 relative">
      <div className="flex items-end justify-between mb-8">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-[#9a7555] mb-3">
            You may also like
          </p>

          <h2 className="font-serif text-4xl md:text-5xl">
            Similar Artworks
          </h2>
        </div>

        <div className="hidden md:flex gap-3">
          <button
            onClick={() => scroll("left")}
            className="w-11 h-11 border border-[#1A1816] flex items-center justify-center hover:bg-[#1A1816] hover:text-white transition"
          >
            <ChevronLeft size={22} />
          </button>

          <button
            onClick={() => scroll("right")}
            className="w-11 h-11 border border-[#1A1816] flex items-center justify-center hover:bg-[#1A1816] hover:text-white transition"
          >
            <ChevronRight size={22} />
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
            className="min-w-[290px] md:min-w-[340px] bg-white border border-[#ddd4ca] group"
          >
            <div className="h-[360px] overflow-hidden bg-[#eee8df]">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
            </div>

            <div className="p-5">
              <h3 className="font-serif text-2xl mb-1 line-clamp-1">
                {item.title}
              </h3>

              <p className="text-sm text-[#7a7067] mb-3 line-clamp-1">
                by {item.artist}
              </p>

              <p className="font-medium text-lg">
                ₹{item.price.toLocaleString("en-IN")}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default SimilarArtworks;