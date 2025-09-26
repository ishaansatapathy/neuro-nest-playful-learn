import { useEffect, useRef, useState } from "react";
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

  // Animated numbers
  const [childrenCount, setChildrenCount] = useState(0);
  const [parentSatisfaction, setParentSatisfaction] = useState(0);
  const [aiSupport, setAiSupport] = useState(0);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1 } });

    // Background fade-in
    tl.fromTo(
      bgRef.current,
      { opacity: 0, scale: 1.2 },
      { opacity: 1, scale: 1, duration: 1.5 }
    ).to(bgRef.current, { opacity: 0.3, duration: 2 }, "+=1");

    // Heading
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

    // Stats (scale in)
    tl.fromTo(
      statsRef.current?.children,
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, stagger: 0.2 },
      "-=0.3"
    );

    // Number count animations
    gsap.to({}, {
      duration: 2,
      onUpdate: function () {
        setChildrenCount(Math.floor(10000 * this.progress()));
        setParentSatisfaction(Math.floor(95 * this.progress()));
        setAiSupport(Math.floor(24 * this.progress()));
      },
    });
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image */}
      <div ref={bgRef} className="absolute inset-0">
        <img
          src={heroBanner}
          alt="Children learning together in a magical environment"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-primary/10 to-accent/20" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          className="inline-flex items-center space-x-2 bg-white/30 backdrop-blur-md border border-white/40 
                     rounded-full px-4 py-2 mb-6 shadow-md"
          whileHover={{ scale: 1.05 }}
        >
          <Sparkles className="w-4 h-4 text-accent-foreground" />
          <span className="text-sm font-medium text-gray-800">
            Early Detection Made Fun
          </span>
        </motion.div>

        {/* Heading */}
        <h1
          ref={headingRef}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 px-6 py-6 
                     rounded-3xl bg-white/20 backdrop-blur-md border border-white/30 shadow-xl inline-block"
        >
          <span className="block text-gradient-primary drop-shadow-[0_0_10px_rgba(255,192,203,0.6)]">
            Early Screening
          </span>
          <span className="block text-black drop-shadow-[0_2px_6px_rgba(255,255,255,0.8)]">
            Through
          </span>
          <span className="block text-gradient-secondary drop-shadow-[0_0_10px_rgba(173,216,230,0.6)]">
            Playful Learning
          </span>
        </h1>

        {/* Subtext */}
        <p
          ref={subTextRef}
          className="text-lg sm:text-xl text-gray-900 max-w-3xl mx-auto mb-12 leading-relaxed 
                     bg-white/30 backdrop-blur-md rounded-2xl px-6 py-4 shadow-md"
        >
          Help your child discover their unique learning style through engaging
          games and stories. <span className="font-semibold text-primary">NeuroNest</span> makes early detection
          of learning differences a joyful journey of discovery.
        </p>

        {/* Buttons */}
        <div
          ref={btnGroupRef}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            size="lg"
            className="btn-bouncy bg-primary hover:bg-primary-hover text-primary-foreground text-lg px-8 py-6 rounded-2xl shadow-md"
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
            className="btn-bouncy border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground 
                       text-lg px-8 py-6 rounded-2xl shadow-md"
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
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="card-magical text-center bg-white/30 backdrop-blur-md rounded-2xl p-6 shadow-md"
          >
            <div className="text-2xl sm:text-3xl font-bold text-gradient-primary mb-2">
              {childrenCount.toLocaleString()}+
            </div>
            <div className="text-gray-800 font-medium">Children Supported</div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="card-magical text-center bg-white/30 backdrop-blur-md rounded-2xl p-6 shadow-md"
          >
            <div className="text-2xl sm:text-3xl font-bold text-gradient-primary mb-2">
              {parentSatisfaction}%
            </div>
            <div className="text-gray-800 font-medium">Parent Satisfaction</div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="card-magical text-center bg-white/30 backdrop-blur-md rounded-2xl p-6 shadow-md"
          >
            <div className="text-2xl sm:text-3xl font-bold text-gradient-primary mb-2">
              {aiSupport}/7
            </div>
            <div className="text-gray-800 font-medium">AI-Powered Support</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;






