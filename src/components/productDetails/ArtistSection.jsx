const ArtistSection = () => {
  return (
    <div className="bg-[#efefef] p-10 md:p-14">

      <div className="flex flex-col lg:flex-row justify-between gap-10">

        {/* Left */}
        <div className="flex gap-8">

          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400"
            alt="Artist"
            className="w-44 h-44 rounded-full object-cover"
          />

          <div>

            <h2 className="text-5xl font-medium text-[#1A1816]">
              Priya Arts
            </h2>

            <p className="text-2xl mt-3 text-neutral-700">
              Hyderabad, India
            </p>

          </div>

        </div>

        {/* Right */}
        <button className="border border-black px-10 py-5 h-fit text-xl hover:bg-black hover:text-white transition">
          View Profile
        </button>

      </div>

      <p className="mt-16 text-[30px] leading-[1.7] text-[#1A1816]">
        Priya specializes in handcrafted mandala paintings inspired by Indian
        heritage, sacred geometry, and earthy contemporary interiors. Her work
        blends spiritual symbolism with modern artistic expression, creating
        visually calming and emotionally immersive experiences.
      </p>

    </div>
  );
};

export default ArtistSection;