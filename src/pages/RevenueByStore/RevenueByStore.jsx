import React from "react";
import OverViewContainer from "../Home/components/OverViewContainer";
import RevenueByMonth from "../Home/components/RevenueByMonth/RevenueByMonth";
import Top10Product from "../Home/components/Top10Product/Top10Product";
import RevenueByStoreCircle from "./components/RevenueByStoreCircle";

export default function RevenueByStore() {
  return (
    <div className="row">
      <div className="col-12 ">
        <div className="content__left">
          <div className="content__title">
            <h1>Tổng quan</h1>
          </div>
          <OverViewContainer />
          <div className="content__container">
            <div className="row">
              <div className="col-12 col-md-6">
                <RevenueByStoreCircle />
              </div>
              <div className="col-12 col-md-6">
                <Top10Product />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
