import { Card } from "@/components/ui/card";
import { 
  Microscope, 
  GitCompare, 
  Tag, 
  Search, 
  Database, 
  Zap 
} from "lucide-react";

const features = [
  {
    icon: Microscope,
    title: "Deep Zoom",
    description: "Explore gigapixel images with smooth, responsive zooming from overview to extreme detail",
  },
  {
    icon: Search,
    title: "Smart Search",
    description: "Find features using coordinates, names, or AI-powered natural language descriptions",
  },
  {
    icon: Tag,
    title: "Feature Labeling",
    description: "Mark and annotate interesting features, craters, formations, and discoveries",
  },
  {
    icon: GitCompare,
    title: "Image Comparison",
    description: "Compare the same location across different times, wavelengths, and missions",
  },
  {
    icon: Database,
    title: "Multi-Dataset",
    description: "Access Earth, Mars, Moon, and deep space imagery from various NASA missions",
  },
  {
    icon: Zap,
    title: "Real-Time Updates",
    description: "Latest imagery added regularly from active missions and observatories",
  },
];

export const Features = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-background/50 to-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Powerful <span className="bg-gradient-cosmic bg-clip-text text-transparent">Features</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Everything you need to explore and discover patterns in NASA's massive datasets
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index}
                className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-glow-sm group"
              >
                <div className="h-12 w-12 rounded-lg bg-gradient-cosmic flex items-center justify-center mb-4 group-hover:shadow-glow-md transition-all">
                  <Icon className="h-6 w-6 text-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-foreground/70">{feature.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
