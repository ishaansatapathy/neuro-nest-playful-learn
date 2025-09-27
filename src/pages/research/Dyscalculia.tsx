import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const DyscalculiaResearch = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 max-w-5xl mx-auto px-6 py-16">
        {/* Title */}
        <h1 className="text-4xl sm:text-5xl font-bold text-gradient-primary mb-8 text-center">
          Research on Dyscalculia
        </h1>

        {/* Overview */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Overview</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Dyscalculia is a lesser-known but serious learning difference that affects{" "}
            <strong>5–7% of children worldwide</strong>. It is often called “math
            dyslexia” because it impacts the ability to understand numbers,
            perform calculations, and grasp mathematical concepts.  
            <br /><br />
            In India, dyscalculia remains largely undiagnosed, with many children
            being mistaken as “weak in math” rather than receiving proper support.
          </p>
        </section>

        {/* Brain and Psychology */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">The Psychology Behind Dyscalculia</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Brain imaging studies show that children with dyscalculia have
            differences in the parietal lobe, the part of the brain that processes
            numbers and spatial reasoning.  
            <br /><br />
            This means they may struggle with:
          </p>
          <ul className="list-disc list-inside text-lg text-muted-foreground mt-3 space-y-2">
            <li>Understanding number magnitude (knowing 8 is bigger than 6).</li>
            <li>Remembering arithmetic facts (like multiplication tables).</li>
            <li>Grasping abstract concepts like fractions, decimals, or percentages.</li>
            <li>Applying math in daily life (time, money, measurements).</li>
          </ul>
        </section>

        {/* Why India is Lagging */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Why India is Lagging</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            In India, math performance is heavily emphasized in schools, but
            awareness of dyscalculia is nearly absent. Unlike dyslexia, which is
            gaining some recognition, dyscalculia often goes unnoticed.  
            <br /><br />
            Many children face years of stress, poor grades, and even anxiety
            because teachers and parents assume they are not trying hard enough.
            Lack of diagnostic tools and teacher training worsens the issue.
          </p>
        </section>

        {/* Support and Interventions */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Support & Intervention Strategies</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Research shows that with structured support, children with dyscalculia
            can develop math confidence. Strategies include:
          </p>
          <ul className="list-disc list-inside text-lg text-muted-foreground mt-3 space-y-2">
            <li><strong>Concrete-to-Abstract Method:</strong> Using physical objects (blocks, beads) before teaching symbols.</li>
            <li><strong>Visual Supports:</strong> Number lines, charts, and diagrams to aid understanding.</li>
            <li><strong>Technology Tools:</strong> Math learning apps and games that adapt to a child’s level.</li>
            <li><strong>Step-by-Step Learning:</strong> Breaking problems into smaller, manageable steps.</li>
          </ul>
        </section>

        {/* Example / Story */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">A Real-Life Example</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Aarav, a 9-year-old boy, struggled with simple addition and subtraction. 
            He couldn’t remember multiplication tables no matter how much he practiced,
            and he avoided math homework altogether. His teachers thought he was being careless.  
            <br /><br />
            After proper screening, Aarav was diagnosed with dyscalculia. With the use
            of number games, visual aids, and supportive teaching methods, he began to
            understand math concepts at his own pace.  
            <br /><br />
            Today, Aarav feels confident enough to solve basic problems and proudly
            helps his mother with shopping by handling money transactions. His journey
            highlights how the right support can transform learning struggles into growth.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default DyscalculiaResearch;
