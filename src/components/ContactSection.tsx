import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const ContactSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="py-16 sm:py-28 lg:py-36 bg-primary relative overflow-hidden">
      {/* Floating decorative elements */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-20 w-40 h-40 rounded-full bg-accent/5 blur-2xl"
      />
      <motion.div
        animate={{ y: [0, 15, 0], rotate: [0, -3, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 left-20 w-60 h-60 rounded-full bg-accent/5 blur-3xl"
      />

      <div ref={ref} className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95, filter: "blur(8px)" }}
          animate={inView ? { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-xs tracking-[0.3em] uppercase text-accent">Get in Touch</span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-6xl font-light text-primary-foreground mt-3 sm:mt-4 mb-4 sm:mb-6">
            Let's Create Something
            <br />
            <span className="italic">Beautiful Together</span>
          </h2>
          <p className="text-primary-foreground/60 text-sm sm:text-base max-w-lg mx-auto mb-8 sm:mb-12 leading-relaxed">
            Ready to transform your space? Schedule a complimentary consultation
            and let's bring your vision to life.
          </p>
          <motion.a
            href="mailto:hello@vinit-design.com"
            whileHover={{ scale: 1.05, boxShadow: "0 16px 40px -8px hsl(16 84% 71% / 0.4)" }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 px-10 py-4 bg-accent text-accent-foreground text-sm tracking-wider uppercase transition-shadow duration-300"
          >
            Start Your Project
            <ArrowRight size={16} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
