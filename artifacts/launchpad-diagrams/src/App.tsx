import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Printer } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Import diagram components
import { DiagramABlueprint } from "./components/diagrams/DiagramABlueprint";
import { DiagramAInfographic } from "./components/diagrams/DiagramAInfographic";
import { DiagramANarrative } from "./components/diagrams/DiagramANarrative";
import { DiagramBBlueprint } from "./components/diagrams/DiagramBBlueprint";
import { DiagramBInfographic } from "./components/diagrams/DiagramBInfographic";
import { DiagramBNarrative } from "./components/diagrams/DiagramBNarrative";

const queryClient = new QueryClient();

function Home() {
  const [activeTab, setActiveTab] = useState<"A" | "B">("A");
  const [activeStyle, setActiveStyle] = useState<"blueprint" | "infographic" | "narrative">("blueprint");

  const renderDiagram = () => {
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

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen w-full flex flex-col bg-background">
      {/* UI Shell Header */}
      <header className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-10 sticky top-0">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex flex-col">
            <h1 className="text-xl font-display font-bold text-primary leading-tight tracking-wide uppercase">Startup Launchpad</h1>
            <p className="text-xs text-muted-foreground uppercase tracking-widest font-semibold">Smith Center for Entrepreneurship</p>
          </div>
          
          <div className="flex items-center space-x-6">
            {/* Tab Bar */}
            <div className="flex bg-muted/20 p-1 rounded-md border border-border/50">
              <button
                data-testid="tab-a"
                onClick={() => setActiveTab("A")}
                className={`px-4 py-1.5 text-sm font-medium rounded-sm transition-all duration-200 ${
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
                className={`px-4 py-1.5 text-sm font-medium rounded-sm transition-all duration-200 ${
                  activeTab === "B" 
                    ? "bg-primary text-primary-foreground shadow-sm" 
                    : "text-foreground hover:text-primary hover:bg-muted/30"
                }`}
              >
                Diagram B: Entry Points
              </button>
            </div>

            <div className="h-6 w-px bg-border/50"></div>

            {/* Style Switcher */}
            <div className="flex items-center space-x-2">
              <span className="text-xs uppercase tracking-wider font-semibold text-muted-foreground mr-2">Style:</span>
              <div className="flex bg-muted/20 p-1 rounded-full border border-border/50">
                {(["blueprint", "infographic", "narrative"] as const).map((style) => (
                  <button
                    key={style}
                    data-testid={`style-${style}`}
                    onClick={() => setActiveStyle(style)}
                    className={`px-4 py-1 text-xs font-bold uppercase tracking-wider rounded-full transition-all duration-200 ${
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

            <div className="h-6 w-px bg-border/50"></div>

            <Button 
              variant="outline" 
              size="sm" 
              onClick={handlePrint}
              data-testid="btn-print"
              className="gap-2 font-semibold uppercase tracking-wider text-xs"
            >
              <Printer className="w-4 h-4" />
              Print / Save PDF
            </Button>
          </div>
        </div>
      </header>

      {/* Main Diagram Area */}
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
