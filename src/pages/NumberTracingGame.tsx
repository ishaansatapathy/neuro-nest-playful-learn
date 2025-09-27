import { useRef, useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const NumberTracingGame = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [drawing, setDrawing] = useState(false);
  const [level, setLevel] = useState(1);

  // Draw number "2" with gaps depending on level
  const drawNumber = (ctx: CanvasRenderingContext2D) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.lineWidth = 8;
    ctx.strokeStyle = "#6366F1"; // Indigo

    ctx.beginPath();

    if (level === 1) {
      // "2" with wide gaps
      ctx.moveTo(50, 80);
      ctx.lineTo(150, 80);
      ctx.moveTo(150, 80);
      ctx.lineTo(150, 150);
      ctx.moveTo(50, 200);
      ctx.lineTo(150, 200);
    } else if (level === 2) {
      // Smaller gaps
      ctx.moveTo(50, 80);
      ctx.lineTo(150, 80);
      ctx.lineTo(150, 150);
      ctx.moveTo(50, 200);
      ctx.lineTo(150, 200);
    } else {
      // Full 2
      ctx.moveTo(50, 80);
      ctx.lineTo(150, 80);
      ctx.lineTo(150, 150);
      ctx.lineTo(50, 200);
      ctx.lineTo(150, 200);
    }

    ctx.stroke();
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) drawNumber(ctx);
    }
  }, [level]);

  const startDrawing = (e: React.MouseEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    setDrawing(true);
    ctx.beginPath();
    ctx.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
  };

  const draw = (e: React.MouseEvent) => {
    if (!drawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    ctx.strokeStyle = "#EF4444"; // red for child’s stroke
    ctx.lineWidth = 4;
    ctx.stroke();
  };

  const stopDrawing = () => {
    setDrawing(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-accent/10">
      <Navigation />

      <div className="pt-24 pb-12 px-6 max-w-3xl mx-auto">
        {/* Back Button */}
        <Button variant="ghost" asChild>
          <Link to="/games" className="flex items-center space-x-2 mb-6">
            <ArrowLeft className="w-4 h-4" /> <span>Back to Games</span>
          </Link>
        </Button>

        <div className="card-magical p-6 rounded-2xl text-center">
          <h2 className="text-2xl font-bold mb-4">🖊️ Trace the Number</h2>
          <p className="text-muted-foreground mb-6">
            Draw along the number "{level === 1 ? "2 (easy gaps)" : level === 2 ? "2 (smaller gaps)" : "2 (full shape)"}".
          </p>

          <canvas
            ref={canvasRef}
            width={300}
            height={300}
            className="border-2 border-gray-300 rounded-lg mx-auto bg-white cursor-crosshair"
            onMouseDown={startDrawing}
            onMouseMove={draw}
            onMouseUp={stopDrawing}
            onMouseLeave={stopDrawing}
          />

          <div className="flex justify-center gap-4 mt-6">
            <Button onClick={() => setLevel(Math.max(1, level - 1))} disabled={level === 1}>
              Previous
            </Button>
            <Button onClick={() => setLevel(Math.min(3, level + 1))} disabled={level === 3}>
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NumberTracingGame;
