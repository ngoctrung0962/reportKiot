import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  SubTitle,
  Title,
  Tooltip,
} from "chart.js";
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Bar, Line } from "react-chartjs-2";
import { useForm } from "react-hook-form";
import { GrFormNextLink } from "react-icons/gr";
import { IoIosArrowForward } from "react-icons/io";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  SubTitle
);
function Top10Product(props) {
  //Hook form
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    control,
    formState: { errors },
    reset,
    watch,
  } = useForm({
    defaultValues: {},
  });
  const [barData, setBarData] = useState({
    datasets: [
      {
        label: "Số lượng",
        data: [
          1000000, 1200000, 700000, 800000, 1200000, 1000000, 1100000, 900000,
          1000000, 1200000,
        ],
        borderColor: "#005b96 ",
        backgroundColor: "#005b96 ",
        borderWidth: 1,
      },
    ],
    labels: [
      "Rượu chivas Regal 12 ",
      "Kem dưỡng da",
      "Cua hoàng đế",
      "Tôm hùm",
      "Mì tôm",
      "Cơm tấm",
      "Bánh mì",
      "Bánh tráng",
      "Bánh mỳ",
      "Bánh tráng trộn",
    ],
  });

  const [barOptions, setBarOptions] = useState({
    indexAxis: "y",
    backgroundColor: "#000000",
    maintainAspectRatio: false,

    responsive: true,
    interaction: {
      intersect: true,
    },
    scales: {
      y: {
        min: 0,
        ticks: {
          stepSize: 10000,
        },
      },
    },

    plugins: {
      legend: {
        display: false,
        position: "bottom",
        align: "center",
        labels: {
          font: {
            size: 12,
            weight: "",
            family: "Readex Pro, sans-serif",
          },
          color: "#000000",
          boxWidth: 30,
          boxHeight: 20,
        },
      },
    },
  });

  return (
    <div className="content">
      <div className="chart__tool ">
        <div className="d-flex">
          <h1>
            TOP 10 HÀNG HÓA BÁN CHẠY THÁNG NÀY
            <IoIosArrowForward />
          </h1>
          <Form.Select
            {...register("day")}
            className="select__day"
            style={{ width: "auto" }}
          >
            <option value="1">Theo doanh thu</option>
            <option value="2">Theo số lượng</option>
          </Form.Select>
        </div>

        <div className="chart__tool__select">
          <Form.Select {...register("day")} className="select__day">
            <option value="1">Hôm nay</option>
            <option value="2">Hôm qua</option>
            <option value="3">7 ngày trước</option>
            <option value="5">Tháng này</option>
            <option value="6">Tháng trước</option>
          </Form.Select>
        </div>
      </div>
      <div className="group__btn__tool d-flex mb-2">
        <div className="btn__tool active">Ngày</div>
        <div className="btn__tool">Tuần</div>
        <div className="btn__tool">Tháng</div>
      </div>
      <div className="chart__content">
        <Bar height={400} data={barData} options={barOptions} />
      </div>
    </div>
  );
}

export default Top10Product;
