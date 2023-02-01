import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home.page";
import RevenueByStore from "../pages/RevenueByStore/RevenueByStore";
import ReportRoute from "./ReportRoute";

const MainRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/revenue/revenuebystore" element={<RevenueByStore />} />
      <Route path="reports/*" element={<ReportRoute />} />
    </Routes>
  );
};

export default MainRoute;
