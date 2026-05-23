import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Ananya Sharma",
    role: "Gift Buyer",
    review:
      "The handmade resin nameplate was beautifully crafted and felt truly personal. The quality exceeded my expectations.",
  },
  {
    id: 2,
    name: "Riya Mehta",
    role: "Art Collector",
    review:
      "I loved discovering independent artists through SoulCraft. Every product feels authentic and thoughtfully made.",
  },
  {
    id: 3,
    name: "Karthik Rao",
    role: "Custom Order Client",
    review:
      "The artist collaboration experience was smooth and creative. My customized artwork turned out absolutely stunning.",
  },
];

export default function Testimonials() {
  return (
    <section className="w-full bg-[#F8F5F0] py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p
            className="uppercase tracking-[4px]
            text-sm text-[#8B5E3C] mb-4"
            style={{ fontFamily: "Inter" }}
          >
            Testimonials
          </p>

          <h2
            className="text-4xl md:text-5xl
            text-[#1A1816] leading-tight mb-6"
            style={{ fontFamily: "Playfair Display" }}
          >
            Loved by Handmade
            <br />
            Art Enthusiasts
          </h2>

          <p
            className="text-[#666]
            text-base md:text-lg leading-relaxed"
            style={{ fontFamily: "Inter" }}
          >
            Real experiences from people who discovered meaningful handmade
            creations through SoulCraft.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <div
              key={item.id}
              className={`bg-white rounded-[32px] p-8
              transition duration-500 hover:-translate-y-2
              hover:shadow-xl
              ${index === 1 ? "md:mt-10" : ""}
              ${index === 2 ? "md:mt-20" : ""}`}
            >
              {/* Quote */}
              <div
                className="text-6xl text-[#E7D7C7]
                leading-none mb-6"
                style={{ fontFamily: "Playfair Display" }}
              >
                “
              </div>

              {/* Review */}
              <p
                className="text-[#444]
                leading-relaxed mb-8"
                style={{ fontFamily: "Inter" }}
              >
                {item.review}
              </p>

              {/* Stars */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* User */}
              <div>
                <h4
                  className="text-xl text-[#1A1816] mb-1"
                  style={{ fontFamily: "Playfair Display" }}
                >
                  {item.name}
                </h4>

                <p
                  className="text-sm text-[#777]"
                  style={{ fontFamily: "Inter" }}
                >
                  {item.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}