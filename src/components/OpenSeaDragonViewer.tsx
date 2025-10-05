import React, { useEffect, useRef } from "react";
import OpenSeadragon from "openseadragon";

const OpenSeaDragonViewer: React.FC = () => {
  const viewerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (viewerRef.current) {
      const viewer = OpenSeadragon({
        id: "openseadragon-viewer",
        prefixUrl: "https://openseadragon.github.io/openseadragon/images/",
        tileSources: "/tiles/output.dzi", // served from public folder
      });

      return () => {
        viewer.destroy();
      };
    }
  }, []);

  return (
    <div
      id="openseadragon-viewer"
      ref={viewerRef}
      style={{ width: "100%", height: "80vh" }}
    />
  );
};

export default OpenSeaDragonViewer;
