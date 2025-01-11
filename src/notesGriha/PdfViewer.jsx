import React, { useState } from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

const ResponsivePdfViewer = ({ pdfFile }) => {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  const defaultLayout = defaultLayoutPlugin();

  React.useEffect(() => {
    const handleResize = () => setViewportWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: viewportWidth < 768 ? "calc(100vh - 50px)" : "100vh",
        overflow: "hidden",
      }}
    >
      <Worker
        workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}
      >
        <Viewer fileUrl={pdfFile} plugins={[defaultLayout]} />
      </Worker>
    </div>
  );
};

export default ResponsivePdfViewer;
