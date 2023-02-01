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
function RevenueByMonth(props) {
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
        label: "Chi nhánh Quận 1",
        data: [
          500000, 1200000, 700000, 800000, 1200000, 1000000, 1100000, 900000,
          1000000, 1200000, 400000, 1200000,
        ],
        borderColor: "#005b96 ",
        backgroundColor: "#005b96 ",
        borderWidth: 1,
      },

      {
        label: "Chi nhánh Quận 2",
        data: [
          400000, 1100000, 300000, 800000, 600000, 1000000, 700000, 900000,
          1000000, 1200000, 1000000, 1200000,
        ],
        borderColor: "#00693e",
        backgroundColor: "#00693e",
        borderWidth: 1,
      },
    ],
    labels: [
      "Tháng 1",
      "Tháng 2",
      "Tháng 3",
      "Tháng 4",
      "Tháng 5",
      "Tháng 6",
      "Tháng 7",
      "Tháng 8",
      "Tháng 9",
      "Tháng 10",
      "Tháng 11",
      "Tháng 12",
    ],
  });

  const [barOptions, setBarOptions] = useState({
    backgroundColor: "#000000",
    maintainAspectRatio: false,

    responsive: true,
    interaction: {
      intersect: false,
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
        display: true,
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
        <h1>
          Doanh thu thuần theo tháng <GrFormNextLink />{" "}
          {Number(2000000).toLocaleString("vi", {
            currency: "VND",
          })}{" "}
          VNĐ
        </h1>
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

export default RevenueByMonth;
