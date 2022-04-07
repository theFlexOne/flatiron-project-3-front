import "./App.css";
import Header from "./components/Header/Header";
import AppRoutes from "./Routes";
import { useLocation } from "react-router-dom";
import Content from "./components/Content/Content";

function App() {
  return (
    <div className="app">
      <Header />
      <Content />
    </div>
  );
}

export default App;
