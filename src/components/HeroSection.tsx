import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import heroBanner from "@/assets/hero-banner.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroBanner}
          alt="Children learning together in a magical environment"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-primary/5 to-accent/10" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-6 h-6 bg-accent rounded-full float-gentle opacity-60"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        />
        <motion.div
          className="absolute top-32 right-20 w-4 h-4 bg-secondary rounded-full float-gentle opacity-60"
          style={{ animationDelay: "1s" }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        />
        <motion.div
          className="absolute bottom-32 left-20 w-8 h-8 bg-primary/30 rounded-full float-gentle opacity-60"
          style={{ animationDelay: "2s" }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center space-x-2 bg-accent/20 rounded-full px-4 py-2 mb-6 backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-4 h-4 text-accent-foreground" />
            <span className="text-sm font-medium text-accent-foreground">Early Detection Made Fun</span>
          </motion.div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
            <span className="text-gradient-primary">Early Screening</span>
            <br />
            <span className="text-foreground">Through</span>{" "}
            <span className="text-gradient-secondary">Playful Learning</span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
            Help your child discover their unique learning style through engaging games and stories. 
            NeuroNest makes early detection of learning differences a joyful journey of discovery.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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
              <Link to="/login">
                For Parents
              </Link>
            </Button>
          </div>
        </motion.div>

        {/* Stats or Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
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
              <div className="text-muted-foreground font-medium">
                {stat.text}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;