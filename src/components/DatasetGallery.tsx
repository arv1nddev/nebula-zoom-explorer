import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Globe, Mountain, Moon, Sparkles, ArrowRight } from "lucide-react";
import heroEarth from "@/assets/hero-earth.jpg";
import marsSurface from "@/assets/mars-surface.jpg";
import moonSurface from "@/assets/moon-surface.jpg";
import deepSpace from "@/assets/deep-space.jpg";

const datasets = [
  {
    id: "earth",
    title: "Earth Observations",
    description: "High-resolution satellite imagery capturing our planet's beauty and complexity",
    image: heroEarth,
    icon: Globe,
    resolution: "10 Gigapixel",
    updates: "Daily",
  },
  {
    id: "mars",
    title: "Mars Surface",
    description: "Detailed maps of the red planet from Mars Reconnaissance Orbiter",
    image: marsSurface,
    icon: Mountain,
    resolution: "1 Gigapixel",
    updates: "Weekly",
  },
  {
    id: "moon",
    title: "Lunar Maps",
    description: "Comprehensive surface data from Lunar Reconnaissance Orbiter",
    image: moonSurface,
    icon: Moon,
    resolution: "2 Gigapixel",
    updates: "Monthly",
  },
  {
    id: "space",
    title: "Deep Space",
    description: "Stunning images of distant galaxies, nebulae, and cosmic phenomena",
    image: deepSpace,
    icon: Sparkles,
    resolution: "2.5 Gigapixel",
    updates: "Variable",
  },
];

export const DatasetGallery = () => {
  return (
    <section id="datasets" className="py-24 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Explore Our <span className="bg-gradient-cosmic bg-clip-text text-transparent">Datasets</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Choose from our collection of NASA's most detailed imagery from across the solar system
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {datasets.map((dataset) => {
            const Icon = dataset.icon;
            return (
              <Card 
                key={dataset.id}
                className="group relative overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-glow-md"
              >
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${dataset.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/80 to-card/40" />
                </div>

                {/* Content */}
                <div className="relative p-8 min-h-[400px] flex flex-col justify-between">
                  <div>
                    <Icon className="h-12 w-12 text-primary mb-4 drop-shadow-glow-md" />
                    <h3 className="text-2xl font-bold mb-3">{dataset.title}</h3>
                    <p className="text-foreground/70 mb-6">{dataset.description}</p>
                  </div>

                  <div>
                    <div className="flex gap-4 mb-6">
                      <div className="flex-1 p-3 rounded-lg bg-background/50 backdrop-blur-sm border border-border/30">
                        <div className="text-sm text-foreground/60 mb-1">Resolution</div>
                        <div className="font-semibold text-primary">{dataset.resolution}</div>
                      </div>
                      <div className="flex-1 p-3 rounded-lg bg-background/50 backdrop-blur-sm border border-border/30">
                        <div className="text-sm text-foreground/60 mb-1">Updates</div>
                        <div className="font-semibold">{dataset.updates}</div>
                      </div>
                    </div>

                    <Button className="w-full" variant="outline">
                      Explore Dataset
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
