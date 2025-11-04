import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="bg-gradient-to-b from-gray-50 to-white">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
