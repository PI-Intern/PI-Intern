import "./App.css";
import Home from "./Home";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="content">
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
