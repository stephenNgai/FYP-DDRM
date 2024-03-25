import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ContentList from "./components/ContentList/ContentList";
import ContentDetail from "./components/ContentDetail/ContentDetail";
import ContentUpload from "./components/ContentUpload/ContentUpload";
import UserDashboard from "./components/UserDashboard/UserDashboard";
import PurchaseConfirmation from "./components/PurchaseConfirmation/PurchaseConfirmation";
import ConnectMetaMaskButton from "./components/ConnectMetaMaskButton/ConnectMetaMaskButton";

const App = () => {
  return (
    <>
      <Header />
      <main>
        {/* React Router v6 uses "Routes" instead of "Switch" */}
        <Routes>
          {/* Define the routes for the various components here */}
          <Route path="/" element={<ContentList />} />
          <Route path="/content/:id" element={<ContentDetail />} />
          <Route path="/upload" element={<ContentUpload />} />
          <Route path="/dashboard" element={<UserDashboard />} />
          <Route
            path="/purchase-confirmation"
            element={<PurchaseConfirmation />}
          />
          {/* Example of a route that might be conditionally rendered */}
          <Route path="/connect-wallet" element={<ConnectMetaMaskButton />} />
          {/* Add other routes as needed */}
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
