import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Star, TrendingUp } from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

const ShowcaseSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const fadeUp = (delay: number) => ({
    initial: { opacity: 0, y: 40, filter: "blur(8px)" },
    animate: inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {},
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
  });

  return (
    <section className="py-16 sm:py-28 lg:py-36 bg-background">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section header */}
        <motion.div {...fadeUp(0)} className="text-center mb-10 sm:mb-16">
          <span className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-accent">Curated Collection</span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-foreground mt-2 sm:mt-3">
            Design Highlights
          </h2>
          <p className="text-muted-foreground text-sm mt-3 sm:mt-4 max-w-lg mx-auto">
            A glimpse into our latest interior compositions and design philosophy
          </p>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-5 auto-rows-[160px] sm:auto-rows-[200px] md:auto-rows-[220px]">
          {/* Large featured card */}
          <motion.div
            {...fadeUp(0.1)}
            className="md:col-span-7 md:row-span-2 relative group rounded-2xl overflow-hidden image-zoom editorial-shadow"
          >
            <img
              src={project1}
              alt="Nordic Retreat living room"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-4 sm:p-6 lg:p-8">
              <span className="text-[10px] sm:text-xs tracking-[0.2em] uppercase text-accent mb-1 sm:mb-2 block">Featured</span>
              <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl text-primary-foreground mb-1 sm:mb-2">Nordic Retreat</h3>
              <p className="text-primary-foreground/60 text-xs sm:text-sm max-w-sm mb-3 sm:mb-4 hidden sm:block">
                A complete home transformation blending warmth with minimalism
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-5 py-2.5 bg-accent text-accent-foreground text-xs tracking-wider uppercase rounded-full hover:shadow-[0_8px_24px_-4px_hsl(var(--accent)/0.5)] transition-shadow"
              >
                Explore <ArrowUpRight size={12} />
              </motion.button>
            </div>
          </motion.div>

          {/* Dark stat card */}
          <motion.div
            {...fadeUp(0.2)}
            className="md:col-span-5 bg-primary rounded-2xl p-6 lg:p-8 flex flex-col justify-between"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs tracking-[0.2em] uppercase text-primary-foreground/40 mb-1">Client Satisfaction</p>
                <p className="font-serif text-4xl text-primary-foreground">98%</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                <Star size={18} className="text-accent" />
              </div>
            </div>
            <div className="flex items-center gap-2 text-accent text-xs">
              <TrendingUp size={14} />
              <span>+12% this year</span>
            </div>
          </motion.div>

          {/* Image card */}
          <motion.div
            {...fadeUp(0.3)}
            className="md:col-span-5 relative group rounded-2xl overflow-hidden image-zoom"
          >
            <img
              src={project2}
              alt="Marble kitchen design"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-all duration-500 flex items-end p-5 rounded-2xl">
              <motion.span
                className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-primary-foreground text-sm font-serif"
              >
                Marble & Matte — Kitchen Design
              </motion.span>
            </div>
          </motion.div>

          {/* Glass info card */}
          <motion.div
            {...fadeUp(0.25)}
            className="md:col-span-4 glass-card rounded-2xl p-6 flex flex-col justify-between"
          >
            <div>
              <h4 className="font-serif text-lg text-foreground mb-2">Our Process</h4>
              <p className="text-muted-foreground text-xs leading-relaxed">
                Every project begins with understanding your vision, then refining it through material, light, and spatial harmony.
              </p>
            </div>
            <motion.a
              href="#about"
              whileHover={{ x: 4 }}
              className="inline-flex items-center gap-1.5 text-accent text-xs tracking-wider uppercase mt-4"
            >
              Learn more <ArrowUpRight size={12} />
            </motion.a>
          </motion.div>

          {/* Mid-width image */}
          <motion.div
            {...fadeUp(0.35)}
            className="md:col-span-4 relative group rounded-2xl overflow-hidden image-zoom"
          >
            <img
              src={project3}
              alt="Light and living space"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-all duration-500 flex items-end p-5 rounded-2xl">
              <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-primary-foreground text-sm font-serif">
                Light & Living
              </span>
            </div>
          </motion.div>

          {/* CTA card */}
          <motion.div
            {...fadeUp(0.4)}
            className="md:col-span-4 bg-accent rounded-2xl p-6 lg:p-8 flex flex-col justify-between"
          >
            <div>
              <h4 className="font-serif text-xl text-accent-foreground mb-2">Start Your Project</h4>
              <p className="text-accent-foreground/70 text-xs leading-relaxed">
                Book a free consultation and let's create something extraordinary together.
              </p>
            </div>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground text-xs tracking-wider uppercase rounded-full mt-4 w-fit"
            >
              Book Now <ArrowUpRight size={12} />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
