import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Path } from "../constants/appConstants";
import Dashboard from "../pages/dashboard/Dashboard";
import Navbar from "../components/common/Navbar";
import SideBar from "../components/common/SideBar";

const Router = () => {
  const routes = () => (
    <div className="h-full">
      <div className="h-[80px] md:pl-56 fixed inset-y-0 w-full">
        <Navbar />
      </div>
      <div className="hidden md:flex h-full w-56 flex-col fixed inset-y-0 z-50">
        <SideBar />
      </div>
      <Routes>
        <Route index element={<Navigate to={Path.dashboard} />} />
        <Route path={Path.dashboard} element={<Dashboard />} />
        <Route path="*" element={<Navigate to={`../${Path.dashboard}`} />} />
      </Routes>
    </div>
  );

  return <BrowserRouter>{routes()}</BrowserRouter>;
};

export default Router;
