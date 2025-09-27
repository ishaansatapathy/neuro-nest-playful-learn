import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ArrowLeft,
  Send,
  Mic,
  MicOff,
  MessageCircle,
  Bot,
  Volume2,
} from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";

// --- Predefined Q&A database ---
const predefinedAnswers: Record<string, string> = {
  "what are early signs of dyslexia?":
    "Early signs of dyslexia can appear in preschool and early primary school years. These include difficulty recognizing letters, confusing words that look similar, slow or labored reading, frequent spelling mistakes, and avoiding reading tasks.\n\nExample: Ananya loved listening to stories but grew frustrated when asked to read on her own. She often guessed words and mixed up letters like 'b' and 'd', which pointed to possible dyslexia.",

  "how to support adhd at home?":
    "Supporting a child with ADHD at home requires consistency, patience, and structured routines. Break tasks into smaller steps, give clear instructions, provide positive reinforcement, and allow frequent breaks.\n\nExample: Rahul’s parents created a weekly routine chart. Every time Rahul completed a task like finishing homework, he earned a star sticker. This helped him stay motivated and proud of his progress.",

  "dyscalculia vs math anxiety?":
    "Dyscalculia is a learning difference where children struggle to understand numbers, while math anxiety is a fear of doing math even if skills are present.\n\nExample: Priya froze every time she saw a math test, despite knowing her tables. That was anxiety. On the other hand, Aarav couldn’t recognize that '12' means twelve objects — a sign of dyscalculia.",

  "when to seek professional help?":
    "Parents should seek help if a child consistently struggles with reading, writing, attention, or numbers despite regular practice and school support.\n\nExample: After six months of extra reading time at home, Sita still reversed letters and avoided reading. Her parents sought professional help, leading to early intervention for dyslexia.",

  "building confidence in learning":
    "Confidence comes when children feel supported and experience small wins. Celebrate effort, not just results, and avoid comparisons with peers.\n\nExample: Karan used to hate writing essays. His teacher praised just one sentence he wrote well, which encouraged him to try harder next time. Slowly, he began enjoying writing.",

  "accommodations for school":
    "Schools can provide accommodations like extra time in exams, audiobooks, or breaking tasks into smaller steps. These adjustments don’t lower standards but allow children to succeed.\n\nExample: Ria was given 15 extra minutes in her math exam. That reduced her stress, and she performed much better without feeling rushed.",
};

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const ParentChat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi! I’m here to help you with ADHD, Dyslexia, or Dyscalculia. What would you like to ask?",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [newMessage, setNewMessage] = useState("");
  const [isListening, setIsListening] = useState(false);

  // --- Speak Function ---
  const speakText = (text: string) => {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 1;
      utterance.pitch = 1;
      utterance.volume = 1;
      window.speechSynthesis.speak(utterance);
    } else {
      alert("Sorry, your browser does not support speech synthesis.");
    }
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: newMessage,
      isUser: true,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);

    // Match user input to predefined questions
    const key = Object.keys(predefinedAnswers).find((q) =>
      newMessage.toLowerCase().includes(q.split("?")[0])
    );

    const botMessage: Message = {
      id: (Date.now() + 1).toString(),
      text:
        key && predefinedAnswers[key]
          ? predefinedAnswers[key]
          : "I don’t have an answer for that yet. Please try one of the common questions below.",
      isUser: false,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, botMessage]);
    setNewMessage("");
  };

  const toggleVoiceInput = () => {
    setIsListening(!isListening);
    setTimeout(() => setIsListening(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-accent/10">
      <Navigation />

      <div className="pt-24 pb-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="mb-6">
            <Button variant="ghost" asChild className="btn-bouncy">
              <Link to="/" className="flex items-center space-x-2">
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Home</span>
              </Link>
            </Button>
          </motion.div>

          {/* Header */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
            <h1 className="text-4xl sm:text-5xl font-bold text-gradient-primary mb-4">
              Parent Support Chat
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get expert guidance on ADHD, Dyslexia, and Dyscalculia
            </p>
          </motion.div>

          {/* Chat Interface */}
          <Card className="card-magical">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center character-bounce">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <CardTitle className="flex items-center space-x-2">
                    <MessageCircle className="w-5 h-5 text-primary" />
                    <span>NeuroNest Support Bot</span>
                  </CardTitle>
                  <CardDescription>Available 24/7 to help with your questions</CardDescription>
                </div>
              </div>
            </CardHeader>

            <CardContent>
              {/* Messages */}
              <div className="space-y-4 mb-6 max-h-96 overflow-y-auto">
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`relative max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${
                        message.isUser
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      <p className="text-sm whitespace-pre-line">{message.text}</p>
                      <p className="text-xs opacity-70 mt-1">{message.timestamp.toLocaleTimeString()}</p>
                      {/* Speaker button for bot responses */}
                      {!message.isUser && (
                        <button
                          onClick={() => speakText(message.text)}
                          className="absolute -right-8 top-2 text-primary hover:text-primary-hover"
                        >
                          <Volume2 className="w-5 h-5" />
                        </button>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Input Form */}
              <form onSubmit={handleSendMessage} className="flex space-x-2">
                <Input
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Ask about learning differences, strategies, or support..."
                  className="flex-1 rounded-xl"
                />
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  onClick={toggleVoiceInput}
                  className={`btn-bouncy rounded-xl ${isListening ? "bg-accent text-accent-foreground" : ""}`}
                >
                  {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
                </Button>
                <Button type="submit" className="btn-bouncy bg-primary hover:bg-primary-hover rounded-xl">
                  <Send className="w-4 h-4" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Quick Topics */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mt-8">
            <h3 className="text-lg font-semibold mb-4 text-center">Common Questions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {Object.keys(predefinedAnswers).map((topic, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="btn-bouncy text-left justify-start h-auto p-4 border-muted hover:border-primary"
                  onClick={() => setNewMessage(topic)}
                >
                  {topic}
                </Button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ParentChat;








