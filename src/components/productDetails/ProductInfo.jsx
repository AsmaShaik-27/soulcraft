import { Heart } from "lucide-react";

const ProductInfo = () => {
  return (
    <div className="bg-[#f1f1f1] p-8 lg:p-10">

      <h1 className="text-5xl leading-tight font-medium text-[#1A1816]">
        Sacred Geometry Mandala Artwork
      </h1>

      <button className="mt-5 text-[#c45c2f] text-2xl hover:underline">
        Priya Arts
      </button>

      <p className="text-2xl mt-2 text-[#1A1816]">
        Hyderabad, India
      </p>

      <div className="mt-10 space-y-5 text-[22px] text-[#1A1816]">

        <p>
          Acrylic Painting, Canvas
        </p>

        <p>
          Size: 24 W x 36 H inches
        </p>

        <p>
          Handmade & Customizable
        </p>

      </div>

      {/* Purchase Box */}
      <div className="bg-[#2b2b2b] mt-14 p-8">

        <div className="flex items-center justify-between">

          <h2 className="text-5xl text-white font-semibold">
            ₹3,200
          </h2>

          <button className="bg-[#d84c1f] hover:bg-[#bf4219] transition text-white px-10 py-5 text-xl font-medium">
            ADD TO CART
          </button>

        </div>

        <div className="mt-8 flex items-center gap-3 text-white text-lg cursor-pointer hover:text-neutral-300">
          <Heart size={20} />
          <span>Add to Wishlist</span>
        </div>

      </div>

      <div className="mt-10 space-y-5 text-[20px] text-[#1A1816]">

        <p>✔ Shipping included</p>

        <p>✔ Certificate of authenticity included</p>

        <p>✔ Secure packaging guaranteed</p>

      </div>

    </div>
  );
};

export default ProductInfo;