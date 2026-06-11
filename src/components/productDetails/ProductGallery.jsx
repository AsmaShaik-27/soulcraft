const ProductGallery = ({ product }) => {
  return (
    <div className="w-full">
      <div className="w-full bg-white overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-[620px] lg:h-[700px] object-cover"
        />
      </div>
    </div>
  );
};

export default ProductGallery;