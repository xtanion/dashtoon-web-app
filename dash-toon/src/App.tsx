import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Generate from "./components/Generate";
import Header from "./components/Header"
import ImageDisplay from "./components/Output";
import './App.css'
import CanvasEditor from "./components/Editor";

function App() {
  return (
    <Router>
      
      <div className="page">
        <div className="header-sticky">
          <Header />
        </div>
        <div>
          {/* <Generate /> */}

          <Routes>
            <Route path="/" element={<Generate />} />
            <Route path="/editor" element={<CanvasEditor />} />
          </Routes>
        </div>
      </div>
    </Router>
    
  );
}

export default App;