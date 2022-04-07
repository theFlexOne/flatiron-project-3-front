import "./App.css";
import Header from "./components/Header/Header";
import AppRoutes from "./Routes";
import { useLocation } from "react-router-dom";
import Modal from "react-modal/lib/components/Modal";

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <AppRoutes />
      </main>
    </div>
  );
}

export default App;
