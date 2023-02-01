import React from "react";
import { Route, Routes } from "react-router-dom";
import SalesPage from "../pages/Reports/SalesPage/Sales.page";

export default function ReportRoute() {
  return (
    <Routes>
      <Route path="sales" element={<SalesPage />} />
    </Routes>
  );
}
