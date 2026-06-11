import { useParams } from "react-router-dom";
import Navbar from "../components/home/Navbar";
import Footer from "../layouts/Footer";
import { products } from "../data/products";

import ProductGallery from "../components/productDetails/ProductGallery";
import ProductInfo from "../components/productDetails/ProductInfo";
import ProductTabs from "../components/productDetails/ProductTabs";
import ArtworkMiniProfile from "../components/productDetails/ArtistMiniProfile";
import SimilarArtworks from "../components/productDetails/SimilarArtworks";

const ProductPage = () => {
  const { id } = useParams();

  const product =
    products.find((item) => item.id === Number(id)) || products[0];

  return (
    <div className="min-h-screen bg-[#f8f5f1] text-[#1A1816]">
      <Navbar />

      <main className="pt-28">
        <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_0.95fr] gap-16 items-start">
            <ProductGallery product={product} />
            <ProductInfo product={product} />
          </div>
        </section>

        <ProductTabs product={product} />

        <ArtworkMiniProfile product={product} />

        <SimilarArtworks currentProduct={product} />
      </main>

      <Footer />
    </div>
  );
};

export default ProductPage;