import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const slides = [
  
  {
    image: project1,
    subtitle: "Residential Excellence",
    heading: [ "Elegant &", "Timeless Homes"],
    headingItalicIndex: 1,
    description:
      "Our residential projects balance functionality with beauty, transforming houses into curated living experiences.",
  },
  {
    image: project2,
    subtitle: "Modern Aesthetics",
    heading: ["Where Art", "Meets", "Architecture"],
    headingItalicIndex: 2,
    description:
      "Bold yet refined compositions that push boundaries while maintaining warmth and livability in every detail.",
  },
  {
    image: project3,
    subtitle: "Bespoke Spaces",
    heading: ["Luxury", "Defined By", "Your Vision"],
    headingItalicIndex: 1,
    description:
      "Tailored interiors that reflect your personality, lifestyle, and aspirations — designed with intention.",
  },
];

const INTERVAL = 3000;

const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  const next = useCallback(() => setCurrent((p) => (p + 1) % slides.length), []);

  useEffect(() => {
    const id = setInterval(next, INTERVAL);
    return () => clearInterval(id);
  }, [next]);

  const slide = slides[current];

  return (
    <section id="home" ref={ref} className="relative min-h-screen overflow-visible">
      {/* Full-width background image */}
      <motion.div className="absolute inset-0 z-0" style={{ y }}>
        <div className="relative w-full h-full overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.img
              key={current}
              src={slide.image}
              alt="Interior design showcase"
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ opacity: 0, scale: 1.15 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0.5, scale: 1.05 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              style={{ scale }}
            />
          </AnimatePresence>
          {/* Overlay for readability on mobile */}
          <div className="absolute inset-0 bg-primary/60 lg:bg-transparent" />
          {/* Left gradient fade for the floating panel area */}
          <div className="hidden lg:block absolute inset-y-0 left-0 w-[50%] bg-gradient-to-r from-primary/80 via-primary/40 to-transparent" />
        </div>
      </motion.div>

      {/* Floating left text panel */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <motion.div
            style={{ opacity }}
            className="relative lg:w-[42%] bg-primary/90 backdrop-blur-2xl rounded-2xl px-6 py-8 sm:px-10 sm:py-14 lg:py-16 lg:px-12 mb-[-4rem]"
            // The negative margin makes the panel extend into the next section
          >
            {/* Subtle border glow */}
            <div className="absolute inset-0 rounded-2xl border border-primary-foreground/[0.08] pointer-events-none" />
            <div className="absolute inset-0 rounded-2xl shadow-[0_24px_80px_-12px_hsl(var(--primary)/0.6)] pointer-events-none" />

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -20, filter: "blur(6px)" }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="inline-block text-[10px] sm:text-xs tracking-[0.3em] uppercase text-primary-foreground/60">
                  {slide.subtitle}
                </span>
                <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-primary-foreground leading-[1.1] mb-1">
                  {slide.heading.map((line, i) => (
                    <span key={i} className="block">
                      {i === slide.headingItalicIndex ? (
                        <span className="italic font-light">{line}</span>
                      ) : (
                        line
                      )}
                    </span>
                  ))}
                </h1>
                <p className="text-primary-foreground/60 text-xs sm:text-sm tracking-wider mb-4 sm:mb-6">
                  — Premium Interior Solutions
                </p>
                <p className="text-primary-foreground/70 text-sm lg:text-lg max-w-md mb-6 sm:mb-10 leading-relaxed line-clamp-3">
                  {slide.description}
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="flex gap-3 sm:gap-4">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="px-5 py-2.5 sm:px-8 sm:py-3.5 bg-accent text-accent-foreground text-xs sm:text-sm tracking-wider uppercase rounded-full hover:shadow-[0_12px_28px_-6px_hsl(var(--accent)/0.45)] transition-shadow duration-300"
              >
                View Projects
              </motion.a>
              <motion.a
                href="#about"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="px-5 py-2.5 sm:px-8 sm:py-3.5 border border-primary-foreground/30 text-primary-foreground text-xs sm:text-sm tracking-wider uppercase rounded-full hover:bg-primary-foreground/10 transition-all duration-300"
              >
                Our Story
              </motion.a>
            </div>

            {/* Slide indicators */}
            <div className="flex gap-2 mt-10">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-1 rounded-full transition-all duration-500 ${
                    i === current
                      ? "w-8 bg-accent"
                      : "w-4 bg-primary-foreground/20 hover:bg-primary-foreground/40"
                  }`}
                />
              ))}
            </div>

            {/* Floating stat card */}
            <div className="mt-6 sm:mt-8 glass-card-dark inline-flex items-center gap-5 sm:gap-8 px-5 py-3 sm:px-8 sm:py-5 rounded-xl">
              {[
                { value: "200+", label: "Projects" },
                { value: "15yr", label: "Experience" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-serif text-xl sm:text-2xl text-primary-foreground">{stat.value}</div>
                  <div className="text-[10px] tracking-[0.2em] uppercase text-primary-foreground/50 mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
