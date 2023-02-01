import React from "react";
import TopHeader from "../components/header/TopHeader";
import MainRoute from "../routes/MainRoute";

export default function CustomLayout() {
  return (
    <>
      <TopHeader />
      <div className="container-fluid">
        <div className="main__content ">
          <MainRoute />
        </div>
      </div>
    </>
  );
}
