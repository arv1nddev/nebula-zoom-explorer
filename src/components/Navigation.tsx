import { Button } from "@/components/ui/button";
import { Search, Telescope, Menu } from "lucide-react";

export const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Telescope className="h-8 w-8 text-primary animate-pulse-glow" />
            <span className="text-2xl font-bold bg-gradient-cosmic bg-clip-text text-transparent">
              NASA Explorer
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            <a href="#datasets" className="text-foreground/80 hover:text-primary transition-colors">
              Datasets
            </a>
            <a href="#viewer" className="text-foreground/80 hover:text-primary transition-colors">
              Viewer
            </a>
            <a href="#about" className="text-foreground/80 hover:text-primary transition-colors">
              About
            </a>
            <Button variant="outline" size="sm">
              <Search className="mr-2 h-4 w-4" />
              Search
            </Button>
          </div>

          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </nav>
  );
};
