import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Dashboard } from "./pages/dashboard";

function App() {
  return(
    <Router>
      <div className="App-header">
        <Routes>
          <Route path="/" element={<Dashboard />}/>
        </Routes>
      </div>
    </Router>
    
  );
}

export default App