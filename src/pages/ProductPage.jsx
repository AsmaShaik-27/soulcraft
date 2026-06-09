import { useParams } from "react-router-dom";
import Navbar from "../components/home/Navbar";
import Footer from "../layouts/Footer";
import { products } from "../data/products";

import ProductGallery from "../components/productDetails/ProductGallery"; 
import ProductInfo from "../components/productDetails/ProductInfo";
import ArtistCard from "../components/productDetails/ArtistCard";
import ArtworkCarousel from "../components/productDetails/ArtworkCarousel";

const ProductPage = () => {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <>
        <Navbar />
        <div className="pt-40 text-center">
          <h1 className="text-3xl font-serif">Artwork not found</h1>
        </div>
        <Footer />
      </>
    );
  }

  const moreFromArtist = products.filter(
    (item) =>
      item.artist === product.artist &&
      item.id !== product.id
  );

  const similarArtworks = products.filter(
    (item) =>
      item.category === product.category &&
      item.id !== product.id
  );

  return (
    <>
      <Navbar />

      <main className="bg-[#f8f5f0] pt-28">
        <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-14 grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          <ProductGallery product={product} />
          <ProductInfo product={product} />
        </section>

        <ArtistCard product={product} />

        {moreFromArtist.length > 0 && (
          <ArtworkCarousel
            title="More From This Artist"
            products={moreFromArtist}
          />
        )}

        {similarArtworks.length > 0 && (
          <ArtworkCarousel
            title="Similar Artworks"
            products={similarArtworks}
          />
        )}
      </main>

      <Footer />
    </>
  );
};

export default ProductPage;