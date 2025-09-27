import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const ADHDResearch = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 max-w-5xl mx-auto px-6 py-16">
        {/* Title */}
        <h1 className="text-4xl sm:text-5xl font-bold text-gradient-primary mb-8 text-center">
          Research on ADHD (Attention Deficit Hyperactivity Disorder)
        </h1>

        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Overview</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            ADHD is a neurodevelopmental condition that affects around{" "}
            <strong>7–10% of children worldwide</strong>. In India, estimates suggest
            that nearly <strong>30% of children with learning differences</strong> may
            show ADHD-related symptoms. Despite its prevalence, ADHD often goes
            undiagnosed due to lack of awareness and stigma.
          </p>
        </section>

        {/* Psychology Behind ADHD */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">The Psychology Behind ADHD</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            ADHD is linked to differences in brain functioning, particularly in areas
            responsible for attention, impulse control, and executive function. 
            Research shows that children with ADHD often have altered dopamine
            regulation, which affects motivation and reward processing. This means
            tasks that seem simple for others can feel overwhelming or boring,
            leading to distraction or hyperactivity.
          </p>
        </section>

        {/* Why India is Lagging */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Why India is Lagging</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            India faces challenges in ADHD recognition due to limited awareness
            among parents and teachers, inadequate training for psychologists, and
            stigma around mental health. While Western countries have widespread
            screening in schools, Indian children often go undiagnosed until much
            later, which affects their education and emotional wellbeing.
          </p>
        </section>

        {/* Medical and Therapy Approaches */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Medical & Therapy Approaches</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            While there is no “cure” for ADHD, treatments can significantly improve
            daily functioning. These include:
          </p>
          <ul className="list-disc list-inside text-lg text-muted-foreground mt-3 space-y-2">
            <li><strong>Behavioral Therapy:</strong> Teaching children routines, goal-setting, and social skills.</li>
            <li><strong>Medication:</strong> Stimulants and non-stimulants that regulate brain chemistry (used under medical supervision).</li>
            <li><strong>School Accommodations:</strong> Allowing extra time for exams, flexible seating, and activity breaks.</li>
            <li><strong>Parental Support:</strong> Structured routines, positive reinforcement, and clear expectations at home.</li>
          </ul>
        </section>

        {/* Story Example */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">A Real-Life Example</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Aarav, a 9-year-old boy, struggled to sit through his classes. His teachers
            thought he was “naughty” because he often interrupted or forgot homework.
            After screening, Aarav was diagnosed with ADHD. Instead of punishment,
            his parents introduced a structured morning routine, set small goals, and
            used reward charts for his efforts. His teachers allowed him short
            movement breaks during lessons. Over time, Aarav became more engaged,
            and his confidence grew.  
            <br /><br />
            This shows how with the right strategies, children with ADHD can thrive.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ADHDResearch;
