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
} from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";

// Predefined Q&A database with descriptive + storytelling responses
const predefinedAnswers: Record<string, string> = {
  "what are early signs of dyslexia?":
    "Early signs of dyslexia can appear in preschool and early primary school years. These include difficulty recognizing letters, confusing words that look similar, slow or labored reading, frequent spelling mistakes, and avoiding reading tasks. Some children may also have trouble remembering sequences like days of the week or following multi-step instructions.\n\nStory example: Ananya loved listening to stories but grew frustrated when asked to read on her own. While her classmates quickly recognized simple words like 'dog' and 'sun', she struggled to sound them out and often guessed. Her teacher noticed she mixed up letters like 'b' and 'd' frequently, which pointed to possible dyslexia.",

  "how to support adhd at home?":
    "Supporting a child with ADHD at home requires consistency, patience, and structured routines. Parents can break tasks into smaller steps, give short and clear instructions, provide positive reinforcement for effort, and allow frequent breaks. Visual reminders such as charts, checklists, or colorful planners can also be effective.\n\nStory example: Rahul’s parents created a weekly routine chart that included schoolwork, playtime, and rest. Every time Rahul completed a task like brushing his teeth or finishing homework, he earned a star sticker. Over time, this simple visual system helped him stay motivated and feel proud of his progress.",

  "dyscalculia vs math anxiety?":
    "Dyscalculia is a learning difference that affects how children understand numbers and mathematical concepts. It is consistent and persists despite practice. Math anxiety, on the other hand, is an emotional response—children may understand math but freeze or panic during tests or problem-solving.\n\nStory example: Aarav struggled to understand that '5' meant five actual objects, even after repeated explanations, which showed signs of dyscalculia. Meera, however, could solve fractions during practice at home but panicked during tests, making mistakes she normally wouldn’t—this was math anxiety.",

  "when to seek professional help?":
    "Professional help is important if your child consistently struggles with basic skills, avoids reading or math tasks, or becomes visibly frustrated despite support at home. Teachers often notice patterns in class, and early assessments can make intervention more effective.\n\nStory example: Aarohi’s teacher noticed that she often avoided reading aloud and complained of stomach aches before English lessons. Concerned, her parents consulted a specialist. The diagnosis of dyslexia allowed for tailored strategies that made learning easier for her.",

  "building confidence in learning":
    "Confidence grows when children feel that their effort is valued. Parents should celebrate attempts rather than only results, break big tasks into manageable parts, and encourage curiosity instead of perfection. A supportive environment reduces fear of failure.\n\nStory example: Kabir wrote a story full of spelling errors, but his teacher praised his creativity and imagination first. This positive feedback motivated him to write more stories, and over time, his spelling improved naturally.",

  "accommodations for school":
    "Accommodations are adjustments in teaching or assessment that help children with learning differences perform at their potential. These include extra time during tests, simplified instructions, access to audiobooks, and using assistive technology like text-to-speech.\n\nStory example: Rohan’s school allowed him to use graph paper for math exams to help align numbers properly and gave him 20 extra minutes. These small changes reduced his stress and significantly improved his performance.",

  "how to help my child focus during homework?":
    "Children with ADHD or dyslexia often benefit from structured focus techniques. Breaking homework into small time slots with short breaks, using timers, and minimizing distractions can improve concentration. Rewards for effort can also encourage consistency.\n\nStory example: Diya’s mother set a 15-minute study timer followed by a 5-minute dance break. This playful approach helped Diya complete her homework without losing interest.",

  "are learning differences lifelong?":
    "Yes, learning differences such as ADHD, dyslexia, and dyscalculia are lifelong conditions. However, with early intervention and continuous support, children develop coping strategies and can thrive academically and personally. Many successful professionals have learning differences and use tools to manage challenges.\n\nStory example: Karan was diagnosed with dyslexia at age 8. He struggled through school but learned to use text-to-speech apps in college. With these tools, he excelled in architecture and eventually built a successful career.",

  "how to explain learning differences to my child?":
    "Children should be told that learning differences do not mean they are less capable. Use positive and simple explanations about how brains work in different ways. Encourage them to see their strengths alongside the challenges.\n\nStory example: Aarav’s father told him, 'Your brain is like a superhero’s. It may take longer to read, but it’s amazing at solving puzzles and creating ideas.' Aarav began to see himself as capable rather than broken.",

  "can learning differences affect emotions?":
    "Yes, children with learning differences may feel anxious, embarrassed, or frustrated if they struggle with tasks their peers find easy. Emotional support is crucial to build resilience and self-worth. Parents and teachers should validate their feelings while emphasizing strengths.\n\nStory example: Sanjana was often teased for reading slowly. She felt ashamed until her mother reminded her how talented she was at drawing. Recognizing her strengths helped her rebuild confidence.",

  "what role do teachers play?":
    "Teachers play a critical role in spotting early signs, offering classroom adjustments, and collaborating with parents for support. Their understanding can transform a child’s learning experience.\n\nStory example: Priya’s teacher noticed she reversed letters frequently and suggested an assessment. This timely observation allowed Priya to receive early intervention, which improved her reading skills significantly.",

  "how can technology help?":
    "Technology provides tools like text-to-speech applications, audiobooks, interactive math apps, and spelling assistance software. These tools make learning more engaging and accessible.\n\nStory example: Arjun used an app that read his history textbook aloud while highlighting words on the screen. This made reading less stressful and helped him enjoy learning.",

  "is adhd always hyperactive?":
    "No, ADHD presents in different forms. The hyperactive type includes restlessness and impulsivity, but the inattentive type looks more like daydreaming or losing focus. Many children have a combination of both.\n\nStory example: Sneha was often quiet in class but seemed to drift off into daydreams and missed instructions. Unlike the restless kids, her ADHD was inattentive type.",

  "can diet and lifestyle help?":
    "Yes, lifestyle changes such as regular sleep, balanced nutrition, and physical activity can improve attention and reduce anxiety. While they do not cure learning differences, they create a stronger foundation for learning.\n\nStory example: Rehan was restless and distracted until his parents reduced sugary snacks and ensured regular sleep. Over time, he became calmer and more focused during study sessions.",

  "how to handle bullying at school?":
    "Bullying can deeply affect children with learning differences. Parents should work with teachers to address it, build their child’s self-esteem, and teach coping strategies. It is important that children understand they are not defined by bullies’ opinions.\n\nStory example: Ayaan was teased for reading slowly. His teacher intervened, explained to the class what learning differences mean, and encouraged empathy. The teasing stopped, and Ayaan felt more accepted.",
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

    // Find predefined answer
    const key = Object.keys(predefinedAnswers).find((q) =>
      newMessage.toLowerCase().includes(q.split("?")[0])
    );

    const botMessage: Message = {
      id: (Date.now() + 1).toString(),
      text:
        key && predefinedAnswers[key]
          ? predefinedAnswers[key]
          : "I'm sorry, I don’t have an answer to that right now. Please try one of the common questions below.",
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
                  <CardDescription>
                    Available 24/7 to help with your questions
                  </CardDescription>
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
                    className={`flex ${
                      message.isUser ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${
                        message.isUser
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      <p className="text-sm whitespace-pre-line">
                        {message.text}
                      </p>
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
                  className={`btn-bouncy rounded-xl ${
                    isListening ? "bg-accent text-accent-foreground" : ""
                  }`}
                >
                  {isListening ? (
                    <MicOff className="w-4 h-4" />
                  ) : (
                    <Mic className="w-4 h-4" />
                  )}
                </Button>
                <Button
                  type="submit"
                  className="btn-bouncy bg-primary hover:bg-primary-hover rounded-xl"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Quick Topics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8"
          >
            <h3 className="text-lg font-semibold mb-4 text-center">
              Common Questions
            </h3>
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







