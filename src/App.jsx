// import React, { useState } from "react";
// // import Sidebar from "./components/Sidebar";
// import Header from "./components/Header";
// import Dashboard from "./components/Dashboard";
// import Orders from "./components/Orders";
// import Customers from "./components/Customers";
// import Menu from "./components/Menu";
// import "./App.css";

// const App = () => {
//   const [activeSection, setActiveSection] = useState("Dashboard");

//   const renderSection = () => {
//     switch (activeSection) {
//       case "Dashboard":
//         return <Dashboard />;
//       case "Orders":
//         return <Orders />;
//       case "Customers":
//         return <Customers />;
//       case "Menu":
//         return <Menu />;
//       default:
//         return <Dashboard />;
//     }
//   };

//   return (
//     <div className="app-container">
//       <Sidebar setActiveSection={setActiveSection} />
//       <div className="main-content">
//         <Header />
//         {renderSection()}
//       </div>
//     </div>
//   );
// };

// export default App;

// import React from "react";
// import Landing from "./components/Landing";
// import Login from "./components/Login"

// function App() {
//   return < Login/>;
// }

// export default App;

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
// import Layout from "./Layout"
// import Dashboard from "./Dashboard"
// import Menu from "./Menu"

// function App() {
//   return (
//     <Router>
//       <Layout>
//         <Routes>
//           <Route path="/" element={<Dashboard />} />
//           <Route path="/menu" element={<Menu />} />
          
//         </Routes>
//       </Layout>
//     </Router>
//   )
// }

// export default App


import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Sidebar from "./components/Sidebar"
import Dashboard from "./pages/Dashboard"
import Orders from "./pages/Orders"
import Sales from "./pages/Sales"
import Menu from "./pages/Menu"
import Setup from "./pages/Setup"
import "./App.css"

function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <main className="main-content">
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
  )
}

export default App


