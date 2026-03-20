import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, MapPin, ArrowRight, ArrowUpRight, Send } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "@/hooks/use-toast";
import Footer from "@/components/Footer";

const contactInfo = [
  { icon: Mail, label: "Email", value: "hello@vinit-design.com", href: "mailto:hello@vinit-design.com" },
  { icon: Phone, label: "Phone", value: "+1 (555) 012-3456", href: "tel:+15550123456" },
  { icon: MapPin, label: "Studio", value: "Stockholm, Sweden", href: "#" },
];

const Contact = () => {
  const formRef = useRef<HTMLDivElement>(null);
  const inView = useInView(formRef, { once: true, margin: "-40px" });
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast({ title: "Message sent!", description: "We'll get back to you within 24 hours." });
      setFormData({ name: "", email: "", phone: "", service: "", message: "" });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const fadeUp = {
    initial: { opacity: 0, y: 30, filter: "blur(6px)" },
    animate: (i: number) => ({
      opacity: 1, y: 0, filter: "blur(0px)",
      transition: { duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
    }),
  };

  return (
    <main className="bg-background min-h-screen">
      {/* Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-20">
          <Link to="/" className="font-serif text-2xl font-semibold tracking-tight text-foreground">
            Vinit
          </Link>
          <Link
            to="/"
            className="text-sm tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </motion.nav>

      {/* Hero */}
      <section className="pt-24 pb-12 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-28 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 right-0 w-[500px] h-[500px] rounded-full bg-accent/[0.04] blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-primary/[0.03] blur-[80px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl"
          >
            <span className="text-xs tracking-[0.3em] uppercase text-accent">Get in Touch</span>
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-7xl font-light text-foreground mt-3 sm:mt-4 mb-4 sm:mb-6 leading-[1.1]">
              Let's Create
              <br />
              Something <span className="italic">Beautiful</span>
            </h1>
            <p className="text-muted-foreground text-sm sm:text-lg leading-relaxed max-w-lg">
              Ready to transform your space? We'd love to hear about your project.
              Reach out and let's start a conversation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section ref={formRef} className="pb-16 sm:pb-28 lg:pb-36 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid lg:grid-cols-5 gap-10 sm:gap-16 lg:gap-20">
            {/* Left — Info */}
            <motion.div
              className="lg:col-span-2 space-y-12"
              initial="initial"
              animate={inView ? "animate" : "initial"}
            >
              {/* Contact cards */}
              <div className="space-y-6">
                {contactInfo.map((item, i) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    custom={i}
                    variants={fadeUp}
                    className="group flex items-start gap-5 p-5 rounded-sm border border-border/60 bg-card/40 backdrop-blur-sm hover:border-accent/30 hover:shadow-[0_8px_30px_-8px_hsl(var(--accent)/0.12)] transition-all duration-500"
                  >
                    <div className="w-11 h-11 rounded-sm bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors duration-300">
                      <item.icon size={18} className="text-accent" />
                    </div>
                    <div>
                      <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground block mb-1">
                        {item.label}
                      </span>
                      <span className="text-foreground font-medium">{item.value}</span>
                    </div>
                    <ArrowUpRight
                      size={16}
                      className="ml-auto text-muted-foreground/40 group-hover:text-accent transition-colors duration-300 mt-1"
                    />
                  </motion.a>
                ))}
              </div>

              {/* Hours */}
              <motion.div custom={3} variants={fadeUp} className="space-y-4">
                <h3 className="text-xs tracking-[0.2em] uppercase text-muted-foreground">Studio Hours</h3>
                <div className="space-y-2 text-sm">
                  {[
                    { day: "Monday – Friday", hours: "9:00 AM – 6:00 PM" },
                    { day: "Saturday", hours: "10:00 AM – 4:00 PM" },
                    { day: "Sunday", hours: "By Appointment" },
                  ].map((item) => (
                    <div key={item.day} className="flex justify-between text-foreground/70">
                      <span>{item.day}</span>
                      <span className="text-muted-foreground">{item.hours}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Social */}
              <motion.div custom={4} variants={fadeUp} className="space-y-4">
                <h3 className="text-xs tracking-[0.2em] uppercase text-muted-foreground">Follow Us</h3>
                <div className="flex gap-3">
                  {["Instagram", "Pinterest", "LinkedIn", "Behance"].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="px-4 py-2 text-xs tracking-wider uppercase border border-border/60 text-muted-foreground hover:text-foreground hover:border-accent/40 transition-all duration-300"
                    >
                      {social}
                    </a>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Right — Form */}
            <motion.div
              className="lg:col-span-3"
              initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
              animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="p-5 sm:p-8 lg:p-12 bg-card border border-border/60 editorial-shadow">
                <h2 className="font-serif text-3xl font-light text-foreground mb-2">
                  Start Your Project
                </h2>
                <p className="text-muted-foreground text-sm mb-10">
                  Fill out the form below and we'll schedule a complimentary consultation.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs tracking-[0.15em] uppercase text-muted-foreground">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your name"
                        className="w-full bg-transparent border-b border-border/80 pb-3 text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent transition-colors duration-300"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs tracking-[0.15em] uppercase text-muted-foreground">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your@email.com"
                        className="w-full bg-transparent border-b border-border/80 pb-3 text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent transition-colors duration-300"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs tracking-[0.15em] uppercase text-muted-foreground">
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 000-0000"
                        className="w-full bg-transparent border-b border-border/80 pb-3 text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent transition-colors duration-300"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs tracking-[0.15em] uppercase text-muted-foreground">
                        Service Interest
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b border-border/80 pb-3 text-foreground text-sm focus:outline-none focus:border-accent transition-colors duration-300 appearance-none cursor-pointer"
                      >
                        <option value="" className="bg-card text-muted-foreground">Select a service</option>
                        <option value="residential" className="bg-card">Residential Design</option>
                        <option value="commercial" className="bg-card">Commercial Design</option>
                        <option value="consultation" className="bg-card">Consultation</option>
                        <option value="styling" className="bg-card">Interior Styling</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs tracking-[0.15em] uppercase text-muted-foreground">
                      Tell Us About Your Project *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Describe your vision, timeline, and any specific requirements..."
                      className="w-full bg-transparent border-b border-border/80 pb-3 text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent transition-colors duration-300 resize-none"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02, boxShadow: "0 16px 40px -8px hsl(16 84% 71% / 0.35)" }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-4 bg-accent text-accent-foreground text-sm tracking-wider uppercase transition-all duration-300 disabled:opacity-60 disabled:pointer-events-none mt-4"
                  >
                    {isSubmitting ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-4 h-4 border-2 border-accent-foreground/30 border-t-accent-foreground rounded-full"
                      />
                    ) : (
                      <>
                        Send Message
                        <Send size={16} />
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Contact;
