import { useState } from "react";
import Navbar from "../components/home/Navbar";
import Footer from "../layouts/Footer";
import { products } from "../data/products";
import ProductCard from "../components/product/ProductCard";
import AnimatedSearch from "../components/product/AnimatedSearch";

const categories = [
  "All",
  "Painting",
  "Mandala",
  "Pencil Art",
  "Crochet",
  "Resin",
  "Glass Painting",
];

const Shop = () => {
  const [sortBy, setSortBy] = useState("featured");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;

    const matchesSearch =
      product.title.toLowerCase().includes(search.toLowerCase()) ||
      product.artist.toLowerCase().includes(search.toLowerCase()) ||
      product.category.toLowerCase().includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "low-high") {
      return a.price - b.price;
    }

    if (sortBy === "high-low") {
      return b.price - a.price;
    }

    if (sortBy === "newest") {
      return b.id - a.id;
    }

    return 0;
  });

  return (
    <>
      <Navbar />

      <main className="bg-[#faf8f5] pt-32 pb-20">
        <section className="w-full px-6 md:px-10 lg:px-14 xl:px-20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
            <div className="w-full md:max-w-2xl">
              <AnimatedSearch search={search} setSearch={setSearch} />
            </div>

            <div className="flex items-center gap-6 text-sm md:text-base whitespace-nowrap">
              <button
                onClick={() => setSortBy("featured")}
                className={`transition ${
                  sortBy === "featured"
                    ? "text-[#1A1816] font-medium"
                    : "text-neutral-500 hover:text-[#1A1816]"
                }`}
              >
                Featured
              </button>

              <button
                onClick={() => setSortBy("newest")}
                className={`transition ${
                  sortBy === "newest"
                    ? "text-[#1A1816] font-medium"
                    : "text-neutral-500 hover:text-[#1A1816]"
                }`}
              >
                Newest
              </button>

              <button
                onClick={() => setSortBy("low-high")}
                className={`transition ${
                  sortBy === "low-high"
                    ? "text-[#1A1816] font-medium"
                    : "text-neutral-500 hover:text-[#1A1816]"
                }`}
              >
                Price ↑
              </button>

              <button
                onClick={() => setSortBy("high-low")}
                className={`transition ${
                  sortBy === "high-low"
                    ? "text-[#1A1816] font-medium"
                    : "text-neutral-500 hover:text-[#1A1816]"
                }`}
              >
                Price ↓
              </button>
            </div>
          </div>

          <div className="flex gap-6 overflow-x-auto pb-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`pb-2 whitespace-nowrap text-sm md:text-base border-b transition ${
                  selectedCategory === category
                    ? "text-[#1A1816] border-[#1A1816]"
                    : "text-neutral-500 border-transparent hover:text-[#1A1816]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {sortedProducts.length === 0 ? (
            <div className="text-center py-24">
              <h2
                className="text-3xl text-[#1A1816]"
                style={{ fontFamily: "Cormorant Garamond" }}
              >
                No artworks found
              </h2>
              <p className="text-neutral-500 mt-2">
                Try searching with another artwork, artist, or category.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-12 gap-y-20">
              {sortedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Shop;