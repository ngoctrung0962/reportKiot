import React from "react";
import OverViewBox from "./OverViewBox";
import { FaShoppingCart } from "react-icons/fa";
import { RiBillFill } from "react-icons/ri";
import { GiTakeMyMoney } from "react-icons/gi";

export default function OverViewContainer() {
  const data = [
    {
      title: "Tổng số hóa đơn",
      value: 100,
      icon: <FaShoppingCart color="#F7444E" fontSize={30} />,
    },
    {
      title: "Tổng số hóa đơn hôm nay ",
      value: 100,
      icon: <RiBillFill color="#00693e" fontSize={30} />,
    },
    {
      title: "Tổng giá trị",
      value: 1000000,
      icon: <GiTakeMyMoney color="#1D3557" fontSize={30} />,
    },
    {
      title: "Giá trị trung bình",
      value: 1000000,
      icon: <GiTakeMyMoney color="#FFC107" fontSize={30} />,
    },
  ];
  return (
    <div className="overview__container d-flex flex-column flex-sm-row gap-1  justify-content-evenly align-items-center flex-start">
      {data.map((item, index) => {
        return <OverViewBox key={index} item={item} />;
      })}
    </div>
  );
}
