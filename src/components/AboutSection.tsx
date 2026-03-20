import { motion, useInView } from "framer-motion";
import { useRef } from "react";


const AboutSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-16 sm:py-28 lg:py-36 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
      <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
          animate={inView ? { opacity: 1, scale: 1, filter: "blur(0px)" } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="image-zoom rounded-lg editorial-shadow">
            <div className="w-full aspect-[3/4] rounded-lg bg-muted flex items-center justify-center">
              <span className="text-muted-foreground text-sm tracking-widest uppercase">Image Placeholder</span>
            </div>
          </div>
          {/* Floating accent element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="absolute -bottom-6 -right-6 w-32 h-32 rounded-lg bg-accent/20 -z-10"
          />
          {/* Glass floating badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="absolute -bottom-4 left-6 glass-card px-6 py-4 rounded-lg"
          >
            <div className="font-serif text-2xl text-foreground">15+</div>
            <div className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground">Years of Excellence</div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40, filter: "blur(6px)" }}
          animate={inView ? { opacity: 1, x: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-accent">About</span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-foreground mt-2 sm:mt-3 mb-5 sm:mb-8">
            Designing With
            <br />
            <span className="italic">Purpose & Soul</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
            With over 15 years of experience transforming spaces across Scandinavia
            and beyond, we believe that great design is invisible — it simply feels
            right. Our approach merges clean Nordic aesthetics with warmth and
            livability.
          </p>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-6 sm:mb-10">
            Every project begins with listening. We immerse ourselves in your
            lifestyle, preferences, and aspirations to craft interiors that are
            uniquely yours.
          </p>

          <div className="flex gap-8 sm:gap-12">
            {[
              { number: "200+", label: "Projects" },
              { number: "15", label: "Years" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + i * 0.15 }}
              >
                <div className="font-serif text-2xl sm:text-3xl text-foreground">{stat.number}</div>
                <div className="text-xs tracking-[0.2em] uppercase text-muted-foreground mt-1">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
