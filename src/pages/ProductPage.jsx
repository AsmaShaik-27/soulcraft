import { useParams, Link } from "react-router-dom";
import Navbar from "../components/home/Navbar";
import { products } from "../data/products";

import ProductHero from "../components/productDetails/ProductHero";
import ArtistQuote from "../components/productDetails/ArtistQuote";
import ProductSpecs from "../components/productDetails/ProductSpecs";
import ArtistMiniProfile from "../components/productDetails/ArtistMiniProfile";
import MoreFromArtist from "../components/productDetails/MoreFromArtist";
import SimilarArtworks from "../components/productDetails/SimilarArtworks";
import Footer from "../layouts/Footer";

const ProductPage = () => {
  const { id } = useParams();

  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen pt-40 flex items-center justify-center bg-[#f6f3ef]">
          <h1 className="font-serif text-4xl">Product not found</h1>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main className="bg-[#f6f3ef] pt-28 pb-20 text-[#1A1816]">
        <div className="max-w-[1450px] mx-auto px-4 md:px-8 lg:px-12">

          {/* Breadcrumb */}
          <div className="mb-8 text-sm text-[#7a7067]">
            <Link to="/" className="hover:text-black">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/shop" className="hover:text-black">Shop</Link>
            <span className="mx-2">/</span>
            <span className="text-black">{product.title}</span>
          </div>

          <ProductHero product={product} />
          <ArtistQuote product={product} />
          <ProductSpecs product={product} />
          <ArtistMiniProfile product={product} />
          <MoreFromArtist currentProduct={product} />
          <SimilarArtworks currentProduct={product} />

        </div>
      </main>

      <Footer />
    </>
  );
};

export default ProductPage;