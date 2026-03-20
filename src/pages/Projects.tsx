import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, X, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useCallback, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import heroImage from "@/assets/hero-interior.jpg";
import popCeilingFinal from "@/assets/pop-ceiling-final.png";
import popCeilingWip from "@/assets/pop-ceiling-wip.jpeg";
import img2 from "@/assets/2.png";
import img3 from "@/assets/3.png";
import img4 from "@/assets/4.png";
import img6 from "@/assets/6.jpeg";
import img7 from "@/assets/7.jpeg";
import img33 from "@/assets/33.jpeg";
import img34 from "@/assets/34.jpeg";
import img44 from "@/assets/44.jpeg";
import img55 from "@/assets/55.jpeg";
import img88 from "@/assets/88.jpeg";
import img99 from "@/assets/99.jpeg";
import img111 from "@/assets/111.jpeg";
import img222 from "@/assets/222.jpeg";
import img444 from "@/assets/444.jpeg";
import img564 from "@/assets/564.jpeg";
import img768 from "@/assets/768.jpeg";
import img6789 from "@/assets/6789.jpeg";
import imgDd from "@/assets/dd.jpeg";
import imgEr from "@/assets/er.jpeg";
import imgFd from "@/assets/fd.jpeg";
import imgFgdhd from "@/assets/fgdhd.jpeg";
import imgFgghf from "@/assets/fgghf.jpeg";

const projects = [
  {
    title: "Nordic Retreat",
    category: "Residential",
    image: project1,
    span: "normal",
    year: "2025",
    location: "Stockholm, Sweden",
    area: "240 m²",
    description: "A serene Scandinavian home blending natural materials with minimalist design. Every room breathes calm through muted tones, raw wood textures, and curated negative space.",
    gallery: [project1, project2, project3, heroImage],
  },
  {
    title: "Marble & Matte",
    category: "Kitchen Design",
    image: project2,
    span: "tall",
    year: "2024",
    location: "Copenhagen, Denmark",
    area: "85 m²",
    description: "A kitchen where contrast is king — polished Carrara marble meets matte black cabinetry, creating a dramatic yet functional culinary space.",
    gallery: [project2, project1, project4, heroImage],
  },
  {
    title: "Light & Living",
    category: "Living Space",
    image: project3,
    span: "normal",
    year: "2024",
    location: "Oslo, Norway",
    area: "180 m²",
    description: "Designed to maximize natural light, this open-plan living space features floor-to-ceiling glazing and a restrained palette that lets the landscape take center stage.",
    gallery: [project3, heroImage, project1, project2],
  },
  {
    title: "Serene Sanctuary",
    category: "Bathroom",
    image: project4,
    span: "wide",
    year: "2025",
    location: "Helsinki, Finland",
    area: "45 m²",
    description: "A spa-inspired bathroom wrapped in warm stone and soft lighting. The freestanding tub sits beneath a skylight, turning daily rituals into meditative moments.",
    gallery: [project4, project3, project2, project1],
  },
  {
    title: "Urban Loft",
    category: "Modern Living",
    image: heroImage,
    span: "tall",
    year: "2023",
    location: "Berlin, Germany",
    area: "310 m²",
    description: "An industrial loft transformed into a warm, layered home. Exposed brick and steel beams are softened by bespoke furniture and rich textiles.",
    gallery: [heroImage, project1, project3, project4],
  },
  {
    title: "POP Ceiling Art",
    category: "Ceiling Design",
    image: popCeilingFinal,
    span: "wide",
    year: "2025",
    location: "New Delhi, India",
    area: "32 m²",
    description: "A sculptural POP false ceiling featuring interlocking circular forms with recessed lighting. The design transforms a flat surface into a dynamic, three-dimensional architectural statement.",
    gallery: [popCeilingWip, popCeilingFinal],
  },
  {
    title: "Golden Hour Suite",
    category: "Hospitality",
    image: project1,
    span: "wide",
    year: "2024",
    location: "Reykjavik, Iceland",
    area: "120 m²",
    description: "A boutique hotel suite designed around the magic of Icelandic golden hour — amber tones, tactile fabrics, and panoramic views.",
    gallery: [project1, project4, heroImage, project2],
  },
  {
    title: "The Glass Pavilion",
    category: "Commercial",
    image: project3,
    span: "normal",
    year: "2023",
    location: "Amsterdam, Netherlands",
    area: "500 m²",
    description: "A transparent commercial space that dissolves the boundary between inside and out. Steel, glass, and greenery coexist in structural harmony.",
    gallery: [project3, project2, project1, project4],
  },
  {
    title: "Coastal Calm",
    category: "Residential",
    image: project2,
    span: "tall",
    year: "2025",
    location: "Lisbon, Portugal",
    area: "200 m²",
    description: "A seaside retreat with whitewashed walls, linen drapes, and handmade ceramics. Every element echoes the rhythm of the nearby Atlantic.",
    gallery: [project2, project3, heroImage, project1],
  },
  {
    title: "Noir Studio",
    category: "Office Space",
    image: project4,
    span: "normal",
    year: "2024",
    location: "London, UK",
    area: "150 m²",
    description: "A moody, all-black creative studio designed for focus. Custom acoustic panels and indirect lighting create an immersive workspace.",
    gallery: [project4, project1, project2, project3],
  },
  {
    title: "Velvet & Stone",
    category: "Luxury Suite",
    image: heroImage,
    span: "wide",
    year: "2023",
    location: "Paris, France",
    area: "170 m²",
    description: "Where opulence meets restraint — sumptuous velvet furniture set against raw limestone walls in a Parisian apartment with soul.",
    gallery: [heroImage, project4, project3, project1],
  },
  {
    title: "Alabaster Alcove",
    category: "Residential",
    image: img2,
    span: "normal",
    year: "2024",
    location: "Mumbai, India",
    area: "195 m²",
    description: "A contemporary Indian home dressed in ivory tones and soft ambient lighting. Handcrafted joinery and layered textiles give warmth to every corner.",
    gallery: [img2, img3, img4, heroImage],
  },
  {
    title: "Canvas & Concrete",
    category: "Modern Living",
    image: img3,
    span: "tall",
    year: "2024",
    location: "Bangalore, India",
    area: "210 m²",
    description: "Raw concrete walls meet artist-curated interiors in this bold urban residence. A collector's home where every surface tells a story.",
    gallery: [img3, img2, img6, img7],
  },
  {
    title: "The Still Room",
    category: "Residential",
    image: img4,
    span: "wide",
    year: "2025",
    location: "Pune, India",
    area: "160 m²",
    description: "Conceived as a retreat from city noise, this home uses soft curves, neutral plaster finishes, and layered greens to evoke stillness.",
    gallery: [img4, img2, img3, img33],
  },
  {
    title: "Terra Suite",
    category: "Hospitality",
    image: img6,
    span: "normal",
    year: "2023",
    location: "Jaipur, India",
    area: "90 m²",
    description: "Earthy terracotta tones and hand-blocked textiles define this heritage-inspired suite. A space where Rajasthani craft traditions meet boutique luxury.",
    gallery: [img6, img7, img33, img34],
  },
  {
    title: "Ivory & Iron",
    category: "Kitchen Design",
    image: img7,
    span: "tall",
    year: "2024",
    location: "Chennai, India",
    area: "70 m²",
    description: "A chef's kitchen refined to its essentials — ivory lacquered cabinets, matte iron hardware, and a single slab of quartzite as the centerpiece.",
    gallery: [img7, img6, img44, img55],
  },
  {
    title: "Amber Residence",
    category: "Residential",
    image: img33,
    span: "wide",
    year: "2025",
    location: "Ahmedabad, India",
    area: "280 m²",
    description: "Warm amber tones flow through every room of this family home, creating a cohesive narrative of comfort, craftsmanship, and contemporary elegance.",
    gallery: [img33, img34, img44, img4],
  },
  {
    title: "Dusk Penthouse",
    category: "Luxury Suite",
    image: img34,
    span: "normal",
    year: "2024",
    location: "Hyderabad, India",
    area: "330 m²",
    description: "A sky-high penthouse where the palette shifts from dusty rose to deep charcoal — mirroring the city's dusk skyline through floor-to-ceiling windows.",
    gallery: [img34, img33, img222, img444],
  },
  {
    title: "The Linen House",
    category: "Residential",
    image: img44,
    span: "tall",
    year: "2023",
    location: "Chandigarh, India",
    area: "220 m²",
    description: "Natural linen, unbleached cotton, and jute textures breathe organic softness into this meticulously designed family dwelling.",
    gallery: [img44, img55, img33, img3],
  },
  {
    title: "Shadow & Light",
    category: "Office Space",
    image: img55,
    span: "wide",
    year: "2025",
    location: "Gurugram, India",
    area: "400 m²",
    description: "A corporate office reimagined as an experience — dramatic lighting contrasts, sculptural partitions, and biophilic zones that inspire deep work.",
    gallery: [img55, img44, img88, img99],
  },
  {
    title: "Mist Villa",
    category: "Residential",
    image: img88,
    span: "normal",
    year: "2024",
    location: "Coorg, India",
    area: "350 m²",
    description: "Perched in the coffee estates of Coorg, this hill villa dissolves into its landscape with stone floors, timber ceilings, and mist-filtered daylighting.",
    gallery: [img88, img99, img111, heroImage],
  },
  {
    title: "Slate & Silk",
    category: "Bedroom Design",
    image: img99,
    span: "tall",
    year: "2025",
    location: "Kolkata, India",
    area: "55 m²",
    description: "A master bedroom where slate-grey walls are offset by panels of silk fabric and warm brass accents — crafting intimacy without heaviness.",
    gallery: [img99, img88, img111, img222],
  },
  {
    title: "The Courtyard Home",
    category: "Residential",
    image: img111,
    span: "wide",
    year: "2023",
    location: "Surat, India",
    area: "410 m²",
    description: "A modern reimagining of the traditional Indian courtyard home, where open-to-sky volumes anchor social life and natural ventilation replaces mechanical air.",
    gallery: [img111, img222, img444, img2],
  },
  {
    title: "Copper Atelier",
    category: "Commercial",
    image: img222,
    span: "normal",
    year: "2024",
    location: "Kochi, India",
    area: "130 m²",
    description: "A design studio clad in copper mesh panels and warm walnut joinery. The workspace doubles as a live showcase of materiality and craft.",
    gallery: [img222, img111, img444, img564],
  },
  {
    title: "The White Edit",
    category: "Minimalist",
    image: img444,
    span: "tall",
    year: "2025",
    location: "Goa, India",
    area: "175 m²",
    description: "A beach house stripped to its purest form — white plaster, white linen, white stone. Only the sea view breaks the monochrome.",
    gallery: [img444, img564, img768, img3],
  },
  {
    title: "Blueprint Studio",
    category: "Office Space",
    image: img564,
    span: "wide",
    year: "2024",
    location: "Noida, India",
    area: "260 m²",
    description: "An architecture firm's own headquarters — raw exposed services overhead, refined work surfaces below, and a materials library as the social heart.",
    gallery: [img564, img768, img6789, img55],
  },
  {
    title: "Dune Residence",
    category: "Residential",
    image: img768,
    span: "normal",
    year: "2023",
    location: "Jodhpur, India",
    area: "295 m²",
    description: "Sand-coloured lime plaster and carved sandstone jali screens echo the desert landscape outside, while interiors stay cool and shadow-rich.",
    gallery: [img768, img6789, imgDd, img6],
  },
  {
    title: "Strata House",
    category: "Modern Living",
    image: img6789,
    span: "tall",
    year: "2025",
    location: "Indore, India",
    area: "230 m²",
    description: "A multi-generational home designed in horizontal strata — each floor a distinct palette, unified by a continuous material thread of pale oak.",
    gallery: [img6789, imgDd, imgEr, img768],
  },
  {
    title: "Dark Matter",
    category: "Luxury Suite",
    image: imgDd,
    span: "wide",
    year: "2024",
    location: "New Delhi, India",
    area: "140 m²",
    description: "A penthouse suite in near-total darkness — walls of deep charcoal, obsidian fixtures, and pin-spot lighting that turns objects into jewels.",
    gallery: [imgDd, imgEr, imgFd, img34],
  },
  {
    title: "Sage & Cedar",
    category: "Residential",
    image: imgEr,
    span: "normal",
    year: "2025",
    location: "Dehradun, India",
    area: "185 m²",
    description: "A mountain home built around the scent and texture of cedar wood. Sage green accents echo the pine forests visible from every window.",
    gallery: [imgEr, imgFd, imgFgdhd, img88],
  },
  {
    title: "Raw & Refined",
    category: "Commercial",
    image: imgFd,
    span: "tall",
    year: "2023",
    location: "Vadodara, India",
    area: "320 m²",
    description: "A retail flagship where industrial rawness — poured concrete, exposed conduit — is juxtaposed with polished display plinths and designer lighting.",
    gallery: [imgFd, imgFgdhd, imgFgghf, img564],
  },
  {
    title: "Fern & Form",
    category: "Biophilic Design",
    image: imgFgdhd,
    span: "wide",
    year: "2024",
    location: "Bhopal, India",
    area: "200 m²",
    description: "A home where living walls, hanging planters, and water features are integral to the architecture — blurring the line between garden and living room.",
    gallery: [imgFgdhd, imgFgghf, img4, imgEr],
  },
  {
    title: "The Quiet Edit",
    category: "Minimalist",
    image: imgFgghf,
    span: "normal",
    year: "2025",
    location: "Lucknow, India",
    area: "155 m²",
    description: "Restraint as a design philosophy — every object earns its place in this pared-back apartment where silence is the loudest design statement.",
    gallery: [imgFgghf, imgFgdhd, img444, img2],
  },
];

type Project = typeof projects[0];

const ProjectModal = ({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((p) => (p + 1) % project.gallery.length);
  }, [project.gallery.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((p) => (p - 1 + project.gallery.length) % project.gallery.length);
  }, [project.gallery.length]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
    };
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose, nextSlide, prevSlide]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 lg:p-8"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-primary/80 backdrop-blur-xl" />

      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.96, filter: "blur(8px)" }}
        animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
        exit={{ opacity: 0, y: 20, scale: 0.97, filter: "blur(6px)" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
        className="relative z-10 w-full max-w-6xl max-h-[90vh] bg-card rounded-2xl overflow-hidden flex flex-col lg:flex-row editorial-shadow"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-background transition-colors"
        >
          <X size={18} />
        </button>

        {/* Left — Details */}
        <div className="lg:w-[38%] p-5 sm:p-8 lg:p-10 flex flex-col justify-center overflow-y-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <span className="text-[10px] tracking-[0.3em] uppercase text-accent">
              {project.category}
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-light text-foreground mt-2 mb-4 sm:mb-6">
              {project.title}
            </h2>

            <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-5 sm:mb-8">
              {project.description}
            </p>

            <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-5 sm:mb-8">
              {[
                { label: "Year", value: project.year },
                { label: "Area", value: project.area },
                { label: "Location", value: project.location.split(",")[0] },
              ].map((stat) => (
                <div key={stat.label}>
                  <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground block mb-1">
                    {stat.label}
                  </span>
                  <span className="font-serif text-lg text-foreground">{stat.value}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-2 text-muted-foreground text-xs tracking-wider">
              <span>{project.location}</span>
            </div>
          </motion.div>
        </div>

        {/* Right — Image Slider */}
        <div className="lg:w-[62%] relative bg-muted min-h-[300px] lg:min-h-0">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentSlide}
              src={project.gallery[currentSlide]}
              alt={`${project.title} - Image ${currentSlide + 1}`}
              className="w-full h-full object-cover absolute inset-0"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            />
          </AnimatePresence>

          {/* Slider controls */}
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between z-10">
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full bg-background/70 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-background transition-colors"
            >
              <ChevronLeft size={18} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {project.gallery.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === currentSlide
                      ? "w-6 bg-accent"
                      : "w-3 bg-background/50 hover:bg-background/80"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full bg-background/70 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-background transition-colors"
            >
              <ChevronRight size={18} />
            </button>
          </div>

          {/* Counter */}
          <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-background/60 backdrop-blur-sm text-xs tracking-wider text-foreground">
            {currentSlide + 1} / {project.gallery.length}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <main className="bg-background min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-24 sm:pt-32 pb-10 sm:pb-16 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground text-sm tracking-widest uppercase mb-8 transition-colors"
          >
            <ArrowLeft size={16} />
            Back Home
          </Link>
          <span className="block text-[10px] sm:text-xs tracking-[0.3em] uppercase text-accent mb-2 sm:mb-3">Portfolio</span>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-7xl font-light text-foreground">
            All <span className="italic">Projects</span>
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base mt-3 sm:mt-4 max-w-lg">
            A comprehensive look at our interior transformations — each one a story of vision meeting craft.
          </p>
        </motion.div>
      </section>

      {/* Masonry Grid */}
      <section className="px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto pb-16 sm:pb-28">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-3 sm:gap-4 lg:gap-6 space-y-3 sm:space-y-4 lg:space-y-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title + i}
              initial={{ opacity: 0, y: 80, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                duration: 0.7,
                delay: 0.1 + i * 0.08,
                ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
              }}
              className="break-inside-avoid group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative image-zoom rounded-lg editorial-shadow overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className={`w-full object-cover rounded-lg ${
                    project.span === "tall"
                      ? "aspect-[3/4]"
                      : project.span === "wide"
                      ? "aspect-[16/9]"
                      : "aspect-[4/3]"
                  }`}
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/50 transition-all duration-500 flex items-end rounded-lg">
                  <div className="p-5 w-full translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <span className="text-[10px] tracking-[0.2em] uppercase text-primary-foreground/70">
                      {project.category}
                    </span>
                    <h3 className="font-serif text-xl text-primary-foreground mt-1">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>

      <Footer />
    </main>
  );
};

export default Projects;
