import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, CheckCircle, XCircle, RefreshCw, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";

interface Level {
  id: number;
  target: number;
  options: number[];
}

// 🎯 Levels with tricky/confusing numbers
const levels: Level[] = [
  { id: 1, target: 2, options: [2, 3, 5, 7, 8, 9] },
  { id: 2, target: 5, options: [3, 5, 6, 8, 9, 2] },
  { id: 3, target: 6, options: [6, 9, 8, 0, 3, 5] },
  { id: 4, target: 9, options: [6, 9, 8, 5, 0, 7] },
  { id: 5, target: 0, options: [0, 6, 9, 8, 3, 5] },
  { id: 6, target: 7, options: [1, 4, 7, 9, 2, 5] },
  { id: 7, target: 4, options: [4, 7, 1, 9, 6, 8] },
  { id: 8, target: 8, options: [8, 6, 9, 0, 3, 5] },
];

const NumberMatch = () => {
  const [level, setLevel] = useState(1);
  const [selected, setSelected] = useState<number | null>(null);
  const [feedback, setFeedback] = useState<string | null>(null);

  const currentLevel = levels.find((l) => l.id === level)!;

  const handleSelect = (num: number) => {
    setSelected(num);
    if (num === currentLevel.target) {
      setFeedback("correct");
    } else {
      setFeedback("wrong");
    }
  };

  const nextLevel = () => {
    if (level < levels.length) {
      setLevel(level + 1);
      setSelected(null);
      setFeedback(null);
    }
  };

  const resetGame = () => {
    setLevel(1);
    setSelected(null);
    setFeedback(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/5 to-primary/10">
      <Navigation />

      <div className="pt-24 pb-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Button variant="ghost" asChild className="btn-bouncy mb-6">
            <Link to="/games" className="flex items-center space-x-2">
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Games</span>
            </Link>
          </Button>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-10"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-gradient-secondary mb-4">
              Number Explorer
            </h1>
            <p className="text-lg text-muted-foreground">
              Level {level} of {levels.length} – Find the number{" "}
              <span className="font-bold">{currentLevel.target}</span>
            </p>
          </motion.div>

          {/* Game Card */}
          <Card className="card-magical p-6 text-center">
            <CardHeader>
              <CardTitle className="text-xl">Choose the correct number</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 mb-6">
                {currentLevel.options.map((num) => (
                  <motion.button
                    key={num}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={`p-6 rounded-2xl text-2xl font-bold shadow-md ${
                      selected === num
                        ? "bg-secondary text-white"
                        : "bg-white text-foreground"
                    }`}
                    onClick={() => handleSelect(num)}
                  >
                    {num}
                  </motion.button>
                ))}
              </div>

              {/* Feedback */}
              {feedback && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mt-6 flex flex-col items-center"
                >
                  {feedback === "correct" ? (
                    <>
                      <CheckCircle className="w-12 h-12 text-green-500 mb-2" />
                      <p className="text-green-600 font-semibold text-lg">
                        Awesome! You found it 🎉
                      </p>
                      {level < levels.length ? (
                        <Button
                          onClick={nextLevel}
                          className="btn-bouncy mt-4 flex items-center space-x-2"
                        >
                          <span>Next Level</span>
                          <ArrowRight className="w-4 h-4" />
                        </Button>
                      ) : (
                        <Button
                          onClick={resetGame}
                          className="btn-bouncy mt-4 flex items-center space-x-2"
                        >
                          <RefreshCw className="w-4 h-4" />
                          <span>Restart Game</span>
                        </Button>
                      )}
                    </>
                  ) : (
                    <>
                      <XCircle className="w-12 h-12 text-red-500 mb-2" />
                      <p className="text-red-600 font-semibold text-lg">
                        Oops! Try again.
                      </p>
                    </>
                  )}
                </motion.div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default NumberMatch;
