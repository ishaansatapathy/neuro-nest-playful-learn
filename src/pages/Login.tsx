import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { AlertCircle } from "lucide-react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleFakeLogin = () => {
    setLoading(true);
    setError(null);
    setSuccess(null);

    setTimeout(() => {
      if (email && password) {
        setSuccess("🎉 Logged in successfully!");
      } else {
        setError("Please enter email and password.");
      }
      setLoading(false);
    }, 1000);
  };

  const handleFakeSignUp = () => {
    setLoading(true);
    setError(null);
    setSuccess(null);

    setTimeout(() => {
      if (email && password) {
        setSuccess("✅ Account created! (Demo only, no real signup)");
      } else {
        setError("Please fill in all fields.");
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-primary/10 px-4">
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold text-gradient-primary">
            Welcome to NeuroNest
          </CardTitle>
          <p className="text-center text-muted-foreground text-sm">
            Create your parent account to start your child’s learning journey
          </p>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid grid-cols-2 mb-6">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="signup">Sign Up</TabsTrigger>
            </TabsList>

            {/* Login Tab */}
            <TabsContent value="login">
              <div className="space-y-4">
                <Input
                  placeholder="parent@example.com"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                  placeholder="Password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Button onClick={handleFakeLogin} disabled={loading} className="w-full">
                  {loading ? "Logging in..." : "Sign In"}
                </Button>
              </div>
            </TabsContent>

            {/* Sign Up Tab */}
            <TabsContent value="signup">
              <div className="space-y-4">
                <Input
                  placeholder="parent@example.com"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                  placeholder="Password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Button onClick={handleFakeSignUp} disabled={loading} className="w-full">
                  {loading ? "Creating account..." : "Sign Up"}
                </Button>
              </div>
            </TabsContent>
          </Tabs>

          {/* Error / Success Messages */}
          {error && (
            <div className="mt-4 flex items-center text-red-600 text-sm">
              <AlertCircle className="w-4 h-4 mr-2" /> {error}
            </div>
          )}
          {success && (
            <div className="mt-4 text-green-600 text-sm">{success}</div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
