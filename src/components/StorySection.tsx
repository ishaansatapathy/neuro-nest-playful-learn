import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Brain, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import dyslexiaStory from "@/assets/dyslexia-story.jpg";
import dyscalculiaStory from "@/assets/dyscalculia-story.jpg";
import adhdStory from "@/assets/adhd-story.jpg";

interface Story {
  id: string;
  title: string;
  character: string;
  description: string;
  story: string;
  image: string;
  color: "primary" | "secondary" | "accent";
  icon: React.ComponentType<{ className?: string }>;
}

const stories: Story[] = [
  {
    id: "dyslexia",
    title: "Meet Aarav's Letter Adventure",
    character: "Aarav",
    description: "Sometimes letters like to play hide and seek in Aarav's mind",
    story: "Aarav loves stories, but sometimes the letters on the page seem to dance and switch places. The 'b' becomes a 'd', and words jump around like playful puppies. But you know what? Aarav has a special superpower - he can see patterns and solve problems in amazing ways that others can't!",
    image: dyslexiaStory,
    color: "primary",
    icon: Brain,
  },
  {
    id: "dyscalculia",
    title: "Maya's Number Kingdom",
    character: "Maya",
    description: "Numbers are like puzzle pieces that Maya arranges in her own special way",
    story: "In Maya's world, numbers aren't just symbols - they're colorful characters with personalities! Sometimes 6 likes to pretend it's 9, and 3 wants to be friends with E. Maya might count in her own creative way, but she has incredible talents for art, music, and seeing the big picture that others miss.",
    image: dyscalculiaStory,
    color: "secondary",
    icon: Heart,
  },
  {
    id: "adhd",
    title: "Zara's Energy Superpowers",
    character: "Zara",
    description: "Zara's mind is like a butterfly garden - colorful, energetic, and full of wonderful surprises",
    story: "Zara's brain works like a super-fast computer with lots of windows open at once! She notices things others don't see, comes up with creative ideas, and has boundless energy for the things she loves. Sometimes it's hard to focus on just one thing when there's so much amazing stuff to explore in the world!",
    image: adhdStory,
    color: "accent",
    icon: Zap,
  },
];

const StorySection = ({ story, isReversed = false }: { story: Story; isReversed?: boolean }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <motion.section
      className={`story-section ${isReversed ? "bg-gradient-to-r" : "bg-gradient-to-l"}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isReversed ? "lg:grid-flow-col-dense" : ""}`}>
          {/* Text Content */}
          <motion.div 
            className={`space-y-6 ${isReversed ? "lg:col-start-2" : ""}`}
            variants={itemVariants}
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className={`w-12 h-12 rounded-2xl bg-${story.color} flex items-center justify-center shadow-lg character-bounce`}>
                <story.icon className={`w-6 h-6 text-${story.color}-foreground`} />
              </div>
              <span className={`text-${story.color}-foreground font-medium text-sm uppercase tracking-wider`}>
                Learning Difference
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              {story.title}
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              {story.description}
            </p>

            <div className="card-magical p-6 my-8">
              <p className="text-foreground leading-relaxed text-base sm:text-lg">
                {story.story}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                className={`btn-bouncy bg-${story.color} hover:bg-${story.color}-hover text-${story.color}-foreground`}
                asChild
              >
                <Link to="/games" className="flex items-center space-x-2">
                  <span>Try {story.character}'s Games</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>

              <Button
                variant="outline"
                className={`btn-bouncy border-${story.color} text-${story.color} hover:bg-${story.color} hover:text-${story.color}-foreground`}
                asChild
              >
                <Link to="/parent-chat">
                  Learn More
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div 
            className={`relative ${isReversed ? "lg:col-start-1 lg:row-start-1" : ""}`}
            variants={itemVariants}
          >
            <div className="relative group cursor-pointer">
              <motion.div
                whileHover={{ scale: 1.02, rotateY: 5 }}
                transition={{ duration: 0.3 }}
                className="relative overflow-hidden rounded-3xl shadow-2xl"
              >
                <img
                  src={story.image}
                  alt={`${story.character} - ${story.title}`}
                  className="w-full h-80 sm:h-96 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-${story.color}/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              </motion.div>

              {/* Floating Character Badge */}
              <motion.div
                className={`absolute -top-4 -right-4 bg-${story.color} text-${story.color}-foreground px-4 py-2 rounded-2xl font-bold shadow-lg float-gentle`}
                whileHover={{ scale: 1.1 }}
              >
                {story.character}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

const StorytellingSection = () => {
  return (
    <div className="relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center py-20 px-4"
      >
        <h2 className="text-4xl sm:text-5xl font-bold text-gradient-primary mb-6">
          Every Child is Unique
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Meet our friends and discover how learning differences aren't disabilities - they're different abilities waiting to shine!
        </p>
      </motion.div>

      {stories.map((story, index) => (
        <StorySection 
          key={story.id} 
          story={story} 
          isReversed={index % 2 === 1} 
        />
      ))}
    </div>
  );
};

export default StorytellingSection;