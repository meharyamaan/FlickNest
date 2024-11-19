import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main className="p-4 min-h-[calc(100vh-60px-48px)]">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
