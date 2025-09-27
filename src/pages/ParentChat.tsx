import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";


const knowledgeBase: Record<string, string> = {
  hello: "Hello 👋! Welcome to NeuroNest Parent Chat. How can I support you today?",
  adhd: "ADHD in children means they may have challenges focusing, sitting still, or finishing tasks. Symptoms include fidgeting, forgetfulness, and switching attention quickly. 🌟 But kids with ADHD are often very creative and full of energy.",
  "adhd symptoms": "ADHD symptoms may include restlessness, impulsivity, daydreaming, or trouble finishing homework. ✨ With guidance and patience, these children can thrive!",
  dyslexia: "Dyslexia is when reading and spelling feel harder 🧩. Kids might mix up letters or read slowly, but they often excel in creativity, problem-solving, and storytelling.",
  "signs of dyslexia": "Signs include reversing letters (like b/d, p/q), trouble sounding out words, or avoiding reading aloud.",
  dyscalculia: "Dyscalculia affects math skills 🔢. Kids may struggle with numbers, symbols, or calculations — but they shine in music, art, and creative thinking.",
  "dyscalculia symptoms": "Signs include mixing up math signs (+, -, ÷), difficulty counting, or trouble with number-related tasks like reading clocks or money.",
  school: "Some kids may find school overwhelming at times ⛰️. It's important to focus on their strengths while giving them support in the areas they struggle.",
  support: "NeuroNest encourages early screening 📊, supportive teachers, and family engagement 💜. Together, every child can shine!",
};

const ParentChat = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  
  const handleFakeApiCall = (message: string) => {
    setMessages((prev) => [...prev, `You: ${message}`]);
    setMessages((prev) => [...prev, "Assistant is typing..."]);

    setLoading(true);

    setTimeout(() => {
      setMessages((prev) => prev.filter((msg) => msg !== "Assistant is typing..."));

      const lowerMsg = message.toLowerCase();
      let response =
        "That's a thoughtful question 🤔. I don’t know much about it yet, but I’ll try to learn with you!";

      for (const keyword in knowledgeBase) {
        if (lowerMsg.includes(keyword)) {
          response = knowledgeBase[keyword];
          break;
        }
      }

      setMessages((prev) => [...prev, `Assistant: ${response}`]);
      setLoading(false);
    }, 800); 
  };

 
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    handleFakeApiCall(input);
    setInput("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/5 to-primary/10">
      <Navigation />

      <div className="pt-24 pb-12 px-6 max-w-4xl mx-auto">
        {/* Back Button */}
        <Button variant="ghost" asChild>
          <Link to="/" className="flex items-center space-x-2 mb-6">
            <ArrowLeft className="w-4 h-4" /> <span>Back to Home</span>
          </Link>
        </Button>

        <div className="card-magical p-6 rounded-2xl">
          <h2 className="text-2xl font-bold mb-4">Parent Chat 💬</h2>
          <p className="text-muted-foreground mb-6">
            Ask questions about ADHD, Dyslexia, Dyscalculia, or general school/learning concerns.
          </p>

          {/* Conversation */}
          <div className="h-80 overflow-y-auto bg-muted/20 p-4 rounded-xl mb-4 text-sm">
            {messages.map((msg, idx) => (
              <p
                key={idx}
                className={`mb-2 ${
                  msg.startsWith("You:") ? "text-blue-600 font-medium" : "text-purple-700"
                }`}
              >
                {msg}
              </p>
            ))}
            {loading && <p className="italic text-gray-500">Assistant is typing...</p>}
          </div>

          {/* Input box */}
          <form onSubmit={handleSubmit} className="flex gap-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your question here..."
              className="flex-1"
            />
            <Button type="submit" className="btn-bouncy">
              Send
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ParentChat;






