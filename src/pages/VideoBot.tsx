import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Mic, MicOff, Volume2, VolumeX } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";

interface Character {
  id: string;
  name: string;
  emoji: string;
  description: string;
  color: "primary" | "secondary" | "accent";
}

const characters: Character[] = [
  {
    id: "friendly-robot",
    name: "Robo Friend",
    emoji: "🤖",
    description: "A helpful robot who loves to teach and play!",
    color: "primary",
  },
  {
    id: "magical-cat",
    name: "Whiskers",
    emoji: "🐱‍👤",
    description: "A magical cat with sparkling wisdom!",
    color: "secondary",
  },
  {
    id: "dragon-buddy",
    name: "Spark",
    emoji: "🐲",
    description: "A friendly dragon who breathes learning fire!",
    color: "accent",
  },
  {
    id: "space-alien",
    name: "Zoe",
    emoji: "👽",
    description: "A curious alien exploring Earth's learning!",
    color: "primary",
  },
];

const VideoBot = () => {
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [conversation, setConversation] = useState<string[]>([]);

  const handleStartConversation = () => {
    if (selectedCharacter) {
      const welcomeMessage = `Hi there! I'm ${selectedCharacter.name}! What would you like to learn about today?`;
      setConversation([welcomeMessage]);
      setIsSpeaking(true);
      setTimeout(() => setIsSpeaking(false), 2000);
    }
  };

  const handleVoiceToggle = () => {
    setIsListening(!isListening);
    if (!isListening) {
      setTimeout(() => {
        setIsListening(false);
        const response = "That's a great question! Let me think about that...";
        setConversation(prev => [...prev, response]);
        setIsSpeaking(true);
        setTimeout(() => setIsSpeaking(false), 2000);
      }, 3000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-accent/10">
      <Navigation />
      
      <div className="pt-24 pb-12 px-4">
        <div className="max-w-6xl mx-auto">
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
              AI Video Bot
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose your learning companion and start talking!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Character Selection */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Card className="card-magical">
                <CardHeader>
                  <CardTitle>Choose Your Friend</CardTitle>
                  <CardDescription>Pick a character to be your learning companion</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    {characters.map((character) => (
                      <motion.div
                        key={character.id}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setSelectedCharacter(character)}
                        className={`p-4 rounded-2xl cursor-pointer transition-all duration-200 border-2 ${
                          selectedCharacter?.id === character.id
                            ? `border-${character.color} bg-${character.color}/10`
                            : "border-muted hover:border-muted-foreground"
                        }`}
                      >
                        <div className="text-center">
                          <div className="text-4xl mb-2 character-bounce">{character.emoji}</div>
                          <h3 className="font-semibold mb-1">{character.name}</h3>
                          <p className="text-xs text-muted-foreground">{character.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {selectedCharacter && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-6"
                    >
                      <Button
                        onClick={handleStartConversation}
                        className={`w-full btn-bouncy bg-${selectedCharacter.color} hover:bg-${selectedCharacter.color}-hover text-${selectedCharacter.color}-foreground`}
                      >
                        Start Talking with {selectedCharacter.name}
                      </Button>
                    </motion.div>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            {/* Video Chat Interface */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card className="card-magical">
                <CardHeader>
                  <CardTitle>Video Chat</CardTitle>
                  <CardDescription>
                    {selectedCharacter ? `Talking with ${selectedCharacter.name}` : "Select a character to start"}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {/* Video Area */}
                  <div className="bg-muted/20 rounded-2xl aspect-video flex items-center justify-center mb-6 relative overflow-hidden">
                    <AnimatePresence>
                      {selectedCharacter ? (
                        <motion.div
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ 
                            scale: isSpeaking ? [1, 1.1, 1] : 1, 
                            opacity: 1 
                          }}
                          exit={{ scale: 0, opacity: 0 }}
                          transition={{ 
                            scale: { repeat: isSpeaking ? Infinity : 0, duration: 0.5 },
                            opacity: { duration: 0.3 }
                          }}
                          className="text-center"
                        >
                          <div className="text-8xl mb-4 character-bounce">
                            {selectedCharacter.emoji}
                          </div>
                          <div className={`px-4 py-2 rounded-xl bg-${selectedCharacter.color}/20 text-${selectedCharacter.color}-foreground`}>
                            {selectedCharacter.name}
                          </div>
                        </motion.div>
                      ) : (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="text-center text-muted-foreground"
                        >
                          <div className="text-6xl mb-4">🎥</div>
                          <p>Choose a character to start video chat</p>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Speaking Indicator */}
                    {isSpeaking && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="absolute bottom-4 right-4 flex items-center space-x-2 bg-success/20 text-success-foreground px-3 py-2 rounded-full"
                      >
                        <Volume2 className="w-4 h-4" />
                        <span className="text-sm">Speaking...</span>
                      </motion.div>
                    )}

                    {/* Listening Indicator */}
                    {isListening && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="absolute bottom-4 left-4 flex items-center space-x-2 bg-accent/20 text-accent-foreground px-3 py-2 rounded-full"
                      >
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ repeat: Infinity, duration: 1 }}
                        >
                          <Mic className="w-4 h-4" />
                        </motion.div>
                        <span className="text-sm">Listening...</span>
                      </motion.div>
                    )}
                  </div>

                  {/* Conversation Display */}
                  {conversation.length > 0 && (
                    <div className="mb-4 p-4 bg-muted/30 rounded-xl max-h-32 overflow-y-auto">
                      {conversation.map((message, index) => (
                        <p key={index} className="text-sm mb-2 last:mb-0">
                          <strong>{selectedCharacter?.name}:</strong> {message}
                        </p>
                      ))}
                    </div>
                  )}

                  {/* Controls */}
                  <div className="flex space-x-4">
                    <Button
                      onClick={handleVoiceToggle}
                      disabled={!selectedCharacter}
                      className={`flex-1 btn-bouncy ${
                        isListening 
                          ? "bg-accent hover:bg-accent-hover text-accent-foreground" 
                          : "bg-primary hover:bg-primary-hover text-primary-foreground"
                      }`}
                    >
                      {isListening ? (
                        <>
                          <MicOff className="w-4 h-4 mr-2" />
                          Stop Talking
                        </>
                      ) : (
                        <>
                          <Mic className="w-4 h-4 mr-2" />
                          Talk to Bot
                        </>
                      )}
                    </Button>

                    <Button
                      variant="outline"
                      disabled={!selectedCharacter}
                      className="btn-bouncy border-muted hover:border-primary"
                    >
                      {isSpeaking ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* AI Notice */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8 p-6 bg-accent/20 rounded-3xl text-center"
          >
            <h3 className="text-lg font-semibold text-accent-foreground mb-2">
              🎬 AI Video Companions Coming Soon!
            </h3>
            <p className="text-sm text-muted-foreground">
              Connect to Supabase to enable real-time AI video conversations with voice recognition.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default VideoBot;