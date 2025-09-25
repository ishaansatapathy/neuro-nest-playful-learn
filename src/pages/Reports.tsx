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

const Reports = () => {
  const childName = "Alex"; // ✅ Mock child name for demo

  // Mock handler for download
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
                  {[
                    { skill: "Creative Problem Solving", score: 95 },
                    { skill: "Visual Pattern Recognition", score: 88 },
                    { skill: "Spatial Reasoning", score: 92 },
                  ].map((strength, index) => (
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
                  ))}
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
                  {[
                    { skill: "Letter Recognition", games: 5, difficulty: "Medium" },
                    { skill: "Number Sequencing", games: 3, difficulty: "Easy" },
                    { skill: "Focus Training", games: 4, difficulty: "Easy" },
                  ].map((area, index) => (
                    <div key={index} className="p-4 bg-warning/10 rounded-xl">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium">{area.skill}</span>
                        <Badge variant="outline">{area.difficulty}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {area.games} recommended games available
                      </p>
                    </div>
                  ))}
                  <Button
                    className="w-full btn-bouncy bg-warning hover:bg-warning/80 text-warning-foreground"
                    asChild
                  >
                    <Link to="/games">Practice Now</Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Possible Concerns */}
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
                  <div className="p-4 bg-destructive/10 rounded-xl">
                    <h4 className="font-medium mb-2">
                      Letter Confusion Patterns
                    </h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Frequent confusion between 'b', 'd', 'p', and 'q' observed
                      in games.
                    </p>
                    <Badge variant="secondary" className="text-xs">
                      Consider: Vision screening
                    </Badge>
                  </div>

                  <div className="p-4 bg-muted/50 rounded-xl">
                    <h4 className="font-medium mb-2">Focus Variability</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Attention spans vary significantly across different
                      activities.
                    </p>
                    <Badge variant="secondary" className="text-xs">
                      Consider: ADHD assessment
                    </Badge>
                  </div>

                  <Button
                    variant="outline"
                    className="w-full btn-bouncy border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground"
                    asChild
                  >
                    <Link to="/parent-chat">Discuss with Expert</Link>
                  </Button>
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
              📊 Personalized reports coming soon!
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
