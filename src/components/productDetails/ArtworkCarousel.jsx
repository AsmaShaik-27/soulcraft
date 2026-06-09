import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import { Link } from "react-router-dom";

const ArtworkCarousel = ({ title, products }) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -320 : 320,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-12">
      <div className="flex items-center justify-between mb-7">
        <h2
          className="text-3xl md:text-4xl text-[#1A1816]"
          style={{ fontFamily: "Cormorant Garamond" }}
        >
          {title}
        </h2>

        <div className="flex gap-3">
          <button
            onClick={() => scroll("left")}
            className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-[#1A1816] hover:text-white transition"
          >
            <ChevronLeft size={18} />
          </button>

          <button
            onClick={() => scroll("right")}
            className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-[#1A1816] hover:text-white transition"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scroll-smooth pb-4 no-scrollbar"
      >
        {products.slice(0, 6).map((item) => (
          <Link
            to={`/product/${item.id}`}
            key={item.id}
            className="min-w-[260px] bg-white rounded-3xl overflow-hidden shadow-sm group"
          >
            <div className="h-72 overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
            </div>

            <div className="p-5">
              <h3 className="text-lg text-[#1A1816] mb-1">
                {item.title}
              </h3>

              <p className="text-sm text-neutral-500 mb-3">
                by {item.artist}
              </p>

              <p className="text-[#1A1816]">₹{item.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ArtworkCarousel;