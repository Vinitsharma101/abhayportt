import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Palette, Home, Lightbulb, Ruler } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Residential Design",
    description: "Complete home transformations that reflect your personality and lifestyle with timeless elegance.",
  },
  {
    icon: Palette,
    title: "Color Consultation",
    description: "Expert guidance on color palettes that create mood, harmony, and visual continuity throughout your space.",
  },
  {
    icon: Lightbulb,
    title: "Lighting Design",
    description: "Strategic lighting plans that enhance ambiance, functionality, and architectural features.",
  },
  {
    icon: Ruler,
    title: "Space Planning",
    description: "Optimized layouts that maximize flow, function, and visual appeal in every room.",
  },
];

const ServicesSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="py-16 sm:py-28 lg:py-36 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
          animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-accent">What We Do</span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-primary-foreground mt-2 sm:mt-3">
            Our Services
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-8">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40, scale: 0.9, filter: "blur(8px)" }}
                animate={inView ? { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" } : {}}
                transition={{ duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="glass-card-dark p-4 sm:p-8 rounded-lg group cursor-pointer"
              >
                <div className="w-8 h-8 sm:w-12 sm:h-12 flex items-center justify-center mb-3 sm:mb-6 text-accent group-hover:scale-110 transition-transform duration-300">
                  <Icon size={20} className="sm:hidden" strokeWidth={1.5} />
                  <Icon size={28} className="hidden sm:block" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-base sm:text-xl text-primary-foreground mb-2 sm:mb-3">{service.title}</h3>
                <p className="text-primary-foreground/60 text-xs sm:text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
