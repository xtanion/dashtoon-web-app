import Generate from "./components/Generate";
import Header from "./components/Header"
import ImageDisplay from "./components/Output";
import './App.css'

function App() {
  return (
    <div className="page">
      <div>
        <Header />
      </div>
      <div>
        <Generate/>
      </div>
    </div>
  );
}

export default App;