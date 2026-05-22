const testimonials = [
  {
    id: 1,
    name: "Ananya Sharma",
    role: "Art Collector",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop",
    review:
      "The handcrafted details were absolutely beautiful. SoulCraft feels truly personal and artistic.",
  },
  {
    id: 2,
    name: "Rahul Verma",
    role: "Gift Buyer",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop",
    review:
      "I ordered a custom resin piece and it exceeded expectations. The quality and packaging were amazing.",
  },
  {
    id: 3,
    name: "Priya Nair",
    role: "Home Decor Enthusiast",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1200&auto=format&fit=crop",
    review:
      "Every product feels unique and full of creativity. I love the warm handmade aesthetic.",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-[#fdf8f3] py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[4px] text-[#b08968] font-medium mb-4">
            Testimonials
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-[#3d2c29] mb-6">
            Loved By Handmade Art Enthusiasts
          </h2>

          <p className="max-w-3xl mx-auto text-[#6f5c57] text-lg leading-relaxed">
            Hear what our customers say about their SoulCraft experience and
            the handmade creations they cherish.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
            >
              
              {/* Stars */}
              <div className="flex gap-1 mb-6 text-yellow-500 text-xl">
                ★ ★ ★ ★ ★
              </div>

              {/* Review */}
              <p className="text-[#6f5c57] leading-relaxed mb-8 text-lg">
                “{testimonial.review}”
              </p>

              {/* User */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover"
                />

                <div>
                  <h4 className="font-semibold text-[#3d2c29] text-lg">
                    {testimonial.name}
                  </h4>

                  <p className="text-sm text-[#8b6f68]">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;