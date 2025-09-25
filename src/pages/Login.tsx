import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Mail, Lock, User, Baby } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Note: This would connect to Supabase authentication
    // For now, just simulate loading
    setTimeout(() => {
      setIsLoading(false);
      alert("Authentication will be available once Supabase is connected!");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-accent/10">
      <Navigation />
      
      <div className="pt-24 pb-12 px-4">
        <div className="max-w-md mx-auto">
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

          {/* Main Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="card-magical">
              <CardHeader className="text-center">
                <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4 character-bounce">
                  <span className="text-white font-bold text-2xl">N</span>
                </div>
                <CardTitle className="text-2xl text-gradient-primary">Welcome to NeuroNest</CardTitle>
                <CardDescription>
                  Create your parent account to start your child's learning journey
                </CardDescription>
              </CardHeader>

              <CardContent>
                <Tabs defaultValue="login" className="space-y-4">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="login" className="btn-bouncy">Login</TabsTrigger>
                    <TabsTrigger value="signup" className="btn-bouncy">Sign Up</TabsTrigger>
                  </TabsList>

                  <TabsContent value="login" className="space-y-4">
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="email" className="flex items-center space-x-2">
                          <Mail className="w-4 h-4 text-primary" />
                          <span>Email</span>
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="parent@example.com"
                          required
                          className="rounded-xl"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="password" className="flex items-center space-x-2">
                          <Lock className="w-4 h-4 text-primary" />
                          <span>Password</span>
                        </Label>
                        <Input
                          id="password"
                          type="password"
                          required
                          className="rounded-xl"
                        />
                      </div>

                      <Button
                        type="submit"
                        className="w-full btn-bouncy bg-primary hover:bg-primary-hover text-primary-foreground rounded-xl"
                        disabled={isLoading}
                      >
                        {isLoading ? "Signing in..." : "Sign In"}
                      </Button>
                    </form>
                  </TabsContent>

                  <TabsContent value="signup" className="space-y-4">
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="parent-name" className="flex items-center space-x-2">
                          <User className="w-4 h-4 text-primary" />
                          <span>Parent Name</span>
                        </Label>
                        <Input
                          id="parent-name"
                          type="text"
                          placeholder="Your name"
                          required
                          className="rounded-xl"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="signup-email" className="flex items-center space-x-2">
                          <Mail className="w-4 h-4 text-primary" />
                          <span>Email</span>
                        </Label>
                        <Input
                          id="signup-email"
                          type="email"
                          placeholder="parent@example.com"
                          required
                          className="rounded-xl"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="signup-password" className="flex items-center space-x-2">
                          <Lock className="w-4 h-4 text-primary" />
                          <span>Password</span>
                        </Label>
                        <Input
                          id="signup-password"
                          type="password"
                          required
                          className="rounded-xl"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="child-name" className="flex items-center space-x-2">
                          <Baby className="w-4 h-4 text-secondary" />
                          <span>Child's Name</span>
                        </Label>
                        <Input
                          id="child-name"
                          type="text"
                          placeholder="Your child's name"
                          required
                          className="rounded-xl"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="child-age" className="flex items-center space-x-2">
                          <Baby className="w-4 h-4 text-secondary" />
                          <span>Child's Age</span>
                        </Label>
                        <Input
                          id="child-age"
                          type="number"
                          min="3"
                          max="12"
                          placeholder="Age"
                          required
                          className="rounded-xl"
                        />
                      </div>

                      <Button
                        type="submit"
                        className="w-full btn-bouncy bg-secondary hover:bg-secondary-hover text-secondary-foreground rounded-xl"
                        disabled={isLoading}
                      >
                        {isLoading ? "Creating account..." : "Create Account"}
                      </Button>
                    </form>
                  </TabsContent>
                </Tabs>
              </CardContent>

              <CardFooter className="text-center">
                <p className="text-sm text-muted-foreground">
                  By continuing, you agree to our Terms of Service and Privacy Policy
                </p>
              </CardFooter>
            </Card>
          </motion.div>

          {/* Supabase Notice */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 p-4 bg-accent/20 rounded-xl text-center"
          >
            <p className="text-sm text-accent-foreground">
              🔗 Authentication requires Supabase connection
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Login;