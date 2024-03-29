import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Products from "./Pages/Products/Products";
import Team from "./Pages/Team/Team";
import Clients from "./Pages/Clients/Clients";
import Login from "./Pages/Log in/Login";
import Sidebar from "./Components/sideBar/sideBar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar />
        <div className="mainPanel">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Home />} />
            <Route path="/team-members" element={<Team />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/products" element={<Products />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
