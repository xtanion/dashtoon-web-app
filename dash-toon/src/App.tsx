import Generate from "./components/Generate";
import ImageDisplay from "./components/Output";
import './App.css'

function App() {
  return (
    <div className="app">
      <div className="input">
        <Generate />
      </div>
    </div>
  );
}

export default App;