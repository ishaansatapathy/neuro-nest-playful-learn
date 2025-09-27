import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles, BookOpen, Baby, Users, Bot } from "lucide-react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import heroBanner from "@/assets/hero-banner.jpg";

const HeroSection = () => {
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const [childrenCount, setChildrenCount] = useState(0);
  const [parentSatisfaction, setParentSatisfaction] = useState(0);
  const [aiSupport, setAiSupport] = useState(0);

  useEffect(() => {
    // Animate heading letters
    if (headingRef.current) {
      const letters = headingRef.current.querySelectorAll("span");
      gsap.fromTo(
        letters,
        { y: 80, opacity: 0, rotate: -10 },
        { y: 0, opacity: 1, rotate: 0, stagger: 0.15, duration: 0.8, ease: "bounce.out" }
      );
    }

    // Animated counters
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 bg-gradient-to-b from-pink-50 via-purple-50 to-yellow-50">
      {/* Floating Cute Elements */}
      <motion.div
        className="absolute top-10 left-10 text-5xl"
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 4 }}
      >
        🎈
      </motion.div>
      <motion.div
        className="absolute bottom-20 right-20 text-6xl"
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 5 }}
      >
        🦋
      </motion.div>
      <motion.div
        className="absolute top-1/4 right-1/3 text-4xl"
        animate={{ x: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 6 }}
      >
        ☁️
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Sparkle Label */}
        <motion.div
          className="inline-flex items-center space-x-2 bg-white/50 backdrop-blur-md border border-white/40 
                     rounded-full px-4 py-2 mb-6 shadow-md"
          whileHover={{ scale: 1.1, rotate: 3 }}
        >
          <Sparkles className="w-4 h-4 text-accent-foreground" />
          <span className="text-sm font-medium text-gray-800">✨ Early Detection Made Fun</span>
        </motion.div>

        {/* Heading */}
        <h1 ref={headingRef} className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight mb-8 space-y-2">
          <span className="block text-pink-500">Early Screening</span>
          <span className="block text-black">Through</span>
          <span className="block text-purple-500">Playful Learning</span>
        </h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto mb-12"
        >
          Help your child discover their unique learning style through{" "}
          <span className="text-purple-600 font-semibold">engaging games</span> and{" "}
          <span className="text-pink-500 font-semibold">storytelling</span>.  
          NeuroNest makes early detection a joyful journey of discovery. 🌟
        </motion.p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="btn-bouncy bg-gradient-to-r from-pink-400 to-purple-500 text-white px-8 py-6 rounded-full shadow-lg" asChild>
            <Link to="/games" className="flex items-center space-x-2">
              <Play className="w-5 h-5" />
              <span>Start Playing</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>

          <Button variant="outline" size="lg" className="btn-bouncy border-2 border-purple-400 text-purple-600 hover:bg-purple-100 px-8 py-6 rounded-full shadow-lg" asChild>
            <Link to="/login">👨‍👩‍👧 For Parents</Link>
          </Button>

          <Button variant="outline" size="lg" className="btn-bouncy border-2 border-pink-400 text-pink-500 hover:bg-pink-100 px-8 py-6 rounded-full shadow-lg" asChild>
            <Link to="/research">📑 Research Papers</Link>
          </Button>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <motion.div whileHover={{ scale: 1.05 }} className="card-magical text-center bg-white/50 backdrop-blur-md rounded-2xl p-6 shadow-md">
            <Baby className="mx-auto mb-2 text-pink-500" />
            <div className="text-3xl font-bold text-pink-500 mb-2">{childrenCount.toLocaleString()}+</div>
            <div className="text-gray-700 font-medium">Children Supported</div>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} className="card-magical text-center bg-white/50 backdrop-blur-md rounded-2xl p-6 shadow-md">
            <Users className="mx-auto mb-2 text-purple-500" />
            <div className="text-3xl font-bold text-purple-500 mb-2">{parentSatisfaction}%</div>
            <div className="text-gray-700 font-medium">Parent Satisfaction</div>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} className="card-magical text-center bg-white/50 backdrop-blur-md rounded-2xl p-6 shadow-md">
            <Bot className="mx-auto mb-2 text-yellow-500" />
            <div className="text-3xl font-bold text-yellow-500 mb-2">{aiSupport}/7</div>
            <div className="text-gray-700 font-medium">AI Support Available</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
