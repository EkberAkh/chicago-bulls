import "./App.css";

import { Route, Routes, useLocation } from "react-router-dom";
import Team from "./pages/Team";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import News from "./pages/News";
import Shop from "./pages/Shop";
import { Footer } from "./components";
import { Header } from "./components";
import { Register } from "./components"

function App() {
  
  const location = useLocation();

  return (
    <>
      { location.pathname !== "/register" && <Header />  }

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/news" element={<News />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      { location.pathname !== "/register" && <Footer /> }
    </>
  );
}

export default App;
