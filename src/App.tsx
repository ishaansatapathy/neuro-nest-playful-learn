import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Index from "./pages/Index";
import Login from "./pages/Login";
import Games from "./pages/Games";
import Reports from "./pages/Reports";
import ParentChat from "./pages/ParentChat";
import VideoBot from "./pages/VideoBot";
import NotFound from "./pages/NotFound";

// Game Pages
import LetterRecognition from "./pages/LetterRecognition";
import NumberMatch from "./pages/NumberMatch";
import FocusChallenge from "./pages/FocusChallenge";
import NumberTracing from "./pages/NumberTracingGame";  // ✅ NEW

// Research Pages
import ResearchIndex from "./pages/research/Index";
import ADHDResearch from "./pages/research/ADHD";
import DyslexiaResearch from "./pages/research/Dyslexia";
import DyscalculiaResearch from "./pages/research/Dyscalculia";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Landing / Home Page */}
          <Route path="/" element={<Index />} />

          {/* Auth */}
          <Route path="/login" element={<Login />} />

          {/* Core Features */}
          <Route path="/games" element={<Games />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/parent-chat" element={<ParentChat />} />
          <Route path="/video-bot" element={<VideoBot />} />

          {/* Individual Games */}
          <Route path="/games/letter-recognition" element={<LetterRecognition />} />
          <Route path="/games/number-match" element={<NumberMatch />} />
          <Route path="/games/focus-challenge" element={<FocusChallenge />} />
          <Route path="/games/number-tracing" element={<NumberTracing />} /> {/* ✅ NEW */}

          {/* Research Hub + Individual Pages */}
          <Route path="/research" element={<ResearchIndex />} />
          <Route path="/research/adhd" element={<ADHDResearch />} />
          <Route path="/research/dyslexia" element={<DyslexiaResearch />} />
          <Route path="/research/dyscalculia" element={<DyscalculiaResearch />} />

          {/* Catch-All */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
