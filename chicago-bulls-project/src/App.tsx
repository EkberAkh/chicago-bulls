import "./App.css";
import logo from "./assets/logo.png";
import cart from "./assets/shopping-cart.png";
import { Select, Space } from "antd";
import { Route, Routes, Link } from "react-router-dom";
import Team from "./pages/Team";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import News from "./pages/News";
import Shop from "./pages/Shop";

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};
function App() {
  
  return (
    <>
      <header>
        <div className="container">
          <div className="header-items">
            <div className="header-logo">
              <img src={logo} alt="logo" />
            </div>
            <nav>
              <ul>
                <li >
                  <Link className="link active" to="/">Home</Link>
                </li>
                <li>
                  <Link className="link" to="/team">Team</Link>
                </li>
                <li>
                  <Link className="link" to="/gallery">Gallery</Link>
                </li>
                <li>
                  <Link className="link" to="/news">News</Link>
                </li>

                <li>
                  <Link className="link" to="/shop">Shop</Link>
                </li>
              </ul>
            </nav>
            <div className="header-end">
              <img src={cart} alt="" />
              <Space wrap>
    <Select
      defaultValue="en"
      style={{ width: 120 }}
      onChange={handleChange}
      options={[
        { value: 'az', label: 'AZ' },
        { value: 'en', label: 'EN' },
        { value: 'ru', label: 'RU' },
      ]}
    />
 
  </Space>
            </div>
          </div>
        </div>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/news" element={<News />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </>
  );
}

export default App;
