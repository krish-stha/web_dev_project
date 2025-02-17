import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import ProfileDropdown from "./components/ProfileDropdown";
import Dashboard from "./pages/Dashboard";
import Orders from "./pages/Orders";
import Sales from "./pages/Sales";
import Menu from "./pages/Menu";
import Setup from "./pages/Setup";
import { MenuProvider } from "./context/MenuContext";
import "./App.css";
import "./components/ProfileDropdown.css";

function App() {
  return (
    <MenuProvider>
      <Router>
        <div className="app-container">
          <Sidebar />
          <main className="main-content">
            <div className="top-bar">
              <h1>Khanpan Restaurant</h1>
              <ProfileDropdown />
            </div>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/sales" element={<Sales />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/setup" element={<Setup />} />
            </Routes>
          </main>
        </div>
      </Router>
    </MenuProvider>
  );
}

export default App;
