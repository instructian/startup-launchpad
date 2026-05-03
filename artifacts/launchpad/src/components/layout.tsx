import { Link, useLocation } from "wouter";
import { BookOpen, Calendar, HelpCircle, Network, FileText, ClipboardList, DollarSign, GraduationCap, Handshake } from "lucide-react";

export function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();

  const navItems = [
    { href: "/", label: "Program Pathway", icon: Network },
    { href: "/proposal", label: "Structured Proposal", icon: FileText },
    { href: "/resources", label: "Resources Manifest", icon: BookOpen },
    { href: "/calendar", label: "Calendar & Timeline", icon: Calendar },
    { href: "/faq", label: "Program FAQ", icon: HelpCircle },
    { href: "/rubric", label: "Judge Rubric", icon: ClipboardList },
    { href: "/budget", label: "Budget Model", icon: DollarSign },
    { href: "/students", label: "For Students", icon: GraduationCap },
    { href: "/sponsors", label: "For Sponsors", icon: Handshake },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">
      <header className="sticky top-0 z-40 w-full border-b bg-primary text-primary-foreground shadow-sm print:hidden">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-white text-primary p-1.5 rounded-sm">
              <Network className="h-5 w-5" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-lg leading-none tracking-tight">Startup Launchpad</span>
              <span className="text-[10px] uppercase tracking-wider font-semibold opacity-80">Smith Center</span>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-1.5 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  location === item.href
                    ? "bg-white/20 text-white"
                    : "text-primary-foreground/80 hover:bg-white/10 hover:text-white"
                }`}
                data-testid={`nav-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        
        {/* Mobile Navigation - Scrollable horizontal row */}
        <div className="md:hidden border-t border-white/10 bg-primary/95 overflow-x-auto no-scrollbar">
          <nav className="flex px-4 py-2 space-x-2 min-w-max">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-full transition-colors ${
                  location === item.href
                    ? "bg-white text-primary"
                    : "bg-white/10 text-primary-foreground hover:bg-white/20"
                }`}
                data-testid={`mobile-nav-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <item.icon className="h-3 w-3" />
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {children}
      </main>

      <footer className="border-t bg-muted/40 py-8 text-center text-sm text-muted-foreground mt-12 print:hidden">
        <div className="container mx-auto px-4">
          <p className="font-serif font-medium text-foreground">Startup Launchpad &bull; Smith Center</p>
          <p className="mt-1">Internal University Review Package &bull; Version 0.1</p>
        </div>
      </footer>
    </div>
  );
}
