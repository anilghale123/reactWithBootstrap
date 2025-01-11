import { lazy } from "react";
// import Jyan from "./components/Body";
// import CardList from "./components/Card";
// import Layout from "./components/Layout";

import "./scss/style.scss";
import TextShow from "./components/TextShow";
import SplashCursor from "./components/SplashCursor";
import ResponsivePdfViewer from "./notesGriha/PdfViewer";

const Layout = lazy(() => import("./components/Layout"));
const Jyan = lazy(() => import("./components/Body"));

const CardList = lazy(() => import("./components/Card"));

function App() {
  return (
    <div className="container h-[1500px] bg__black body__bg">
      <div className="row bg__black">
        <h1 className="mb-5">Learning</h1>
        {/* <SplashCursor /> */}

        <TextShow />
        <CardList />
        <Jyan />
        <Layout />
        <ResponsivePdfViewer pdfFile="test.pdf" />
      </div>
    </div>
  );
}

export default App;
