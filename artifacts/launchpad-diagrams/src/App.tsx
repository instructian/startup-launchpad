import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FileImage, FileText } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

// Import diagram components
import { DiagramABlueprint } from "./components/diagrams/DiagramABlueprint";
import { DiagramAInfographic } from "./components/diagrams/DiagramAInfographic";
import { DiagramANarrative } from "./components/diagrams/DiagramANarrative";
import { DiagramBBlueprint } from "./components/diagrams/DiagramBBlueprint";
import { DiagramBInfographic } from "./components/diagrams/DiagramBInfographic";
import { DiagramBNarrative } from "./components/diagrams/DiagramBNarrative";
import { Calendar } from "./components/Calendar";

const queryClient = new QueryClient();

function getFileName(tab: "A" | "B" | "C", style: "blueprint" | "infographic" | "narrative") {
  const tabName = tab === "A" ? "journey" : tab === "B" ? "entry-points" : "calendar";
  return `launchpad-${tabName}-${style}`;
}

async function captureCanvas(elementId: string): Promise<HTMLCanvasElement> {
  const element = document.getElementById(elementId);
  if (!element) throw new Error("Diagram element not found");
  return html2canvas(element, {
    backgroundColor: "#ffffff",
    scale: 2,
    useCORS: true,
    logging: false,
  });
}

function Home() {
  const [activeTab, setActiveTab] = useState<"A" | "B" | "C">("A");
  const [activeStyle, setActiveStyle] = useState<"blueprint" | "infographic" | "narrative">("blueprint");
  const [exporting, setExporting] = useState<null | "png" | "pdf">(null);

  const renderDiagram = () => {
    if (activeTab === "C") return null;
    if (activeTab === "A") {
      if (activeStyle === "blueprint") return <DiagramABlueprint />;
      if (activeStyle === "infographic") return <DiagramAInfographic />;
      return <DiagramANarrative />;
    } else {
      if (activeStyle === "blueprint") return <DiagramBBlueprint />;
      if (activeStyle === "infographic") return <DiagramBInfographic />;
      return <DiagramBNarrative />;
    }
  };

  const handleDownloadPNG = async () => {
    setExporting("png");
    try {
      const canvas = await captureCanvas("diagram-print-area");
      const link = document.createElement("a");
      link.download = `${getFileName(activeTab, activeStyle)}.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();
    } catch (e) {
      console.error("PNG export failed:", e);
    } finally {
      setExporting(null);
    }
  };

  const handleDownloadPDF = async () => {
    setExporting("pdf");
    try {
      const canvas = await captureCanvas("diagram-print-area");
      const imgData = canvas.toDataURL("image/png");
      // Use landscape letter size (11 x 8.5 inches)
      const pdf = new jsPDF({ orientation: "landscape", unit: "in", format: "letter" });
      const pageW = pdf.internal.pageSize.getWidth();
      const pageH = pdf.internal.pageSize.getHeight();
      // Scale image to fill page with small margin
      const margin = 0.25;
      const availW = pageW - margin * 2;
      const availH = pageH - margin * 2;
      const imgAspect = canvas.width / canvas.height;
      const pageAspect = availW / availH;
      let drawW: number, drawH: number;
      if (imgAspect > pageAspect) {
        drawW = availW;
        drawH = availW / imgAspect;
      } else {
        drawH = availH;
        drawW = availH * imgAspect;
      }
      const x = margin + (availW - drawW) / 2;
      const y = margin + (availH - drawH) / 2;
      pdf.addImage(imgData, "PNG", x, y, drawW, drawH);
      pdf.save(`${getFileName(activeTab, activeStyle)}.pdf`);
    } catch (e) {
      console.error("PDF export failed:", e);
    } finally {
      setExporting(null);
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col bg-background">
      {/* UI Shell Header */}
      <header className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-10 sticky top-0">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between gap-4">
          <div className="flex flex-col flex-shrink-0">
            <h1 className="text-xl font-display font-bold text-primary leading-tight tracking-wide uppercase">Startup Launchpad</h1>
            <p className="text-xs text-muted-foreground uppercase tracking-widest font-semibold">Smith Center for Entrepreneurship</p>
          </div>
          
          <div className="flex items-center space-x-4 flex-wrap gap-y-1">
            {/* Tab Bar */}
            <div className="flex bg-muted/20 p-1 rounded-md border border-border/50">
              <button
                data-testid="tab-a"
                onClick={() => setActiveTab("A")}
                className={`px-3 py-1.5 text-sm font-medium rounded-sm transition-all duration-200 ${
                  activeTab === "A" 
                    ? "bg-primary text-primary-foreground shadow-sm" 
                    : "text-foreground hover:text-primary hover:bg-muted/30"
                }`}
              >
                Diagram A: The Journey
              </button>
              <button
                data-testid="tab-b"
                onClick={() => setActiveTab("B")}
                className={`px-3 py-1.5 text-sm font-medium rounded-sm transition-all duration-200 ${
                  activeTab === "B" 
                    ? "bg-primary text-primary-foreground shadow-sm" 
                    : "text-foreground hover:text-primary hover:bg-muted/30"
                }`}
              >
                Diagram B: Entry Points
              </button>
              <button
                data-testid="tab-c"
                onClick={() => setActiveTab("C")}
                className={`px-3 py-1.5 text-sm font-medium rounded-sm transition-all duration-200 ${
                  activeTab === "C" 
                    ? "bg-accent text-accent-foreground shadow-sm" 
                    : "text-foreground hover:text-accent hover:bg-muted/30"
                }`}
              >
                📅 Calendar
              </button>
            </div>

            {/* Style Switcher — only for diagram tabs */}
            {activeTab !== "C" && (
              <>
                <div className="h-6 w-px bg-border/50 hidden sm:block"></div>
                <div className="flex items-center space-x-2">
                  <span className="text-xs uppercase tracking-wider font-semibold text-muted-foreground mr-1">Style:</span>
                  <div className="flex bg-muted/20 p-1 rounded-full border border-border/50">
                    {(["blueprint", "infographic", "narrative"] as const).map((style) => (
                      <button
                        key={style}
                        data-testid={`style-${style}`}
                        onClick={() => setActiveStyle(style)}
                        className={`px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full transition-all duration-200 ${
                          activeStyle === style 
                            ? "bg-accent text-accent-foreground shadow-sm" 
                            : "text-foreground hover:text-accent hover:bg-muted/30"
                        }`}
                      >
                        {style}
                      </button>
                    ))}
                  </div>
                </div>
              </>
            )}

            <div className="h-6 w-px bg-border/50 hidden sm:block"></div>

            {activeTab !== "C" && (
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleDownloadPNG}
                  disabled={exporting !== null}
                  data-testid="btn-download-png"
                  className="gap-2 font-semibold uppercase tracking-wider text-xs"
                >
                  <FileImage className="w-4 h-4" />
                  {exporting === "png" ? "Exporting…" : "Download PNG"}
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleDownloadPDF}
                  disabled={exporting !== null}
                  data-testid="btn-download-pdf"
                  className="gap-2 font-semibold uppercase tracking-wider text-xs"
                >
                  <FileText className="w-4 h-4" />
                  {exporting === "pdf" ? "Exporting…" : "Download PDF"}
                </Button>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Main Area */}
      {activeTab === "C" ? (
        <Calendar />
      ) : (
        <main className="flex-1 flex items-center justify-center p-8 bg-muted/10 overflow-hidden">
          <div 
            className="w-full max-w-[1600px] shadow-2xl ring-1 ring-border/20 rounded-lg overflow-hidden flex relative"
            style={{ aspectRatio: "17/11" }}
          >
            <div id="diagram-print-area" className="w-full h-full relative bg-background">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${activeTab}-${activeStyle}`}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="w-full h-full absolute inset-0"
                >
                  {renderDiagram()}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </main>
      )}
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL?.replace(/\/$/, "") || ""}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
