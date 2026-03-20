import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  Studio: ["About Us", "Our Process", "Careers", "Press"],
  Services: ["Residential", "Commercial", "Consultation", "Styling"],
  Connect: ["Instagram", "Pinterest", "LinkedIn", "Behance"],
};

const Footer = () => (
  <footer className="relative bg-primary overflow-hidden pt-12 sm:pt-20 pb-6 sm:pb-8">
    {/* Large background typography */}
    <div className="absolute bottom-0 left-0 pointer-events-none select-none">
      <span className="font-serif text-[12rem] md:text-[18rem] font-bold leading-none text-primary-foreground/[0.03] block -mb-12 -ml-4">
        Vinit
      </span>
    </div>

    {/* Abstract decorative shapes */}
    <div className="absolute top-16 right-16 w-64 h-64 rounded-full bg-accent/[0.04] blur-3xl pointer-events-none" />
    <div className="absolute bottom-32 left-1/3 w-48 h-48 rounded-full bg-accent/[0.06] blur-2xl pointer-events-none" />
    <div className="absolute top-1/2 right-1/4 w-24 h-24 rotate-45 border border-primary-foreground/[0.05] pointer-events-none" />

    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
      {/* Top section */}
      <div className="flex flex-col lg:flex-row justify-between gap-10 sm:gap-16 mb-10 sm:mb-16">
        {/* Brand */}
        <div className="max-w-sm">
          <span className="font-serif text-3xl text-primary-foreground block mb-4">Vinit</span>
          <p className="text-primary-foreground/50 text-sm leading-relaxed mb-6">
            Creating timeless interiors that blend Scandinavian simplicity with luxurious comfort since 2011.
          </p>
          <motion.a
            href="mailto:hello@vinit-design.com"
            whileHover={{ x: 4 }}
            className="inline-flex items-center gap-2 text-accent text-sm tracking-wider uppercase group"
          >
            Start a Project
            <ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </motion.a>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-10 lg:gap-16">
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-xs tracking-[0.2em] uppercase text-primary-foreground/40 mb-5">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <motion.a
                      href="#"
                      whileHover={{ x: 4 }}
                      className="text-primary-foreground/60 text-sm hover:text-accent transition-colors duration-300 inline-block"
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact info */}
        <div className="space-y-4">
          <h4 className="text-xs tracking-[0.2em] uppercase text-primary-foreground/40 mb-5">Get in Touch</h4>
          {[
            { icon: Mail, text: "hello@vinit-design.com" },
            { icon: Phone, text: "+1 (555) 012-3456" },
            { icon: MapPin, text: "Stockholm, Sweden" },
          ].map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-3 text-primary-foreground/50 text-sm">
              <Icon size={14} className="text-accent/70" />
              {text}
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-primary-foreground/10 mb-6" />

      {/* Bottom bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-primary-foreground/30 text-xs">
          © 2026 Vinit Design Studio. All rights reserved.
        </p>
        <div className="flex gap-6">
          {["Privacy", "Terms", "Cookies"].map((t) => (
            <a
              key={t}
              href="#"
              className="text-primary-foreground/30 text-xs hover:text-primary-foreground/60 transition-colors"
            >
              {t}
            </a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
