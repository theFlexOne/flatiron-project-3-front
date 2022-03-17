import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { AppProvider } from "./contexts/AppContext";

function App() {
  return (
    <div className="app">
      <AppProvider>
        <Header />
        <Main />
      </AppProvider>
    </div>
  );
}

export default App;
