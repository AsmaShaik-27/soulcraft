import { useEffect, useState } from "react";
import { Heart, ShoppingBag } from "lucide-react";

const ProductHero = ({ product }) => {
  const images = product.gallery?.length ? product.gallery : [product.image];

  const [selectedImage, setSelectedImage] = useState(images[0]);

  useEffect(() => {
    setSelectedImage(images[0]);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [product.id]);

  return (
    <section className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-16 items-start">

      {/* Gallery */}
      <div className="grid grid-cols-[80px_1fr] gap-4">
        <div className="flex flex-col gap-4">
          {images.map((img, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(img)}
              className={`h-20 border overflow-hidden bg-white ${
                selectedImage === img
                  ? "border-[#1A1816]"
                  : "border-[#ddd4ca]"
              }`}
            >
              <img
                src={img}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>

        <div className="bg-white border border-[#ddd4ca] p-4">
          <div className="h-[520px] md:h-[620px] lg:h-[680px] bg-[#eee8df] overflow-hidden">
            <img
              src={selectedImage}
              alt={product.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Details */}
      <div className="lg:sticky lg:top-28 bg-[#f6f3ef] pt-2">
        <p className="text-sm uppercase tracking-[0.35em] text-[#9a7555] mb-5">
          Original Handmade Artwork
        </p>

        <h1 className="font-serif text-5xl md:text-6xl leading-tight mb-5">
          {product.title}
        </h1>

        <p className="text-xl mb-2">
          by <span className="text-[#9a5b35]">{product.artist}</span>
        </p>

        <p className="text-[#6f675f] mb-10">
          {product.location || "Hyderabad, India"}
        </p>

        <div className="space-y-3 text-lg mb-10 text-[#3f3933]">
          <p>{product.medium || "Acrylic on Canvas"}</p>
          <p>{product.size || "24 × 36 inches"}</p>
          <p>Handmade {product.customizable ? "• Customizable" : ""}</p>
        </div>

        <div className="border-t border-[#d8cec3] pt-8">
          <p className="text-4xl font-semibold mb-7">
            ₹{product.price.toLocaleString("en-IN")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-[#1A1816] text-white px-10 py-4 uppercase tracking-[0.2em] text-sm flex items-center justify-center gap-3 hover:bg-[#3a3029] transition">
              <ShoppingBag size={18} />
              Add to Cart
            </button>

            <button className="bg-[#b96a3c] text-white px-10 py-4 uppercase tracking-[0.2em] text-sm hover:bg-[#9f5730] transition">
              Buy Now
            </button>
          </div>

          <button className="mt-5 flex items-center gap-2 text-[#4f4841] hover:text-black">
            <Heart size={18} />
            Add to Wishlist
          </button>
        </div>
      </div>

    </section>
  );
};

export default ProductHero;