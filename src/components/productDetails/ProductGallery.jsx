const ProductGallery = ({ product }) => {
  return (
    <div className="w-full">
      <div className="bg-white p-4 rounded-3xl shadow-sm">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-[520px] object-cover rounded-2xl"
        />
      </div>
    </div>
  );
};

export default ProductGallery;