import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import heroBanner from "@/assets/hero-banner.jpg";


const HeroSection = () => {
  const bgRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const subTextRef = useRef<HTMLParagraphElement | null>(null);
  const btnGroupRef = useRef<HTMLDivElement | null>(null);
  const statsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1 } });

    // Background fade-in → stay → fade-down
    tl.fromTo(
      bgRef.current,
      { opacity: 0, scale: 1.2 },
      { opacity: 1, scale: 1, duration: 1.5 }
    ).to(bgRef.current, { opacity: 0.3, duration: 2 }, "+=1");

    // Heading words stagger
    tl.fromTo(
      headingRef.current?.querySelectorAll("span"),
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2 },
      "-=1"
    );

    // Subtext
    tl.fromTo(
      subTextRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1 },
      "-=0.5"
    );

    // Buttons
    tl.fromTo(
      btnGroupRef.current?.children,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2 },
      "-=0.3"
    );

    // Stats
    tl.fromTo(
      statsRef.current?.children,
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, stagger: 0.2 },
      "-=0.3"
    );

    // Parallax effect on scroll
    const handleScroll = () => {
      const scrollY = window.scrollY;
      gsap.to(bgRef.current, {
        y: scrollY * 0.3, // moves slower than scroll
        ease: "power1.out",
        duration: 0.5,
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image with Overlay */}
      <div ref={bgRef} className="absolute inset-0">
        <img
          src={heroBanner}
          alt="Children learning together in a magical environment"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-primary/5 to-accent/10" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Top Badge */}
        <motion.div
          className="inline-flex items-center space-x-2 bg-accent/20 rounded-full px-4 py-2 mb-6 backdrop-blur-sm"
          whileHover={{ scale: 1.05 }}
        >
          <Sparkles className="w-4 h-4 text-accent-foreground" />
          <span className="text-sm font-medium text-accent-foreground">
            Early Detection Made Fun
          </span>
        </motion.div>

        {/* Heading */}
        <h1
          ref={headingRef}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 space-y-2"
        >
          <span className="block text-gradient-primary">Early Screening</span>
          <span className="block text-foreground">Through</span>
          <span className="block text-gradient-secondary">Playful Learning</span>
        </h1>

        {/* Subtext */}
        <p
          ref={subTextRef}
          className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          Help your child discover their unique learning style through engaging
          games and stories. NeuroNest makes early detection of learning
          differences a joyful journey of discovery.
        </p>

        {/* Buttons */}
        <div
          ref={btnGroupRef}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            size="lg"
            className="btn-bouncy bg-primary hover:bg-primary-hover text-primary-foreground text-lg px-8 py-6 rounded-2xl"
            asChild
          >
            <Link to="/games" className="flex items-center space-x-2">
              <Play className="w-5 h-5" />
              <span>Start Playing</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="btn-bouncy border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-6 rounded-2xl"
            asChild
          >
            <Link to="/login">For Parents</Link>
          </Button>
        </div>

        {/* Stats */}
        <div
          ref={statsRef}
          className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          {[
            { number: "10K+", text: "Children Supported" },
            { number: "95%", text: "Parent Satisfaction" },
            { number: "24/7", text: "AI-Powered Support" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="card-magical text-center"
            >
              <div className="text-2xl sm:text-3xl font-bold text-gradient-primary mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground font-medium">{stat.text}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
