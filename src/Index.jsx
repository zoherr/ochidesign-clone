import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FormRedirect from "./components/FormRedirect";

function Index() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default Index;
