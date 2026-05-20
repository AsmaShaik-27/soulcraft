function Hero() {
  return (
    <section className="w-full min-h-screen flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-16">
      
      {/* Left Content */}
      <div className="max-w-xl">
        
        <h1 className="text-5xl md:text-7xl font-bold leading-tight text-[#3E3232]">
          Discover Handmade Creativity From Independent Artists
        </h1>

        <p className="mt-6 text-lg text-gray-600 leading-relaxed">
          Explore unique mandala arts, paintings, resin crafts, thread art and more from talented creators around the world.
        </p>

        <div className="mt-8 flex gap-4">
          
          <button className="px-6 py-3 bg-[#3E3232] text-white rounded-full hover:bg-[#C4A484] transition">
            Explore Art
          </button>

          <button className="px-6 py-3 border border-[#3E3232] rounded-full hover:bg-[#3E3232] hover:text-white transition">
            Become Artist
          </button>
        </div>
      </div>

      {/* Right Image */}
      <div className="mt-12 md:mt-0">
        <img
          src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5"
          alt="Art"
          className="w-[500px] h-[600px] object-cover rounded-3xl shadow-2xl"
        />
      </div>
    </section>
  );
}

export default Hero;