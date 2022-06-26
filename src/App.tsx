import "./App.css";
import { Markup } from "./components/Markup";
import { ContextProvider } from "./components/StateContext";

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <Markup />
      </ContextProvider>
    </div>
  );
}

export default App;
