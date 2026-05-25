const specs = [
  { label: "Material", value: "Acrylic on Canvas" },
  { label: "Size", value: "24 x 36 inches" },
  { label: "Frame", value: "Wooden Frame Included" },
  { label: "Category", value: "Mandala Art" },
  { label: "Customization", value: "Available" },
  { label: "Delivery", value: "5–7 Business Days" },
];

const ProductSpecs = () => {
  return (
    <section>
      <h2 className="text-3xl font-semibold mb-8">Artwork Details</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {specs.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-3xl shadow-sm"
          >
            <p className="text-sm text-neutral-500">{item.label}</p>
            <h3 className="mt-2 text-lg font-medium">{item.value}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductSpecs;