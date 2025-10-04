import { Button } from "@/components/ui/button";
import { ArrowRight, Telescope, Zap } from "lucide-react";
import heroEarth from "@/assets/hero-earth.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroEarth})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-pulse-glow" />
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-secondary rounded-full animate-pulse-glow" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-primary rounded-full animate-pulse-glow" style={{ animationDelay: '2s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="animate-float">
          <Telescope className="h-20 w-20 mx-auto mb-6 text-primary drop-shadow-glow-lg" />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Explore NASA's
          <br />
          <span className="bg-gradient-cosmic bg-clip-text text-transparent">
            Gigapixel Universe
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-foreground/80 mb-12 max-w-3xl mx-auto">
          Dive into breathtaking high-resolution images from space. Zoom into Mars dust storms, 
          explore lunar craters, and discover distant galaxies with unprecedented detail.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="hero" size="lg">
            <Zap className="mr-2 h-5 w-5" />
            Start Exploring
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button variant="outline" size="lg">
            View Datasets
          </Button>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="p-6 rounded-lg bg-card/30 backdrop-blur-sm border border-border/50">
            <div className="text-3xl font-bold text-primary mb-2">10+ TB</div>
            <div className="text-foreground/70">Image Data</div>
          </div>
          <div className="p-6 rounded-lg bg-card/30 backdrop-blur-sm border border-border/50">
            <div className="text-3xl font-bold text-secondary mb-2">Gigapixel</div>
            <div className="text-foreground/70">Resolution</div>
          </div>
          <div className="p-6 rounded-lg bg-card/30 backdrop-blur-sm border border-border/50">
            <div className="text-3xl font-bold text-primary mb-2">1000s</div>
            <div className="text-foreground/70">of Features</div>
          </div>
        </div>
      </div>
    </section>
  );
};
