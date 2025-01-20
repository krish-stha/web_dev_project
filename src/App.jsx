// import React, { useState } from "react";
// import Sidebar from "./components/Sidebar";
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

import React from "react";
import Landing from "./components/Landing";

function App() {
  return <Landing />;
}

export default App;