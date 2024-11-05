import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Home from "./pages/home/Home";

function App() {
  return (
    <div className="site">
      <Navigation />
      <section className="main">
        <Routes>
          <Route path="/home" element={<Home />} />
          {/* <Route path="/projects" /> */}
          {/* <Route path="/about" /> */}
        </Routes>
      </section>
    </div>
  );
}

export default App;
