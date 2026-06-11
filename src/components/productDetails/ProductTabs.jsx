import { useState } from "react";
import { categoryDescriptions } from "../../data/productDescriptions";

const ProductTabs = ({ product }) => {
  const [activeTab, setActiveTab] = useState("about");

  const tabs = [
    { id: "about", label: "About" },
    { id: "details", label: "Details" },
    { id: "shipping", label: "Shipping" },
  ];
  const description =
  categoryDescriptions[product.category];

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-[0.45fr_1fr] gap-12 border-t border-black/10 pt-12">
        <div>
          <p
            className="text-sm uppercase tracking-[0.3em] text-[#8B6B4A] mb-4"
            style={{ fontFamily: "Inter" }}
          >
            Artwork Notes
          </p>

          <h2
            className="text-4xl md:text-5xl font-medium leading-tight text-[#1A1816]"
            style={{ fontFamily: "Cormorant Garamond" }}
          >
            A closer look at the piece
          </h2>
        </div>

        <div>
          <div className="flex gap-10 border-b border-black/10 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`pb-4 text-sm uppercase tracking-[0.2em] transition ${
                  activeTab === tab.id
                    ? "text-[#1A1816] border-b border-[#1A1816]"
                    : "text-neutral-400 hover:text-[#1A1816]"
                }`}
                style={{ fontFamily: "Inter" }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div
            className="pt-8 text-neutral-600 leading-8 text-[16px]"
            style={{ fontFamily: "Inter" }}
          >
            {activeTab === "about" && (
                <div className="max-w-3xl space-y-8">
                    <p
                        className="text-xl md:text-2xl text-neutral-700 leading-[1.8]"
                        style={{ fontFamily: "Cormorant Garamond" }}
                    >
                        {description.about}
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-black/10">
                    <div>
                        <p className="text-xs uppercase tracking-wider text-neutral-500">
                        Medium
                        </p>

                        <p className="mt-2 text-[#1A1816]">
                        {product.medium}
                        </p>
                    </div>

                    <div>
                        <p className="text-xs uppercase tracking-wider text-neutral-500">
                        Size
                        </p>

                        <p className="mt-2 text-[#1A1816]">
                        {product.size}
                        </p>
                    </div>

                    <div>
                        <p className="text-xs uppercase tracking-wider text-neutral-500">
                        Category
                        </p>

                        <p className="mt-2 text-[#1A1816]">
                        {product.category}
                        </p>
                    </div>

                    <div>
                        <p className="text-xs uppercase tracking-wider text-neutral-500">
                        Custom Order
                        </p>

                        <p className="mt-2 text-[#1A1816]">
                        {product.customizable
                            ? "Available"
                            : "Not Available"}
                        </p>
                    </div>
                    </div>
                </div>
                )}

            {activeTab === "details" && (
              <div className="grid sm:grid-cols-2 gap-y-5 gap-x-10 max-w-3xl">
                <p>
                  <span className="text-[#1A1816]">Category:</span>{" "}
                  {product.category}
                </p>
                <p>
                  <span className="text-[#1A1816]">Artist:</span>{" "}
                  {product.artist}
                </p>
                <p>
                  <span className="text-[#1A1816]">Material:</span> Premium
                  handmade artwork
                </p>
                <p>
                  <span className="text-[#1A1816]">Finish:</span> Ready to
                  display
                </p>
              </div>
            )}

            {activeTab === "shipping" && (
              <p className="max-w-3xl">
                Orders are packed safely and shipped within 5–8 business days.
                Returns are accepted only for damaged or incorrect products.
                Customized artworks cannot be returned once confirmed.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductTabs;