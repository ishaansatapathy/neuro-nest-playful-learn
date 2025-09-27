import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import { ArrowLeft, Mic } from "lucide-react";
import { Link } from "react-router-dom";

// Characters
const characters = [
  { id: "robo", name: "Robo Friend", emoji: "🤖", description: "A helpful robot who loves to teach and play!" },
  { id: "whiskers", name: "Whiskers", emoji: "🐱", description: "A magical cat with sparkling wisdom!" },
  { id: "spark", name: "Spark", emoji: "🐲", description: "A friendly dragon who breathes learning fire!" },
  { id: "zoe", name: "Zoe", emoji: "👽", description: "A curious alien exploring Earth's learning!" },
];

// Predefined responses
const responses: Record<string, string> = {
  hello: "Hello there! It's so nice to meet you!",
  hi: "Hi! How are you doing today?",
  adhd: "ADHD means the brain likes to switch channels quickly, making focus tricky but creativity amazing!",
  dyslexia: "Dyslexia makes reading harder, but it often comes with strong problem-solving and imagination skills.",
  dyscalculia: "Dyscalculia makes math feel confusing, but with practice and support, kids can shine in other areas too!",
  math: "Math can feel like a puzzle, but with practice, every piece starts to fit!",
  school: "School can sometimes be hard, but teachers and friends can make the journey fun!",
};

const VideoBot = () => {
  const [selectedCharacter, setSelectedCharacter] = useState<any>(null);
  const [conversation, setConversation] = useState<string[]>([]);
  const [listening, setListening] = useState(false);

  const recognitionRef = useRef<any>(null);

  // Initialize speech recognition
  useEffect(() => {
    const SpeechRecognition =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = "en-US";

      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setConversation((prev) => [...prev, `You: ${transcript}`]);
        handleBotResponse(transcript);
      };

      recognition.onerror = () => {
        setConversation((prev) => [...prev, "Bot: Sorry, I didn’t catch that."]);
      };

      recognition.onend = () => setListening(false);

      recognitionRef.current = recognition;
    }
  }, []);

  // Bot reply function
  const handleBotResponse = (message: string) => {
    let response = "Hmm, I don’t know that yet, but I’ll try to learn!";

    for (const keyword in responses) {
      if (message.toLowerCase().includes(keyword)) {
        response = responses[keyword];
        break;
      }
    }

    setConversation((prev) => [...prev, `${selectedCharacter?.name}: ${response}`]);

    // Speak response
    const utterance = new SpeechSynthesisUtterance(response);
    utterance.lang = "en-US";
    speechSynthesis.speak(utterance);
  };

  // Toggle mic
  const toggleMic = () => {
    if (!selectedCharacter) return;

    if (!listening) {
      setListening(true);
      recognitionRef.current?.start();
    } else {
      recognitionRef.current?.stop();
      setListening(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-accent/10">
      <Navigation />

      <div className="pt-24 pb-12 px-6 max-w-6xl mx-auto">
        {/* Back Button */}
        <Button variant="ghost" asChild>
          <Link to="/" className="flex items-center space-x-2 mb-6">
            <ArrowLeft className="w-4 h-4" /> <span>Back to Home</span>
          </Link>
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Character Selection */}
          <div className="card-magical p-6 rounded-2xl">
            <h2 className="text-2xl font-bold mb-4">Choose Your Friend</h2>
            <div className="grid grid-cols-2 gap-4">
              {characters.map((char) => (
                <div
                  key={char.id}
                  onClick={() => setSelectedCharacter(char)}
                  className={`p-4 rounded-xl text-center cursor-pointer border-2 transition ${
                    selectedCharacter?.id === char.id
                      ? "border-primary bg-primary/10"
                      : "border-muted hover:border-primary"
                  }`}
                >
                  <div className="text-4xl mb-2">{char.emoji}</div>
                  <h3 className="font-semibold">{char.name}</h3>
                  <p className="text-xs text-muted-foreground">{char.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Chat Section */}
          <div className="card-magical p-6 rounded-2xl">
            <h2 className="text-2xl font-bold mb-4">Chat</h2>
            {selectedCharacter ? (
              <div className="text-center">
                <div className="text-6xl">{selectedCharacter.emoji}</div>
                <p className="font-semibold mt-2">{selectedCharacter.name}</p>
              </div>
            ) : (
              <p className="text-muted-foreground text-center">Choose a character to start</p>
            )}

            {/* Conversation */}
            <div className="mt-6 h-64 overflow-y-auto bg-muted/30 p-4 rounded-xl text-left">
              {conversation.map((msg, i) => (
                <p key={i} className="mb-2 text-sm">
                  {msg}
                </p>
              ))}
            </div>

            {/* Mic Button */}
            <Button
              onClick={toggleMic}
              disabled={!selectedCharacter}
              className="w-full mt-4 flex items-center justify-center"
            >
              <Mic className="w-4 h-4 mr-2" />
              {listening ? "Stop Talking" : "Start Talking"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoBot;
