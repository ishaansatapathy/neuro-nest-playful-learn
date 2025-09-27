import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const DyslexiaResearch = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 max-w-5xl mx-auto px-6 py-16">
        {/* Title */}
        <h1 className="text-4xl sm:text-5xl font-bold text-gradient-primary mb-8 text-center">
          Research on Dyslexia
        </h1>

        {/* Overview */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Overview</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Dyslexia is a learning difference that affects{" "}
            <strong>10–15% of school-aged children</strong> worldwide. It is the most
            common cause of reading, writing, and spelling difficulties. In India,
            experts estimate that nearly <strong>35 million children</strong> may have
            dyslexia, yet awareness and support systems remain minimal compared to
            developed countries.
          </p>
        </section>

        {/* Brain and Psychology */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">The Psychology Behind Dyslexia</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Dyslexia is not related to intelligence but to how the brain processes
            written and spoken language. Brain imaging studies show that children
            with dyslexia use different neural pathways for reading. They often
            struggle with phonological processing — the ability to connect letters
            with their sounds — making reading slower and less automatic. This can
            also affect spelling, writing, and comprehension.
          </p>
        </section>

        {/* Why India is Lagging */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Why India is Lagging</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Dyslexia is often misunderstood in India, where children may be labeled
            as “lazy” or “careless” instead of being screened for learning
            differences. Schools rarely have mandatory screening programs, and
            teacher training on dyslexia remains limited. As a result, children
            often go undiagnosed until secondary school, losing years of critical
            learning support.
          </p>
        </section>

        {/* Support and Interventions */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Support & Intervention Strategies</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            While dyslexia cannot be “cured,” with the right interventions, children
            can read and write effectively. Research recommends:
          </p>
          <ul className="list-disc list-inside text-lg text-muted-foreground mt-3 space-y-2">
            <li><strong>Phonics-based Training:</strong> Teaching children to decode sounds and blend words.</li>
            <li><strong>Multi-Sensory Learning:</strong> Using touch, movement, and visuals to reinforce reading.</li>
            <li><strong>Assistive Technology:</strong> Tools like text-to-speech software, audiobooks, and reading apps.</li>
            <li><strong>Early Screening:</strong> Identifying signs as early as kindergarten for timely intervention.</li>
          </ul>
        </section>

        {/* Example / Story */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">A Real-Life Example</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Ananya, an 8-year-old girl, struggled with reading aloud in class. She
            often mixed up letters like “b” and “d” and took much longer than her
            peers to complete assignments. Her teachers initially thought she was
            careless, but a specialist diagnosed her with dyslexia.  
            <br /><br />
            With phonics-based reading lessons, audiobooks for homework, and support
            from her parents, Ananya slowly gained confidence. She discovered a love
            for storytelling and now writes her own short stories.  
            <br /><br />
            This shows how children with dyslexia, when supported, can flourish in
            creative and academic fields.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default DyslexiaResearch;
