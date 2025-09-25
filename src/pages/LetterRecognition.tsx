import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Heart, Trophy } from "lucide-react";
import Navigation from "@/components/Navigation";

const letterQuestions = [
  { letter: "A", options: ["A", "B", "D", "P"], correct: 0 },
  { letter: "B", options: ["D", "B", "P", "R"], correct: 1 },
  { letter: "C", options: ["O", "Q", "C", "G"], correct: 2 },
  { letter: "D", options: ["B", "P", "R", "D"], correct: 3 },
  { letter: "E", options: ["F", "E", "L", "T"], correct: 1 },
];

const LetterRecognition = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [gameComplete, setGameComplete] = useState(false);

  const progress = ((currentQuestion + 1) / letterQuestions.length) * 100;
  const question = letterQuestions[currentQuestion];

  const handleAnswer = (index: number) => {
    if (index === question.correct) {
      setScore(score + 1);
    } else {
      setLives(lives - 1);
    }

    if (currentQuestion < letterQuestions.length - 1 && lives > 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setGameComplete(true);
    }
  };

  const resetGame = () => {
    setCurrentQuestion(0);
    setScore(0);
    setLives(3);
    setGameComplete(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-accent/10">
      <Navigation />
      <div className="pt-24 pb-12 px-4 max-w-2xl mx-auto">
        {gameComplete ? (
          <Card className="text-center p-8">
            <CardHeader>
              <Trophy className="w-12 h-12 mx-auto text-accent mb-4" />
              <CardTitle className="text-3xl font-bold">
                {lives > 0 ? "Great Job!" : "Keep Practicing!"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-lg">
                Score: {score} / {letterQuestions.length}
              </p>
              <Button onClick={resetGame} className="btn-bouncy bg-primary text-white">
                Play Again
              </Button>
            </CardContent>
          </Card>
        ) : (
          <Card className="p-6">
            <CardHeader className="text-center">
              <CardTitle className="text-4xl font-bold mb-2">{question.letter}</CardTitle>
              <p className="text-muted-foreground">Which letter matches?</p>
            </CardHeader>
            <CardContent>
              {/* Progress + Lives */}
              <div className="mb-6">
                <Progress value={progress} className="h-2" />
                <p className="text-sm text-muted-foreground mt-1">
                  Question {currentQuestion + 1} of {letterQuestions.length}
                </p>
              </div>
              <div className="flex justify-center mb-4 space-x-1">
                {Array.from({ length: 3 }).map((_, i) => (
                  <Heart
                    key={i}
                    className={`w-6 h-6 ${
                      i < lives ? "text-red-500 fill-current" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>

              {/* Options */}
              <div className="grid grid-cols-2 gap-4">
                {question.options.map((option, index) => (
                  <Button
                    key={index}
                    onClick={() => handleAnswer(index)}
                    className="h-16 text-2xl font-bold btn-bouncy"
                  >
                    {option}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default LetterRecognition;
