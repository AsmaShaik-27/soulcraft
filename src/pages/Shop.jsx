import { useState } from "react";

import { Search } from "lucide-react";

import Navbar from "../components/home/Navbar";
import Footer from "../layouts/Footer";

import ShopHero from "../components/product/ShopHero";
import FiltersSidebar from "../components/product/FiltersSidebar";
import ProductGrid from "../components/product/ProductGrid";

import { products } from "../data/products";

const Shop = () => {
  const [selectedCategory, setSelectedCategory] =
    useState("All");

  const [customizableOnly, setCustomizableOnly] =
    useState(false);

  const [searchTerm, setSearchTerm] =
    useState("");

  const [sortBy, setSortBy] =
    useState("featured");

  // FILTER PRODUCTS
  let filteredProducts = products.filter(
    (product) => {
      const matchesCategory =
        selectedCategory === "All" ||
        product.category === selectedCategory;

      const matchesCustomization =
        !customizableOnly ||
        product.customizable;

      const matchesSearch =
        product.title
          .toLowerCase()
          .includes(
            searchTerm.toLowerCase()
          ) ||
        product.artist
          .toLowerCase()
          .includes(
            searchTerm.toLowerCase()
          ) ||
        product.category
          .toLowerCase()
          .includes(
            searchTerm.toLowerCase()
          );

      return (
        matchesCategory &&
        matchesCustomization &&
        matchesSearch
      );
    }
  );

  // SORTING
  if (sortBy === "low") {
    filteredProducts.sort(
      (a, b) => a.price - b.price
    );
  }

  if (sortBy === "high") {
    filteredProducts.sort(
      (a, b) => b.price - a.price
    );
  }

  return (
    <div className="bg-[#fcfaf8] min-h-screen">

      <Navbar />

      <ShopHero />

      <section className="px-6 md:px-12 lg:px-20 py-16">

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-10">

          {/* Sidebar */}
          <div>

            <FiltersSidebar
              selectedCategory={
                selectedCategory
              }
              setSelectedCategory={
                setSelectedCategory
              }
              customizableOnly={
                customizableOnly
              }
              setCustomizableOnly={
                setCustomizableOnly
              }
            />

          </div>

          {/* Products */}
          <div className="lg:col-span-3">

            {/* Top Section */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-10">

              {/* Left */}
              <div>

                <h2
                  className="text-3xl md:text-4xl text-[#1A1816]"
                  style={{
                    fontFamily:
                      "Cormorant Garamond",
                    fontWeight: 600,
                  }}
                >
                  Discover Handmade Art
                </h2>

                <p className="text-gray-500 mt-2 text-sm md:text-base">
                  Showing{" "}
                  {
                    filteredProducts.length
                  }{" "}
                  curated artworks
                </p>

              </div>

              {/* Right Controls */}
              <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">

                {/* Search */}
                <div className="relative w-full sm:w-[320px]">

                  <Search
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    type="text"
                    placeholder="Search artworks..."
                    value={searchTerm}
                    onChange={(e) =>
                      setSearchTerm(
                        e.target.value
                      )
                    }
                    className="
                      w-full
                      pl-11
                      pr-4
                      py-3
                      rounded-2xl
                      border-2
                      border-[#ece4dc]
                      bg-white
                      shadow-sm
                      outline-none
                      transition-all
                      duration-300
                      focus:border-[#c8a27a]
                      focus:ring-4
                      focus:ring-[#f1e4d8]
                      text-[#1A1816]
                      placeholder:text-gray-400
                    "
                  />

                </div>

                {/* Sort */}
                <div className="relative">

                  <select
                    value={sortBy}
                    onChange={(e) =>
                      setSortBy(
                        e.target.value
                      )
                    }
                    className="
                      appearance-none
                      min-w-[220px]
                      px-5
                      py-3
                      rounded-2xl
                      border-2
                      border-[#d8c7b8]
                      bg-[#fcfcfc]
                      text-[#1A1816]
                      font-medium
                      shadow-sm
                      outline-none
                      cursor-pointer
                      transition-all
                      duration-300
                      hover:border-[#b08968]
                      hover:bg-white
                      focus:border-[#b08968]
                      focus:ring-4
                      focus:ring-[#e8d8ca]
                    "
                  >
                    <option value="featured">
                      Featured
                    </option>

                    <option value="low">
                      ↑ Price: Low to High
                    </option>

                    <option value="high">
                      ↓ Price: High to Low
                    </option>

                  </select>

                  {/* Arrow */}
                  <div className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-[#8b6b5b] text-sm">
                    ▼
                  </div>

                </div>

              </div>
            </div>

            {/* Product Grid */}
            <ProductGrid
              products={filteredProducts}
            />

          </div>
        </div>
      </section>

      <Footer />

    </div>
  );
};

export default Shop;