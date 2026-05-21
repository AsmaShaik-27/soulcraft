import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Share Your Vision",
    description:
      "Describe your idea, inspiration, emotions, or references for the artwork you imagine.",
  },

  {
    number: "02",
    title: "Connect With Artists",
    description:
      "Collaborate directly with talented creators whose style matches your artistic vision.",
  },

  {
    number: "03",
    title: "Crafted With Care",
    description:
      "Watch your artwork evolve through sketches, refinements, and handcrafted details.",
  },

  {
    number: "04",
    title: "Receive Your Artwork",
    description:
      "Get a meaningful creation designed uniquely for your story and personal space.",
  },
];

function CommissionProcess() {
  return (
    <section className="bg-[#EFE7DD] py-32 px-8 overflow-hidden">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >

        <p
        className="text-[#8B6B4A] italic text-3xl md:text-4xl leading-relaxed max-w-3xl"
        style={{ fontFamily: "Cormorant Garamond" }}
        >
        Beyond curated collections lies something even more personal.
        </p>

        <p
        className="mt-6 uppercase tracking-[0.25em] text-sm text-[#8B6B4A]"
        style={{ fontFamily: "Inter" }}
        >
        Commissioned Creations
        </p>

        <h2
        className="mt-4 text-5xl md:text-6xl text-[#1A1816] leading-tight"
        style={{
            fontFamily: "Cormorant Garamond",
            fontWeight: 600,
        }}
        >
        Crafted Around
        <br />
        Your Imagination
        </h2>

        </motion.div>

        {/* Steps */}
        <div className="mt-24 grid md:grid-cols-2 gap-x-20 gap-y-20">

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.12,
              }}
              viewport={{ once: true }}
              className="group"
            >

              {/* Number */}
              <div
                className="text-[#C8B8A6] text-7xl"
                style={{
                  fontFamily: "Cormorant Garamond",
                  fontWeight: 600,
                }}
              >
                {step.number}
              </div>

              {/* Divider */}
              <div className="mt-4 h-[1px] bg-[#D8CCC0] w-full"></div>

              {/* Content */}
              <div className="mt-8">

                <h3
                  className="text-4xl text-[#1A1816]
                  group-hover:translate-x-1
                  transition duration-500"
                  style={{
                    fontFamily: "Cormorant Garamond",
                    fontWeight: 500,
                  }}
                >
                  {step.title}
                </h3>

                <p
                  className="mt-5 text-[#6B645D] leading-relaxed max-w-md"
                  style={{ fontFamily: "Inter" }}
                >
                  {step.description}
                </p>

              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CommissionProcess;