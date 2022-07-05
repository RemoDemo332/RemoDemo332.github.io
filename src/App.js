import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Barrels from "./pages/Barrels";
import Brothers from "./pages/Brothers";
import Horizontals from "./pages/Horizontals";
import Laser from "./pages/Laser";
import Lathe from "./pages/Lathe";
import Model_Shop from "./pages/Model_Shop";
import Mori_Tsugami from "./pages/Mori_Tsugami";
import Uppers_Lowers from "./pages/Uppers_Lowers";
import Verticals from "./pages/Verticals";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact="true" element={<Dashboard />} />
          <Route path="/Barrels" element={<Barrels />} />
          <Route path="/Brothers" element={<Brothers />} />
          <Route path="/Horizontals" element={<Horizontals />} />
          <Route path="/Laser" element={<Laser />} />
          <Route path="/Lathe" element={<Lathe />} />
          <Route path="/Model_Shop" element={<Model_Shop />} />
          <Route path="/Mori_Tsugami" element={<Mori_Tsugami />} />
          <Route path="/Uppers_Lowers" element={<Uppers_Lowers />} />
          <Route path="/Verticals" element={<Verticals />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
