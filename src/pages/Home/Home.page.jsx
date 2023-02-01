import React from "react";
import TopHeader from "../../components/header/TopHeader";
import OverViewContainer from "./components/OverViewContainer";
import RevenueByMonth from "./components/RevenueByMonth/RevenueByMonth";
import Top10Product from "./components/Top10Product/Top10Product";

export default function Home() {
  return (
    <>
      <div className="row">
        <div className="col-12 col-md-9">
          <div className="content__left">
            <div className="content__title">
              <h1>Tổng quan</h1>
            </div>
            <OverViewContainer />
            <div className="content__container">
              <RevenueByMonth />
              <Top10Product />
            </div>
          </div>
        </div>
        <div className="col-12 col-md-3 ">
          <div className="content__right">
            <div className="content__title">
              <h1>Các hoạt động hôm nay</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
