import React from "react";
import { Form } from "react-bootstrap";
import { TbFileExport } from "react-icons/tb";
import { MdArrowForwardIos } from "react-icons/md";
import CustomDataTable from "../../../components/CustomDataTable/CustomDataTable.component";
export default function SalesPage() {
  const columns = [
    {
      name: "Code",
      selector: (row) => row.code,
      sortable: true,
      reorder: true,
    },
    {
      name: "Tên sản phẩm",
      selector: (row) => row.name,
      sortable: true,
      reorder: true,
    },
    {
      name: "Giá",
      selector: (row) => row.price,
      sortable: true,
      reorder: true,
    },
  ];
  const data = [
    {
      code: "123",
      name: "Rượu vang đỏ",
      price: "1.000.000",
    },
    {
      code: "456",
      name: "Rượu chuối hột",
      price: "2.000.000",
    },
    {
      code: "789",
      name: "Rượu cồn",
      price: "20.000",
    },
    {
      code: "123",
      name: "Rượu vang đỏ",
      price: "1.000.000",
    },
    {
      code: "123",
      name: "Rượu vang đỏ",
      price: "1.000.000",
    },
    {
      code: "456",
      name: "Rượu chuối hột",
      price: "2.000.000",
    },
    {
      code: "789",
      name: "Rượu cồn",
      price: "20.000",
    },
    {
      code: "123",
      name: "Rượu vang đỏ",
      price: "1.000.000",
    },
    {
      code: "123",
      name: "Rượu vang đỏ",
      price: "1.000.000",
    },
    {
      code: "456",
      name: "Rượu chuối hột",
      price: "2.000.000",
    },
    {
      code: "789",
      name: "Rượu cồn",
      price: "20.000",
    },
  ];
  const handleShowFilterTool = () => {
    const filterTool = document.querySelector(".filter__tool");
    filterTool.classList.toggle("show");
    let iconShowFilterTool = document.querySelector("#icon__showFilterTool");
    iconShowFilterTool.classList.toggle("fa-angle-right");
    iconShowFilterTool.classList.toggle("fa-angle-left");
  };
  return (
    <>
      <div className="content__title">
        <h1>Báo cáo bán hàng</h1>
      </div>
      <div className="d-flex ">
        <div className="content__l">
          <div className="filter__tool ">
            <button className=" btn__showFilterTool d-block d-md-none">
              <i
                className="fa-solid fa-angle-right "
                id="icon__showFilterTool"
                onClick={() => {
                  handleShowFilterTool();
                }}
              ></i>
            </button>
            <div className="filter__export filter__box">
              <button className="btn btn__exportReport">
                <TbFileExport /> Xuất báo cáo
              </button>
            </div>
            <div className="filter__typeOfChart filter__box">
              <div className="title">
                <h6>Kiểu hiển thị</h6>
              </div>
              <div className="typeOfChart__list">
                <div className="typeOfChart__item">
                  <input type="radio" name="typeOfChart" id="typeOfChart1" />
                  <label htmlFor="typeOfChart1">Biểu đồ cột</label>
                </div>
                <div className="typeOfChart__item">
                  <input type="radio" name="typeOfChart" id="typeOfChart2" />
                  <label htmlFor="typeOfChart2">Biểu đồ đường</label>
                </div>
              </div>
            </div>

            <div className="filter__time filter__box">
              <div className="title">
                <h6>Thời gian</h6>
              </div>
              <Form.Select
                className="select__day"
                onChange={(e) => {
                  if (e.target.value === "6") {
                    window.alert("hello");
                  }
                }}
              >
                <option value="1">Hôm nay</option>
                <option value="2">Hôm qua</option>
                <option value="3">7 ngày trước</option>
                <option value="5">Tháng này</option>
                <option value="6">Tháng trước</option>
              </Form.Select>
            </div>

            <div className="filter__saleMethod filter__box">
              <div className="title">
                <h6>Phương thức bán hàng</h6>
              </div>
              <div className="saleMethod__list">
                <div className="saleMethod__item">
                  <input type="checkbox" name="saleMethod" id="saleMethod2" />
                  <label htmlFor="saleMethod2">Tại cửa hàng</label>
                </div>
                <div className="saleMethod__item">
                  <input type="checkbox" name="saleMethod" id="saleMethod3" />
                  <label htmlFor="saleMethod3">Giao hàng</label>
                </div>
              </div>
            </div>

            <div className="filter__concerns filter__box">
              <div className="title">
                <h6>Mối quan tâm</h6>
              </div>

              <div className="concerns__list">
                <div className="concerns__item">
                  <input type="checkbox" name="concerns" id="concerns1" />
                  <label htmlFor="concerns1">Doanh thu</label>
                </div>
                <div className="concerns__item">
                  <input type="checkbox" name="concerns" id="concerns2" />
                  <label htmlFor="concerns2">Số lượng bán</label>
                </div>
                <div className="concerns__item">
                  <input type="checkbox" name="concerns" id="concerns3" />
                  <label htmlFor="concerns3">Lợi nhuận</label>
                </div>
                <div className="concerns__item">
                  <input type="checkbox" name="concerns" id="concerns4" />
                  <label htmlFor="concerns4">Số lượng khách hàng</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content__r">
          <div className="content__table">
            <div className="table__listTitle">
              <h4>Báo cáo bán hàng theo lợi nhuận</h4>
              <p>Từ ngày 30/01/2023 đến ngày 01/02/2023</p>
              <p>Phương thức bán hàng: Tại cửa hàng</p>
            </div>
            <div className="table__content">
              <CustomDataTable
                columns={columns}
                data={data}
                selectableRows={false}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
