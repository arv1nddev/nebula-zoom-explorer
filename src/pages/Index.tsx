import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { DatasetGallery } from "@/components/DatasetGallery";
import { ImageViewer } from "@/components/ImageViewer";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";

export type Dataset = {
  id: string;
  title: string;
  description: string;
  image: string;
  resolution: string;
  updates: string;
  coordinates?: string;
  captureDate?: string;
};

const Index = () => {
  const [selectedDataset, setSelectedDataset] = useState<Dataset | null>(null);

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <Hero />
        <DatasetGallery onSelectDataset={setSelectedDataset} selectedId={selectedDataset?.id} />
        <ImageViewer dataset={selectedDataset} />
        <Features />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
