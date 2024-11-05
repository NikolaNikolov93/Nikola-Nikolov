import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
    <div className="site">
      <Navigation />
      <section className="main">
        {/* <Routes>
          <Route path="/about" />
          <Route path="/contacts" />
          <Route path="/projects" />
        </Routes> */}
      </section>
    </div>
  );
}

export default App;
