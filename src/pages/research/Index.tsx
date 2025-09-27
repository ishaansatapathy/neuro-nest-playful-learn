import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const ResearchIndex = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-accent/10">
      <Navigation />

      <main className="pt-24 pb-16 max-w-6xl mx-auto px-6">
        <h1 className="text-5xl font-bold text-center text-gradient-primary mb-8">
          Research Papers
        </h1>
        <p className="text-center text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
          Dive into in-depth research about ADHD, Dyslexia, and Dyscalculia. These resources 
          provide parents with psychological insights, statistics, and practical strategies 
          supported by global studies.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* ADHD */}
          <Card className="card-magical text-center">
            <CardHeader>
              <CardTitle className="text-xl font-semibold">ADHD</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Explore ADHD psychology and why consistent support at home and school matters.
              </p>
              <Link
                to="/research/adhd"
                className="inline-block bg-primary text-primary-foreground px-6 py-2 rounded-xl hover:bg-primary-hover transition"
              >
                Read ADHD Research
              </Link>
            </CardContent>
          </Card>

          {/* Dyslexia */}
          <Card className="card-magical text-center">
            <CardHeader>
              <CardTitle className="text-xl font-semibold">Dyslexia</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Understand how Dyslexia impacts reading and language, with strategies supported by case studies.
              </p>
              <Link
                to="/research/dyslexia"
                className="inline-block bg-primary text-primary-foreground px-6 py-2 rounded-xl hover:bg-primary-hover transition"
              >
                Read Dyslexia Research
              </Link>
            </CardContent>
          </Card>

          {/* Dyscalculia */}
          <Card className="card-magical text-center">
            <CardHeader>
              <CardTitle className="text-xl font-semibold">Dyscalculia</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Learn about Dyscalculia, its impact on math learning, and evidence-based interventions.
              </p>
              <Link
                to="/research/dyscalculia"
                className="inline-block bg-primary text-primary-foreground px-6 py-2 rounded-xl hover:bg-primary-hover transition"
              >
                Read Dyscalculia Research
              </Link>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ResearchIndex;
