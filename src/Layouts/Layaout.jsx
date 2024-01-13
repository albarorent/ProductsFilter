import React from "react";
import { Outlet } from "react-router-dom";
import Categorys from "../pages/Categorys";
import Header from "./Header";
import Footer from "./Footer";

function Layaout() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-10">
        <div className="flex flex-col md:flex-row gap-5  items-center md:items-baseline justify-center md:justify-normal">
          <Categorys />
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Layaout;
