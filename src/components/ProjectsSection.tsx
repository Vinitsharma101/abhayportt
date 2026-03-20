import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import popCeilingFinal from "@/assets/pop-ceiling-final.png";

const projects = [
  { title: "Nordic Retreat", category: "Residential", image: project1 },
  { title: "Marble & Matte", category: "Kitchen Design", image: project2 },
  { title: "POP Ceiling Art", category: "Ceiling Design", image: popCeilingFinal },
  { title: "Serene Sanctuary", category: "Bathroom", image: project4 },
  
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, scale: 0.92, filter: "blur(8px)" }}
      animate={inView ? { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" } : {}}
      transition={{ duration: 0.8, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      className="group cursor-pointer"
    >
      <div className="relative image-zoom rounded-md overflow-hidden shadow-[0_6px_20px_-6px_hsl(var(--foreground)/0.1)] mb-3">
        <img
          src={project.image}
          alt={project.title}
          className="w-[60vh] h-[30vh] object-cover"
        />
        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-all duration-500 flex items-center justify-center">
          <motion.div
            className="opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center gap-2 px-5 py-2  text-accent-foreground text-[11px] tracking-widest uppercase"
            initial={false}
          >
            
            {/* <ArrowUpRight size={12} /> */}
          </motion.div>
        </div>
      </div>
      <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
        {project.category}
      </span>
      <h3 className="font-serif text-sm sm:text-base mt-0.5 text-foreground group-hover:text-accent transition-colors duration-300">
        {project.title}
      </h3>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(headerRef, { once: true, margin: "-80px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax transforms for 3D background elements
  const y1 = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-60, 100]);
  const y3 = useTransform(scrollYProgress, [0, 1], [40, -120]);
  const y4 = useTransform(scrollYProgress, [0, 1], [-40, 60]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 45]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [15, -30]);
  const rotate3 = useTransform(scrollYProgress, [0, 1], [-10, 25]);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-16 sm:py-28 lg:py-36 relative overflow-hidden"
    >
      {/* 3D Parallax Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large ring */}
        <motion.div
          style={{ y: y1, rotate: rotate1 }}
          className="absolute -top-10 -right-20 w-64 h-64 sm:w-96 sm:h-96 rounded-full border-[2px] border-accent/10"
        />
        {/* Filled circle */}
        <motion.div
          style={{ y: y2 }}
          className="absolute top-1/3 -left-12 w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-accent/[0.04]"
        />
        {/* Rotated square */}
        <motion.div
          style={{ y: y3, rotate: rotate2 }}
          className="absolute bottom-20 right-[10%] w-20 h-20 sm:w-28 sm:h-28 border border-border/60 rounded-sm"
        />
        {/* Small dot cluster */}
        <motion.div
          style={{ y: y4 }}
          className="absolute top-[15%] left-[20%] w-3 h-3 rounded-full bg-accent/20"
        />
        <motion.div
          style={{ y: y4 }}
          className="absolute top-[17%] left-[22%] w-2 h-2 rounded-full bg-accent/15"
        />
        {/* Diagonal line */}
        <motion.div
          style={{ y: y2, rotate: rotate3 }}
          className="absolute bottom-[30%] left-[8%] w-px h-32 sm:h-48 bg-gradient-to-b from-transparent via-accent/15 to-transparent"
        />
        {/* Large watermark text */}
        <motion.span
          style={{ y: y1 }}
          className="absolute top-[40%] right-[5%] text-[8rem] sm:text-[12rem] font-serif font-bold text-foreground/[0.02] select-none leading-none tracking-tight"
        >
          04
        </motion.span>
        {/* Cross shape */}
        <motion.div
          style={{ y: y3, rotate: rotate1 }}
          className="absolute top-[60%] left-[45%]"
        >
          <div className="w-px h-8 bg-accent/12 absolute left-1/2 -translate-x-1/2" />
          <div className="h-px w-8 bg-accent/12 absolute top-1/2 -translate-y-1/2" />
        </motion.div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
          animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-14"
        >
          <span className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-accent">
            Portfolio
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-foreground mt-2 sm:mt-3">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-sm mt-3 max-w-md mx-auto">
            A curated selection of our most celebrated interior transformations
          </p>
        </motion.div>

        {/* Compact 4-column grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-10 sm:mt-14"
        >
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-7 py-2.5 border border-accent text-accent text-xs tracking-widest uppercase hover:bg-accent hover:text-accent-foreground transition-all duration-300"
          >
            View All Projects
            <ArrowUpRight size={13} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
