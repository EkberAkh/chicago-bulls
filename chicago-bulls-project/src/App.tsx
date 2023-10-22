import "./App.css";

import { Route, Routes } from "react-router-dom";
import Team from "./pages/Team";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import News from "./pages/News";
import Shop from "./pages/Shop";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {


  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/news" element={<News />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
