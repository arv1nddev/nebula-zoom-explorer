import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { 
  ZoomIn, 
  ZoomOut, 
  Maximize2, 
  Tag, 
  Search,
  MapPin,
  Layers,
  Info
} from "lucide-react";
import marsSurface from "@/assets/mars-surface.jpg";

export const ImageViewer = () => {
  const [zoom, setZoom] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  const handleZoomIn = () => setZoom(prev => Math.min(prev + 0.5, 5));
  const handleZoomOut = () => setZoom(prev => Math.max(prev - 0.5, 0.5));

  return (
    <section id="viewer" className="py-24 px-6 bg-gradient-to-b from-background to-background/50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Interactive <span className="bg-gradient-cosmic bg-clip-text text-transparent">Viewer</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Zoom, search, and label features in high-resolution imagery
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Controls Bar */}
          <Card className="p-4 mb-4 bg-card/80 backdrop-blur-sm border-border/50">
            <div className="flex flex-wrap gap-4 items-center justify-between">
              <div className="flex gap-2">
                <Button variant="outline" size="sm" onClick={handleZoomOut}>
                  <ZoomOut className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm" onClick={handleZoomIn}>
                  <ZoomIn className="h-4 w-4" />
                </Button>
                <div className="px-3 py-2 bg-background/50 rounded-md border border-border/30 text-sm font-mono">
                  {(zoom * 100).toFixed(0)}%
                </div>
                <Button variant="outline" size="sm">
                  <Maximize2 className="h-4 w-4" />
                </Button>
              </div>

              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Tag className="mr-2 h-4 w-4" />
                  Label
                </Button>
                <Button variant="outline" size="sm">
                  <Layers className="mr-2 h-4 w-4" />
                  Compare
                </Button>
                <Button variant="outline" size="sm">
                  <Info className="mr-2 h-4 w-4" />
                  Info
                </Button>
              </div>
            </div>
          </Card>

          {/* Viewer Area */}
          <Card className="overflow-hidden bg-card/50 backdrop-blur-sm border-border/50">
            <div className="relative h-[600px] overflow-auto bg-background/20">
              <img 
                src={marsSurface}
                alt="Mars Surface View"
                className="w-full h-full object-cover transition-transform duration-300"
                style={{ transform: `scale(${zoom})` }}
              />
              
              {/* Feature Markers */}
              <div className="absolute top-1/3 left-1/2 w-4 h-4 bg-primary rounded-full animate-pulse-glow cursor-pointer" />
              <div className="absolute top-1/2 left-1/3 w-4 h-4 bg-secondary rounded-full animate-pulse-glow cursor-pointer" />
            </div>
          </Card>

          {/* Search Panel */}
          <Card className="mt-4 p-6 bg-card/80 backdrop-blur-sm border-border/50">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input 
                    placeholder="Search for features, coordinates, or regions..."
                    className="pl-10 bg-background/50 border-border/30"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
              <Button>
                <MapPin className="mr-2 h-4 w-4" />
                Find Location
              </Button>
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-lg bg-background/50 border border-border/30">
                <div className="text-sm text-foreground/60 mb-1">Coordinates</div>
                <div className="font-mono text-primary">18.85°S, 77.52°W</div>
              </div>
              <div className="p-4 rounded-lg bg-background/50 border border-border/30">
                <div className="text-sm text-foreground/60 mb-1">Resolution</div>
                <div className="font-mono">25 cm/pixel</div>
              </div>
              <div className="p-4 rounded-lg bg-background/50 border border-border/30">
                <div className="text-sm text-foreground/60 mb-1">Date Captured</div>
                <div className="font-mono">2024-03-15</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
