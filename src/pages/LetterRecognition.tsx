import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  CheckCircle,
  XCircle,
  RefreshCw,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";

interface Level {
  id: number;
  target: string;
  options: string[];
}

const levels: Level[] = [
  { id: 1, target: "C", options: ["A", "B", "C", "D", "E", "F"] },
  { id: 2, target: "B", options: ["B", "D", "P", "Q", "O", "R"] },
  { id: 3, target: "D", options: ["B", "D", "P", "Q", "G", "O"] },
  { id: 4, target: "P", options: ["P", "Q", "R", "B", "D", "F"] },
  { id: 5, target: "Q", options: ["O", "Q", "C", "G", "P", "D"] },
  { id: 6, target: "M", options: ["M", "N", "W", "V", "H", "K"] },
  { id: 7, target: "N", options: ["N", "M", "H", "K", "W", "Z"] },
  { id: 8, target: "E", options: ["E", "F", "L", "T", "H", "B"] },
  { id: 9, target: "S", options: ["S", "Z", "5", "2", "C", "G"] },
  { id: 10, target: "O", options: ["O", "Q", "C", "0", "G", "D"] },
];

const LetterRecognition = () => {
  const [level, setLevel] = useState(1);
  const [selected, setSelected] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<"correct" | "wrong" | null>(null);

  const currentLevel = levels.find((l) => l.id === level)!;
  const progress = (level / levels.length) * 100;

  const handleSelect = (letter: string) => {
    if (feedback) return; // prevent multiple clicks
    setSelected(letter);
    if (letter === currentLevel.target) {
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
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-accent/10">
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
            className="text-center mb-8"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-gradient-primary mb-4">
              Letter Detective
            </h1>
            <p className="text-lg text-muted-foreground">
              Level {level} of {levels.length} – Find the letter{" "}
              <span className="font-bold">{currentLevel.target}</span>
            </p>

            {/* Progress Bar */}
            <div className="w-full bg-gray-200 rounded-full h-3 mt-4">
              <motion.div
                className="bg-primary h-3 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </motion.div>

          {/* Game Card */}
          <Card className="card-magical p-6 text-center">
            <CardHeader>
              <CardTitle className="text-xl">Choose the correct letter</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 mb-6">
                {currentLevel.options.map((letter) => (
                  <motion.button
                    key={letter}
                    whileHover={{ scale: feedback ? 1 : 1.1 }}
                    whileTap={{ scale: feedback ? 1 : 0.9 }}
                    className={`p-6 rounded-2xl text-2xl font-bold shadow-md transition-colors ${
                      selected === letter
                        ? letter === currentLevel.target
                          ? "bg-green-500 text-white"
                          : "bg-red-500 text-white"
                        : "bg-white text-foreground"
                    }`}
                    onClick={() => handleSelect(letter)}
                    disabled={!!feedback} // disable after answering
                  >
                    {letter}
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
                        🎉 Great job! You found {currentLevel.target}.
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
                        ❌ Oops! That was wrong. Try again.
                      </p>
                      <Button
                        onClick={resetGame}
                        className="btn-bouncy mt-4 flex items-center space-x-2"
                      >
                        <RefreshCw className="w-4 h-4" />
                        <span>Restart Game</span>
                      </Button>
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

export default LetterRecognition;
