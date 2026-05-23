import {
  FileText,
  MessagesSquare,
  Paintbrush,
  PackageCheck,
} from "lucide-react";

const steps = [
  
  {
    id: "01",
    icon: MessagesSquare,
    title: "Connect with Artist",
    description:
      "Discuss style, pricing, customization details, and timelines directly.",
  },
  {
    id: "02",
    icon: FileText,
    title: "Submit Your Idea",
    description:
      "Share your inspiration, references, or describe your dream artwork.",
  },
  {
    id: "03",
    icon: Paintbrush,
    title: "Creation Begins",
    description:
      "Your selected artist carefully crafts your personalized masterpiece.",
  },
  {
    id: "04",
    icon: PackageCheck,
    title: "Delivered to You",
    description:
      "Receive your handmade creation beautifully packed at your doorstep.",
  },
];

export default function CommissionProcess() {
  return (
    <section className="w-full bg-white py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p
            className="uppercase tracking-[4px] text-sm text-[#8B5E3C] mb-4"
            style={{ fontFamily: "Inter" }}
          >
            Custom Creations
          </p>

          <h2
            className="text-4xl md:text-5xl text-[#1A1816]
            leading-tight mb-6"
            style={{ fontFamily: "Playfair Display" }}
          >
            How Custom Orders Work
          </h2>

          <p
            className="text-[#666] text-base md:text-lg leading-relaxed"
            style={{ fontFamily: "Inter" }}
          >
            A simple and collaborative process to turn your ideas into
            meaningful handmade creations.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div
            className="hidden md:block absolute top-0 left-1/2
            -translate-x-1/2 w-[2px] h-full bg-[#E8DED2]"
          />

          <div className="space-y-16">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.id}
                  className={`flex flex-col md:flex-row items-center gap-8 ${
                    index % 2 !== 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Empty Space */}
                  <div className="hidden md:block flex-1" />

                  {/* Center Icon */}
                  <div
                    className="relative z-10 w-20 h-20 rounded-full
                    bg-[#1A1816] text-white flex items-center
                    justify-center shadow-xl shrink-0"
                  >
                    <Icon size={30} />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div
                      className="bg-[#F8F5F0] p-8 rounded-[30px]
                      hover:shadow-xl transition duration-500"
                    >
                      <p
                        className="text-sm tracking-[3px]
                        text-[#8B5E3C] mb-3"
                        style={{ fontFamily: "Inter" }}
                      >
                        STEP {step.id}
                      </p>

                      <h3
                        className="text-3xl text-[#1A1816] mb-4"
                        style={{ fontFamily: "Playfair Display" }}
                      >
                        {step.title}
                      </h3>

                      <p
                        className="text-[#666] leading-relaxed"
                        style={{ fontFamily: "Inter" }}
                      >
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}