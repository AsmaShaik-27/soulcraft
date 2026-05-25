import { useState } from "react";

const ProductTabs = () => {

  const [activeTab, setActiveTab] = useState("about");

  return (
    <div>

      {/* Tabs */}
      <div className="flex gap-14 border-b border-neutral-400 overflow-x-auto">

        <button
          onClick={() => setActiveTab("about")}
          className={`pb-5 text-xl whitespace-nowrap ${
            activeTab === "about"
              ? "border-b-2 border-black text-black"
              : "text-neutral-400"
          }`}
        >
          ABOUT THE ARTWORK
        </button>

        <button
          onClick={() => setActiveTab("details")}
          className={`pb-5 text-xl whitespace-nowrap ${
            activeTab === "details"
              ? "border-b-2 border-black text-black"
              : "text-neutral-400"
          }`}
        >
          DETAILS AND DIMENSIONS
        </button>

        <button
          onClick={() => setActiveTab("shipping")}
          className={`pb-5 text-xl whitespace-nowrap ${
            activeTab === "shipping"
              ? "border-b-2 border-black text-black"
              : "text-neutral-400"
          }`}
        >
          SHIPPING AND RETURNS
        </button>

      </div>

      {/* Content */}
      <div className="mt-12">

        {activeTab === "about" && (
          <div className="max-w-6xl">

            <p className="text-[34px] leading-[1.5] text-[#1A1816]">
              Inspired by traditional Indian sacred geometry, this mandala
              artwork was handcrafted using layered acrylic detailing and earthy
              tones to create a calming spiritual atmosphere for modern
              interiors.
            </p>

          </div>
        )}

        {activeTab === "details" && (
          <div className="space-y-8 text-[24px] max-w-4xl">

            <div className="grid grid-cols-2">
              <span>Dimensions</span>
              <span>24 x 36 inches</span>
            </div>

            <div className="grid grid-cols-2">
              <span>Frame</span>
              <span>Included</span>
            </div>

            <div className="grid grid-cols-2">
              <span>Material</span>
              <span>Acrylic on Canvas</span>
            </div>

            <div className="grid grid-cols-2">
              <span>Customization</span>
              <span>Available</span>
            </div>

          </div>
        )}

        {activeTab === "shipping" && (
          <div className="max-w-5xl">

            <p className="text-[28px] leading-[1.7] text-[#1A1816]">
              Ships within 5–7 business days with secure premium packaging.
              Returns are accepted only for damaged items within 7 days of
              delivery. Customized artworks cannot be returned once production
              begins.
            </p>

          </div>
        )}

      </div>

    </div>
  );
};

export default ProductTabs;