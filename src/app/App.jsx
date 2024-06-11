import { Route, Routes } from "react-router-dom";
import "./styles/App.css";
import Footer from "../widgets/footer/ui/index.jsx";
import Header from "../widgets/header/ui/index.jsx";
import Home from "../pages/home/ui/index.jsx";
import analyze from "../pages/analyze/ui/index.jsx";

function App() {
  return (
    <div className="wrapper">
      <header className="header">
        <Header></Header>
      </header>
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Analyze" element={<Analyze />} />
        </Routes>
      </main>
      <footer className="footer">
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default App;
