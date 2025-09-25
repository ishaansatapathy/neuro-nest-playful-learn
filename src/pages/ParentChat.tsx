import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Send, Mic, MicOff, MessageCircle, Bot } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";

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
      text: "Hello! I'm here to help you understand learning differences and support your child's journey. What would you like to know about ADHD, Dyslexia, or Dyscalculia?",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [newMessage, setNewMessage] = useState("");
  const [isListening, setIsListening] = useState(false);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: newMessage,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setNewMessage("");

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: "Thank you for your question! I'd be happy to help. To provide personalized advice about learning differences, I'll need to connect to our AI service. This feature will be available once the project is connected to Supabase for backend functionality.",
        isUser: false,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);
  };

  const toggleVoiceInput = () => {
    setIsListening(!isListening);
    // Voice input implementation would go here
    setTimeout(() => setIsListening(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-accent/10">
      <Navigation />
      
      <div className="pt-24 pb-12 px-4">
        <div className="max-w-4xl mx-auto">
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
              Parent Support Chat
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get expert guidance on ADHD, Dyslexia, and Dyscalculia
            </p>
          </motion.div>

          {/* Chat Interface */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
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
                        className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${
                          message.isUser
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        <p className="text-sm">{message.text}</p>
                        <p className="text-xs opacity-70 mt-1">
                          {message.timestamp.toLocaleTimeString()}
                        </p>
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
          </motion.div>

          {/* Quick Topics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8"
          >
            <h3 className="text-lg font-semibold mb-4 text-center">Common Questions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "What are early signs of dyslexia?",
                "How to support ADHD at home?",
                "Dyscalculia vs math anxiety?",
                "When to seek professional help?",
                "Building confidence in learning",
                "Accommodations for school",
              ].map((topic, index) => (
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

          {/* AI Notice */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8 p-6 bg-accent/20 rounded-3xl text-center"
          >
            <h3 className="text-lg font-semibold text-accent-foreground mb-2">
              🤖 AI-Powered Support Coming Soon!
            </h3>
            <p className="text-sm text-muted-foreground">
              Connect to Supabase to enable real-time AI conversations and personalized advice.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ParentChat;