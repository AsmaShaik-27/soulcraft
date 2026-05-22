import {
  Sparkles,
  Palette,
  ShieldCheck,
  PackageCheck,
} from "lucide-react";

const features = [
  {
    id: 1,
    icon: Sparkles,
    title: "Handcrafted with Love",
    description:
      "Every creation is carefully handmade with passion, creativity, and attention to detail.",
  },
  {
    id: 2,
    icon: Palette,
    title: "Fully Customizable",
    description:
      "Personalize your crafts, colors, styles, and designs to make every piece truly yours.",
  },
  {
    id: 3,
    icon: ShieldCheck,
    title: "Secure Shopping",
    description:
      "Enjoy safe payments, trusted checkout, and a seamless shopping experience.",
  },
  {
    id: 4,
    icon: PackageCheck,
    title: "Premium Packaging",
    description:
      "Beautifully packed creations delivered safely and elegantly to your doorstep.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[4px] text-[#b08968] font-medium mb-4">
            Why SoulCraft
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-[#3d2c29] mb-6">
            Crafted Beyond Ordinary
          </h2>

          <p className="max-w-3xl mx-auto text-[#6f5c57] text-lg leading-relaxed">
            SoulCraft connects creativity with craftsmanship, bringing you
            unique handmade treasures designed with authenticity and artistic
            passion.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.id}
                className="group bg-[#fdf8f3] rounded-3xl p-8 hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
              >
                
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-[#ecdccf] flex items-center justify-center mb-6 group-hover:scale-110 transition duration-300">
                  <Icon className="text-[#7f5539]" size={30} />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-semibold text-[#3d2c29] mb-4">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-[#6f5c57] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;