import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  ArrowLeft,
  Download,
  Share2,
  TrendingUp,
  AlertCircle,
  CheckCircle,
  Star,
} from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";

// Mock child name
const childName = "Alex";

// ✅ Mock scores from games
const mockScores = {
  letterRecognition: 65,
  numberMatch: 80,
  focusChallenge: 50,
  confusions: ["b/d", "p/q"], // observed confusion patterns
};

const analyzeScores = (scores: typeof mockScores) => {
  const strengths: { skill: string; score: number }[] = [];
  const practiceAreas: { skill: string; games: number; difficulty: string }[] =
    [];
  const concerns: { title: string; description: string; suggestion: string }[] =
    [];

  // Strengths
  if (scores.numberMatch >= 75)
    strengths.push({ skill: "Number Sequencing", score: scores.numberMatch });
  if (scores.letterRecognition >= 75)
    strengths.push({
      skill: "Letter Recognition",
      score: scores.letterRecognition,
    });
  if (scores.focusChallenge >= 75)
    strengths.push({ skill: "Focus & Attention", score: scores.focusChallenge });

  // Practice areas
  if (scores.letterRecognition < 75)
    practiceAreas.push({
      skill: "Letter Recognition",
      games: 5,
      difficulty: "Medium",
    });
  if (scores.numberMatch < 75)
    practiceAreas.push({
      skill: "Number Sequencing",
      games: 3,
      difficulty: "Easy",
    });
  if (scores.focusChallenge < 75)
    practiceAreas.push({
      skill: "Focus Training",
      games: 4,
      difficulty: "Medium",
    });

  // Concerns
  if (scores.confusions.includes("b/d") || scores.confusions.includes("p/q")) {
    concerns.push({
      title: "Letter Confusion Patterns",
      description:
        "Frequent confusion between 'b', 'd', 'p', and 'q' observed in games.",
      suggestion: "Consider: Vision screening",
    });
  }
  if (scores.focusChallenge < 60) {
    concerns.push({
      title: "Focus Variability",
      description:
        "Attention spans vary significantly across different activities.",
      suggestion: "Consider: ADHD assessment",
    });
  }

  return { strengths, practiceAreas, concerns };
};

const Reports = () => {
  const { strengths, practiceAreas, concerns } = analyzeScores(mockScores);

  const handleDownload = () => {
    alert("📄 PDF download coming soon!");
  };

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
            className="text-center mb-8"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-gradient-primary mb-4">
              {childName}'s Learning Report
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Track progress, celebrate strengths, and identify areas for growth
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
          >
            <Button
              onClick={handleDownload}
              className="btn-bouncy bg-primary hover:bg-primary-hover"
            >
              <Download className="w-4 h-4 mr-2" />
              Download PDF
            </Button>
            <Button
              variant="outline"
              className="btn-bouncy border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <Share2 className="w-4 h-4 mr-2" />
              Share Report
            </Button>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Strengths */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card className="card-magical h-full">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-6 h-6 text-success" />
                    <CardTitle className="text-success-foreground">
                      Strengths
                    </CardTitle>
                  </div>
                  <CardDescription>
                    Amazing abilities your child has shown
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {strengths.length > 0 ? (
                    strengths.map((strength, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <Link
                            to="/games"
                            className="text-sm font-medium hover:underline cursor-pointer"
                          >
                            {strength.skill}
                          </Link>
                          <div className="flex items-center space-x-1">
                            <Star className="w-4 h-4 text-accent fill-accent" />
                            <span className="text-sm font-bold">
                              {strength.score}%
                            </span>
                          </div>
                        </div>
                        <Progress
                          value={strength.score}
                          className="level-progress"
                        />
                      </div>
                    ))
                  ) : (
                    <p className="text-muted-foreground text-sm">
                      No major strengths detected yet. Keep practicing!
                    </p>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            {/* Practice Needed */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card className="card-magical h-full">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="w-6 h-6 text-warning" />
                    <CardTitle className="text-warning-foreground">
                      Practice Areas
                    </CardTitle>
                  </div>
                  <CardDescription>
                    Skills to focus on for improvement
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {practiceAreas.length > 0 ? (
                    practiceAreas.map((area, index) => (
                      <div key={index} className="p-4 bg-warning/10 rounded-xl">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium">{area.skill}</span>
                          <Badge variant="outline">{area.difficulty}</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {area.games} recommended games available
                        </p>
                      </div>
                    ))
                  ) : (
                    <p className="text-muted-foreground text-sm">
                      No practice areas detected. Keep up the great work!
                    </p>
                  )}
                  {practiceAreas.length > 0 && (
                    <Button
                      className="w-full btn-bouncy bg-warning hover:bg-warning/80 text-warning-foreground"
                      asChild
                    >
                      <Link to="/games">Practice Now</Link>
                    </Button>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            {/* Concerns */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Card className="card-magical h-full">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <AlertCircle className="w-6 h-6 text-destructive" />
                    <CardTitle className="text-destructive-foreground">
                      Areas to Watch
                    </CardTitle>
                  </div>
                  <CardDescription>
                    Gentle suggestions for consideration
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {concerns.length > 0 ? (
                    concerns.map((concern, index) => (
                      <div
                        key={index}
                        className="p-4 bg-destructive/10 rounded-xl"
                      >
                        <h4 className="font-medium mb-2">{concern.title}</h4>
                        <p className="text-sm text-muted-foreground mb-3">
                          {concern.description}
                        </p>
                        <Badge variant="secondary" className="text-xs">
                          {concern.suggestion}
                        </Badge>
                      </div>
                    ))
                  ) : (
                    <p className="text-muted-foreground text-sm">
                      No major concerns detected. Your child is on track!
                    </p>
                  )}
                  {concerns.length > 0 && (
                    <Button
                      variant="outline"
                      className="w-full btn-bouncy border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground"
                      asChild
                    >
                      <Link to="/parent-chat">Discuss with Expert</Link>
                    </Button>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Supabase Notice */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-8 p-6 bg-accent/20 rounded-3xl text-center"
          >
            <h3 className="text-lg font-semibold text-accent-foreground mb-2">
               Personalized reports coming soon!
            </h3>
            <p className="text-sm text-muted-foreground">
              Connect to Supabase to save and track your child's progress over
              time.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
 
