import { useState, useRef, useEffect } from "react";
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
  Info,
  RotateCcw
} from "lucide-react";
import { toast } from "sonner";
import type { Dataset } from "@/pages/Index";
import { datasets } from "./DatasetGallery";

type ImageViewerProps = {
  dataset: Dataset | null;
};

export const ImageViewer = ({ dataset }: ImageViewerProps) => {
  const [zoom, setZoom] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [searchQuery, setSearchQuery] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);

  // Reset view when dataset changes
  useEffect(() => {
    setZoom(1);
    setPosition({ x: 0, y: 0 });
    if (dataset) {
      toast.success(`Loaded ${dataset.title}`);
    }
  }, [dataset?.id]);

  const handleZoomIn = () => {
    setZoom(prev => {
      const newZoom = Math.min(prev + 0.5, 5);
      toast.info(`Zoom: ${(newZoom * 100).toFixed(0)}%`);
      return newZoom;
    });
  };

  const handleZoomOut = () => {
    setZoom(prev => {
      const newZoom = Math.max(prev - 0.5, 0.5);
      toast.info(`Zoom: ${(newZoom * 100).toFixed(0)}%`);
      return newZoom;
    });
  };

  const handleReset = () => {
    setZoom(1);
    setPosition({ x: 0, y: 0 });
    toast.info("View reset");
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setPosition({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleSearch = () => {
    if (!searchQuery.trim()) {
      toast.error("Please enter a search query");
      return;
    }
    toast.success(`Searching for: ${searchQuery}`);
  };

  const handleFullscreen = () => {
    if (containerRef.current) {
      containerRef.current.requestFullscreen();
      toast.info("Entered fullscreen mode");
    }
  };

  const currentDataset = dataset || datasets[0];

  return (
    <section id="viewer" className="py-24 px-6 bg-gradient-to-b from-background to-background/50 scroll-mt-16">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Interactive <span className="bg-gradient-cosmic bg-clip-text text-transparent">Viewer</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            {dataset ? `Exploring ${dataset.title}` : "Select a dataset above to begin exploring"}
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Controls Bar */}
          <Card className="p-4 mb-4 bg-card/80 backdrop-blur-sm border-border/50">
            <div className="flex flex-wrap gap-4 items-center justify-between">
              <div className="flex gap-2">
                <Button variant="outline" size="sm" onClick={handleZoomOut} disabled={zoom <= 0.5}>
                  <ZoomOut className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm" onClick={handleZoomIn} disabled={zoom >= 5}>
                  <ZoomIn className="h-4 w-4" />
                </Button>
                <div className="px-3 py-2 bg-background/50 rounded-md border border-border/30 text-sm font-mono">
                  {(zoom * 100).toFixed(0)}%
                </div>
                <Button variant="outline" size="sm" onClick={handleReset}>
                  <RotateCcw className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm" onClick={handleFullscreen}>
                  <Maximize2 className="h-4 w-4" />
                </Button>
              </div>

              <div className="flex gap-2">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => toast.info("Label feature - Click on the image to add labels")}
                >
                  <Tag className="mr-2 h-4 w-4" />
                  Label
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => toast.info("Compare mode - Select multiple datasets to compare")}
                >
                  <Layers className="mr-2 h-4 w-4" />
                  Compare
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => toast.info(`Dataset: ${currentDataset.title} | Resolution: ${currentDataset.resolution}`)}
                >
                  <Info className="mr-2 h-4 w-4" />
                  Info
                </Button>
              </div>
            </div>
          </Card>

          {/* Viewer Area */}
          <Card 
            ref={containerRef}
            className="overflow-hidden bg-card/50 backdrop-blur-sm border-border/50"
          >
            <div 
              className="relative h-[600px] overflow-hidden bg-background/20 cursor-move"
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
            >
              <div
                className="absolute inset-0 transition-transform duration-200"
                style={{
                  transform: `scale(${zoom}) translate(${position.x / zoom}px, ${position.y / zoom}px)`,
                  transformOrigin: 'center center',
                }}
              >
                <img 
                  src={currentDataset.image}
                  alt={currentDataset.title}
                  className="w-full h-full object-cover select-none"
                  draggable={false}
                />
                
                {/* Feature Markers */}
                <div 
                  className="absolute top-1/3 left-1/2 w-4 h-4 bg-primary rounded-full animate-pulse-glow cursor-pointer hover:scale-150 transition-transform"
                  onClick={() => toast.info("Feature: Crater Formation #247")}
                  title="Crater Formation"
                />
                <div 
                  className="absolute top-1/2 left-1/3 w-4 h-4 bg-secondary rounded-full animate-pulse-glow cursor-pointer hover:scale-150 transition-transform"
                  onClick={() => toast.info("Feature: Surface Anomaly #18")}
                  title="Surface Anomaly"
                />
                <div 
                  className="absolute top-2/3 right-1/3 w-4 h-4 bg-accent rounded-full animate-pulse-glow cursor-pointer hover:scale-150 transition-transform"
                  onClick={() => toast.info("Feature: Geological Structure #91")}
                  title="Geological Structure"
                />
              </div>
              
              {/* Drag hint */}
              {zoom > 1 && !isDragging && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-background/90 px-4 py-2 rounded-full text-sm animate-fade-in">
                  Click and drag to pan
                </div>
              )}
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
                    onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                  />
                </div>
              </div>
              <Button onClick={handleSearch}>
                <MapPin className="mr-2 h-4 w-4" />
                Find Location
              </Button>
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-lg bg-background/50 border border-border/30">
                <div className="text-sm text-foreground/60 mb-1">Coordinates</div>
                <div className="font-mono text-primary">{currentDataset.coordinates || "N/A"}</div>
              </div>
              <div className="p-4 rounded-lg bg-background/50 border border-border/30">
                <div className="text-sm text-foreground/60 mb-1">Resolution</div>
                <div className="font-mono">{currentDataset.resolution}</div>
              </div>
              <div className="p-4 rounded-lg bg-background/50 border border-border/30">
                <div className="text-sm text-foreground/60 mb-1">Date Captured</div>
                <div className="font-mono">{currentDataset.captureDate || "N/A"}</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
