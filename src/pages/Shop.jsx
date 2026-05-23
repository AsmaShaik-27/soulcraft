import { useState } from "react";

import Navbar from "../components/home/Navbar";
import Footer from "../layouts/Footer";

import ShopHero from "../components/product/ShopHero";
import FiltersSidebar from "../components/product/FiltersSidebar";
import ProductGrid from "../components/product/ProductGrid";

import { products } from "../data/products";

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [customizableOnly, setCustomizableOnly] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "All" ||
      product.category === selectedCategory;

    const matchesCustomization =
      !customizableOnly || product.customizable;

    const matchesSearch =
      product.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      product.artist
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      product.category
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

    return (
      matchesCategory &&
      matchesCustomization &&
      matchesSearch
    );
  });

  return (
    <div className="bg-[#fcfaf8] min-h-screen">
      <Navbar />

      <ShopHero />

      <section className="px-6 md:px-12 lg:px-20 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-10">
          
          {/* Sidebar */}
          <div>
            <FiltersSidebar
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              customizableOnly={customizableOnly}
              setCustomizableOnly={setCustomizableOnly}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />
          </div>

          {/* Products */}
          <div className="lg:col-span-3">

            <p className="text-gray-500 mb-6">
              Showing {filteredProducts.length} products
            </p>

            <ProductGrid products={filteredProducts} />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Shop;