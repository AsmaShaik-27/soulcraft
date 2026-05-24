const categories = [
  "All",
  "Mandala",
  "Pottery",
  "Canvas",
  "Decor",
  "Woodcraft",
  "Resin",
];

const FiltersSidebar = ({
  selectedCategory,
  setSelectedCategory,
  customizableOnly,
  setCustomizableOnly,
}) => {
  return (
    <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm h-fit sticky top-24">
      
      <h2 className="text-xl font-semibold text-[#1A1816] mb-6">
        Filters
      </h2>

      <div className="space-y-8">

        {/* Categories */}
        <div>
          <h3 className="font-medium mb-4">
            Categories
          </h3>

          <div className="space-y-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() =>
                  setSelectedCategory(category)
                }
                className={`block text-sm transition ${
                  selectedCategory === category
                    ? "text-[#1A1816] font-semibold"
                    : "text-gray-500 hover:text-black"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Customization */}
        <div>
          <h3 className="font-medium mb-4">
            Customization
          </h3>

          <label className="flex items-center gap-3 text-sm text-gray-600 cursor-pointer">
            <input
              type="checkbox"
              checked={customizableOnly}
              onChange={() =>
                setCustomizableOnly(
                  !customizableOnly
                )
              }
            />

            Customizable Only
          </label>
        </div>
      </div>
    </div>
  );
};

export default FiltersSidebar;