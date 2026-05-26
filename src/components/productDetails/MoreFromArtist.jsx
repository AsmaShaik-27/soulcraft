import { Link } from "react-router-dom";
import { products } from "../../data/products";

const MoreFromArtist = ({ currentProduct }) => {
  const relatedProducts = products
    .filter(
      (item) =>
        item.artist === currentProduct.artist &&
        item.id !== currentProduct.id
    )
    .slice(0, 4);

  if (relatedProducts.length === 0) return null;

  return (
    <section className="mt-20">
      <div className="mb-8">
        <p className="text-sm uppercase tracking-[0.35em] text-[#9a7555] mb-3">
          More from this artist
        </p>
        <h2 className="font-serif text-4xl md:text-5xl">
          Explore Similar Pieces
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {relatedProducts.map((item) => (
          <Link
            to={`/product/${item.id}`}
            key={item.id}
            className="group bg-white border border-[#ddd4ca]"
          >
            <div className="h-72 overflow-hidden bg-[#eee8df]">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
            </div>

            <div className="p-5">
              <h3 className="font-serif text-2xl mb-1">{item.title}</h3>
              <p className="text-[#7a7067] mb-3">{item.artist}</p>
              <p className="font-medium">
                ₹{item.price.toLocaleString("en-IN")}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default MoreFromArtist;