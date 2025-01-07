import { lazy } from "react";
// import Jyan from "./components/Body";
// import CardList from "./components/Card";
// import Layout from "./components/Layout";
import "./scss/style.scss";

const Layout = lazy(() => import("./components/Layout"));
const Jyan = lazy(() => import("./components/Body"));

const CardList = lazy(() => import("./components/Card"));

function App() {
  return (
    <div className="container body__bg">
      <div className="row">
        <h1 className="mb-5">Learning CSS with Sanam Dai</h1>

        <CardList />
        <Jyan />
        <Layout />
      </div>
    </div>
  );
}

export default App;
