import { lazy } from "react";
import Jyan from "./components/Body";
import CardList from "./components/Card";
// import Layout from "./components/Layout";
import "./scss/style.scss";

const Layout = lazy(() => import("./components/Layout"));
function App() {
  return (
    <div className="container">
      <div className="row">
        <h1>Learning CSS with Sanam Dai</h1>

        <CardList />
        <Jyan />
        <Layout />
      </div>
    </div>
  );
}

export default App;
