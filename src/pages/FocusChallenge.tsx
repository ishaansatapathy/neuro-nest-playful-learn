import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, CheckCircle, XCircle, RefreshCw, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";

interface Question {
  id: number;
  story: string;
  question: string;
  answer: number;
  options: number[];
}

// 🦋 Storytelling Math Questions
const questions: Question[] = [
  {
    id: 1,
    story: "A butterfly is flying in the garden. It lands on 2 flowers and then flies to 3 more.",
    question: "How many flowers did the butterfly visit?",
    answer: 5,
    options: [4, 5, 6, 7],
  },
  {
    id: 2,
    story: "The butterfly sees 6 bees buzzing around. 2 bees fly away.",
    question: "How many bees are left near the butterfly?",
    answer: 4,
    options: [2, 3, 4, 5],
  },
  {
    id: 3,
    story: "The butterfly finds 3 red flowers and 4 yellow flowers.",
    question: "How many flowers in total?",
    answer: 7,
    options: [6, 7, 8, 9],
  },
  {
    id: 4,
    story: "There are 10 leaves on the tree. The butterfly rests on 2 of them.",
    question: "How many leaves are not used by the butterfly?",
    answer: 8,
    options: [6, 7, 8, 9],
  },
  {
    id: 5,
    story: "The butterfly flaps its wings 5 times, then 5 more times.",
    question: "How many times did it flap in total?",
    answer: 10,
    options: [8, 9, 10, 12],
  },
];

const FocusChallenge = () => {
  const [level, setLevel] = useState(1);
  const [selected, setSelected] = useState<number | null>(null);
  const [feedback, setFeedback] = useState<string | null>(null);

  const currentQuestion = questions.find((q) => q.id === level)!;

  const handleSelect = (option: number) => {
    setSelected(option);
    if (option === currentQuestion.answer) {
      setFeedback("correct");
    } else {
      setFeedback("wrong");
    }
  };

  const nextLevel = () => {
    if (level < questions.length) {
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
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/5 to-primary/10">
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
            <h1 className="text-4xl sm:text-5xl font-bold text-gradient-accent mb-4">
              Butterfly Focus Challenge
            </h1>
            <p className="text-lg text-muted-foreground">
              Level {level} of {questions.length} – Listen to the story and solve the question!
            </p>
          </motion.div>

          {/* Game Card */}
          <Card className="card-magical p-6 text-center">
            <CardHeader>
              <CardTitle className="text-xl">{currentQuestion.story}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-semibold mb-6">{currentQuestion.question}</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                {currentQuestion.options.map((num) => (
                  <motion.button
                    key={num}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={`p-6 rounded-2xl text-2xl font-bold shadow-md ${
                      selected === num
                        ? "bg-accent text-white"
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
                        Brilliant! 🌟
                      </p>
                      {level < questions.length ? (
                        <Button
                          onClick={nextLevel}
                          className="btn-bouncy mt-4 flex items-center space-x-2"
                        >
                          <span>Next Story</span>
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

export default FocusChallenge;

