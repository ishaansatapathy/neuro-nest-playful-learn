import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import StorytellingSection from "@/components/StorySection";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <StorytellingSection />

        {/* Research Preview Section */}
        <section className="py-16 bg-gradient-to-br from-background via-primary/5 to-accent/10">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-center text-gradient-primary mb-12">
              Explore Research
            </h2>
            <p className="text-center text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Dive into ADHD, Dyslexia, and Dyscalculia studies that help parents
              understand learning differences better.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* ADHD Preview */}
              <Card className="card-magical text-center">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold">ADHD</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Learn about Attention Deficit Hyperactivity Disorder and support strategies.
                  </p>
                  <Link
                    to="/research"
                    className="inline-block bg-primary text-primary-foreground px-6 py-2 rounded-xl hover:bg-primary-hover transition"
                  >
                    See All Research
                  </Link>
                </CardContent>
              </Card>

              {/* Dyslexia Preview */}
              <Card className="card-magical text-center">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold">Dyslexia</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Explore Dyslexia, reading challenges, and literacy improvement methods.
                  </p>
                  <Link
                    to="/research"
                    className="inline-block bg-primary text-primary-foreground px-6 py-2 rounded-xl hover:bg-primary-hover transition"
                  >
                    See All Research
                  </Link>
                </CardContent>
              </Card>

              {/* Dyscalculia Preview */}
              <Card className="card-magical text-center">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold">Dyscalculia</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Discover Dyscalculia and how it impacts math learning.
                  </p>
                  <Link
                    to="/research"
                    className="inline-block bg-primary text-primary-foreground px-6 py-2 rounded-xl hover:bg-primary-hover transition"
                  >
                    See All Research
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;

