const ArtistQuote = ({ product }) => {
  return (
    <section className="mt-24 py-16 border-y border-[#d8cec3] text-center">
      <p className="text-sm uppercase tracking-[0.35em] text-[#9a7555] mb-8">
        Artist Note
      </p>

      <h2 className="font-serif text-4xl md:text-6xl leading-tight max-w-5xl mx-auto">
        “Art is not only decoration. It is a feeling that stays inside a space.”
      </h2>

      <p className="mt-8 text-lg text-[#6f675f]">
        — {product.artist}
      </p>
    </section>
  );
};

export default ArtistQuote;