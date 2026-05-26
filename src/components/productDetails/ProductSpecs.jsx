const ProductSpecs = ({ product }) => {
  const specs = [
    ["Artwork", product.title],
    ["Artist", product.artist],
    ["Medium", product.medium || "Acrylic Painting"],
    ["Surface", product.surface || "Canvas"],
    ["Size", product.size || "24 × 36 inches"],
    ["Frame", product.frame || "Not Included"],
    ["Category", product.category || "Artwork"],
    ["Customizable", product.customizable ? "Yes" : "No"],
  ];

  return (
    <section className="mt-20">
      <div className="mb-8">
        <p className="text-sm uppercase tracking-[0.35em] text-[#9a7555] mb-3">
          Product Details
        </p>

        <h2 className="font-serif text-4xl md:text-5xl">
          Details & Dimensions
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-[#d8cec3] bg-white">
        {specs.map(([label, value]) => (
          <div key={label} className="p-5 border-r border-b border-[#d8cec3]">
            <p className="text-sm text-[#8a7f75] mb-2">{label}</p>
            <p className="text-lg">{value}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductSpecs;