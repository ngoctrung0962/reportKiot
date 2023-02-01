import {
  ArcElement,
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
import { Pie } from "react-chartjs-2";
import { useForm } from "react-hook-form";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  SubTitle
);
function RevenueByStoreCircle(props) {
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
  const [pieData, setPieData] = useState({
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        data: [30, 60, 100],
      },
    ],
    labels: ["January", "February", "March"],
  });

  const [pieOptions, setPieOptions] = useState({
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Pie Chart",
      },
    },
  });

  return (
    <div className="content">
      <div className="chart__tool ">
        <div className="d-flex">
          <h1>Doanh thu theo cửa hàng</h1>
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
        <Pie height={400} data={pieData} options={pieOptions} />
      </div>
    </div>
  );
}

export default RevenueByStoreCircle;
