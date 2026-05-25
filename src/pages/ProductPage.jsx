import ProductGallery from "../components/productDetails/ProductGallery";
import ProductInfo from "../components/productDetails/ProductInfo";
import ProductTabs from "../components/productDetails/ProductTabs";
import ArtistSection from "../components/productDetails/ArtistSection";

const ProductPage = () => {
  return (
    <div className="bg-[#f5f3ef] min-h-screen">

      {/* Product Content */}
      <div className="max-w-[1500px] mx-auto px-6 lg:px-10 py-10">

        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_0.9fr] gap-10 items-start">

          <ProductGallery />

          <ProductInfo />

        </div>

        {/* Tabs */}
        <div className="mt-20">
          <ProductTabs />
        </div>

        {/* Artist */}
        <div className="mt-20 mb-20">
          <ArtistSection />
        </div>

      </div>
    </div>
  );
};

export default ProductPage;