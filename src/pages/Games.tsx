import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Play, Star, Trophy, Clock, ArrowLeft, Pencil } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";

interface Game {
  id: string;
  title: string;
  description: string;
  difficulty: "Easy" | "Medium" | "Hard";
  category: "Letters" | "Numbers" | "Focus";
  progress: number;
  stars: number;
  timeEstimate: string;
  color: "primary" | "secondary" | "accent" | "pink";
}

const games: Game[] = [
  {
    id: "letter-recognition",
    title: "Letter Detective",
    description: "Help find the hidden letters in this magical adventure!",
    difficulty: "Easy",
    category: "Letters",
    progress: 75,
    stars: 2,
    timeEstimate: "5 min",
    color: "primary",
  },
  {
    id: "number-match",
    title: "Number Friends",
    description: "Match numbers with their quantity friends in the garden.",
    difficulty: "Medium",
    category: "Numbers",
    progress: 40,
    stars: 1,
    timeEstimate: "8 min",
    color: "secondary",
  },
  {
    id: "focus-challenge",
    title: "Butterfly Focus",
    description: "Follow the colorful butterflies and improve concentration.",
    difficulty: "Easy",
    category: "Focus",
    progress: 90,
    stars: 3,
    timeEstimate: "6 min",
    color: "accent",
  },
  {
    id: "number-tracing",
    title: "✍️ Number Tracing",
    description: "Trace numbers step by step and improve handwriting skills.",
    difficulty: "Easy",
    category: "Numbers",
    progress: 0,
    stars: 0,
    timeEstimate: "7 min",
    color: "pink",
  },
];

const Games = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-accent/10">
      <Navigation />

      <div className="pt-24 pb-12 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-6"
          >
            <Button variant="ghost" asChild className="btn-bouncy">
              <Link to="/" className="flex items-center space-x-2">
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Home</span>
              </Link>
            </Button>
          </motion.div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-gradient-primary mb-4">
              Learning Games
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Play, learn, and discover your unique superpowers through fun
              activities!
            </p>
          </motion.div>

          {/* Overall Progress */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="card-magical p-6 mb-8"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Your Learning Journey</h2>
              <div className="flex items-center space-x-2">
                <Trophy className="w-5 h-5 text-accent" />
                <span className="font-bold">Level 3</span>
              </div>
            </div>
            <Progress value={68} className="level-progress mb-2" />
            <p className="text-sm text-muted-foreground">
              68% complete to next level
            </p>
          </motion.div>

          {/* Games Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {games.map((game, index) => (
              <motion.div
                key={game.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * (index + 2) }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <Card className="card-magical h-full">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge
                        variant="secondary"
                        className={`bg-${game.color}/20 text-${game.color}-foreground`}
                      >
                        {game.category}
                      </Badge>
                      <div className="flex items-center space-x-1">
                        {[...Array(3)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < game.stars
                                ? "text-accent fill-accent"
                                : "text-muted-foreground"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <CardTitle className="text-xl">{game.title}</CardTitle>
                    <CardDescription>{game.description}</CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="flex items-center space-x-1">
                        <Clock className="w-4 h-4 text-muted-foreground" />
                        <span>{game.timeEstimate}</span>
                      </span>
                      <Badge variant="outline">{game.difficulty}</Badge>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">Progress</span>
                        <span className="text-sm text-muted-foreground">
                          {game.progress}%
                        </span>
                      </div>
                      <Progress value={game.progress} className="level-progress" />
                    </div>
                  </CardContent>

                  <CardFooter>
                    <Button
                      asChild
                      className={`w-full btn-bouncy bg-${game.color} hover:bg-${game.color}-hover text-${game.color}-foreground`}
                    >
                      <Link to={`/games/${game.id}`}>
                        {game.id === "number-tracing" ? (
                          <Pencil className="w-4 h-4 mr-2" />
                        ) : (
                          <Play className="w-4 h-4 mr-2" />
                        )}
                        {game.progress > 0 ? "Continue" : "Start"} Game
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Coming Soon Notice */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-12 text-center p-6 bg-accent/20 rounded-3xl"
          >
            <h3 className="text-lg font-semibold text-accent-foreground mb-2">
              🎮 More games coming soon!
            </h3>
            <p className="text-sm text-muted-foreground">
              We're constantly adding new activities tailored to different
              learning styles.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Games;
