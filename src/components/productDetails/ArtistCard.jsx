import { Link } from "react-router-dom";

const ArtistCard = ({ product }) => {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-10">
      <div className="bg-white rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center md:items-start gap-8 shadow-sm">
        <img
          src={
            product.artistImage ||
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop"
          }
          alt={product.artist}
          className="w-28 h-28 rounded-full object-cover"
        />

        <div className="text-center md:text-left flex-1">
          <p className="text-sm uppercase tracking-[0.3em] text-[#8B6B4A] mb-3">
            Meet The Artist
          </p>

          <h2
            className="text-3xl text-[#1A1816] mb-3"
            style={{ fontFamily: "Cormorant Garamond" }}
          >
            {product.artist}
          </h2>

          <p className="text-neutral-600 leading-7 max-w-2xl">
            An independent artist creating soulful handmade pieces with attention
            to detail, texture and emotion.
          </p>
        </div>

        <Link
          to={`/artist/${product.artist}`}
          className="px-7 py-3 border border-[#1A1816] rounded-full hover:bg-[#1A1816] hover:text-white transition"
        >
          View Profile
        </Link>
      </div>
    </section>
  );
};

export default ArtistCard;