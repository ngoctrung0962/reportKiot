import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import tableToExcel from "@linways/table-to-excel";
import CustomDataTable from "../../../components/CustomDataTable/CustomDataTable.component";
import axios from "axios";
import { TbFileExport } from "react-icons/tb";
import PivotTableUI from "react-pivottable/PivotTableUI";
import TableRenderers from "react-pivottable/TableRenderers";
import createPlotlyRenderers from "react-pivottable/PlotlyRenderers";
import createPlotlyComponent from "react-plotly.js/factory";
const Plot = createPlotlyComponent(window.Plotly);
const PlotlyRenderers = createPlotlyRenderers(Plot);

// const renameKeys = (obj, newKeys) => {
//   const keyValues = Object.keys(obj).map((key) => {
//     const newKey = newKeys[key] || key;
//     return { [newKey]: obj[key] };
//   });
//   return Object.assign({}, ...keyValues);
// };

// export const changeKeysToReadable = (list) => {
//   const newList = [];
//   list.forEach((l) => {
//     const newKeys = {};

//     Object.keys(l).forEach((k) => {
//       newKeys[k] = k
//         .replace(/([A-Z]+)/g, " $1")
//         .replace(/([A-Z][a-z])/g, " $1");
//     });

//     newList.push(renameKeys(l, newKeys));
//   });

//   return newList;
// };

export default function SalesPage() {
  const fetchData = async () => {
    const res = await axios.get(
      "https://638776d1d9b24b1be3f14cd4.mockapi.io/api/v1/product"
    );
    setData(res.data);
    // Bỏ thuộc tính type trong res.data và thêm thuộc tính loại sản phẩm
    const dataTemp = JSON.parse(JSON.stringify(res.data));
    const newData = dataTemp.map((item) => {
      item["loai"] = item.type?.name;
      delete item.type;
      return item;
    });
    setState({ data: newData });
  };
  useEffect(() => {
    fetchData();
  }, []);
  const columns = [
    {
      name: "Code",
      selector: (row) => row.id,
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
      name: "Loại sản phẩm",
      selector: (row) => row.type?.name,
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
  const [data, setData] = useState();

  const handleShowFilterTool = () => {
    const filterTool = document.querySelector(".filter__tool");
    filterTool.classList.toggle("show");
    let iconShowFilterTool = document.querySelector("#icon__showFilterTool");
    iconShowFilterTool.classList.toggle("fa-angle-right");
    iconShowFilterTool.classList.toggle("fa-angle-left");
  };
  const [state, setState] = useState({});

  // Hàm export dữ liệu ra file excel
  const handleExportClick = () => {
    var htmlTable = document.querySelector(".pvtTable").cloneNode(true);
    //var htmlTable = jQuery(".pvtTable");

    const htmlTableHead = htmlTable.querySelector("thead");
    const htmlHeadRows = htmlTableHead.querySelectorAll("tr");
    htmlHeadRows.forEach((headRow) => {
      const htmlHeadCells = headRow.querySelectorAll("th");
      htmlHeadCells.forEach((htmlCell) => {
        const isAxisLabel = htmlCell.classList.contains("pvtAxisLabel");
        const isColLabel = htmlCell.classList.contains("pvtColLabel");
        const isTotalLabel = htmlCell.classList.contains("pvtTotalLabel");

        if (isAxisLabel) {
          htmlCell.setAttribute("data-a-h", "left");
          htmlCell.setAttribute("data-a-v", "middle");
        }
        if (isColLabel) {
          htmlCell.setAttribute("data-a-h", "center");
          htmlCell.setAttribute("data-a-v", "middle");
        }
        if (isTotalLabel) {
          // htmlCell.setAttribute("data-exclude", "true");
          htmlCell.setAttribute("data-a-h", "center");
          htmlCell.setAttribute("data-a-v", "middle");
        }
      });
    });

    const htmlTableBody = htmlTable.querySelector("tbody");
    const htmlBodyRows = htmlTableBody.querySelectorAll("tr");
    htmlBodyRows.forEach((bodyRow) => {
      const htmlBodyCells = bodyRow.querySelectorAll("th, td");
      htmlBodyCells.forEach((htmlCell) => {
        const isRowLabel = htmlCell.classList.contains("pvtRowLabel");
        const isValue = htmlCell.classList.contains("pvtVal");
        const isTotal = htmlCell.classList.contains("pvtTotal");
        const isTotalLabel = htmlCell.classList.contains("pvtTotalLabel");
        const isGrandTotal = htmlCell.classList.contains("pvtGrandTotal");

        if (isRowLabel) {
          htmlCell.setAttribute("data-a-h", "left");
          htmlCell.setAttribute("data-a-v", "middle");
        }
        if (isValue) {
          htmlCell.setAttribute("data-a-h", "right");
          htmlCell.setAttribute("data-a-v", "middle");
          htmlCell.setAttribute("data-t", "n");
        }
        if (isTotal || isTotalLabel || isGrandTotal) {
          // htmlCell.setAttribute("data-exclude", "true");
          htmlCell.setAttribute("data-a-h", "right");
          htmlCell.setAttribute("data-a-v", "middle");
          htmlCell.setAttribute("data-t", "s");
        }
      });
    });

    tableToExcel.convert(htmlTable, { name: "mine.xlsx" });
  };

  // Kiểu hiển thị dữ liệu (1 là table, 2 là pivot table)
  const [displayType, setDisplayType] = useState("1");
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
                  <input
                    type="radio"
                    name="typeOfChart"
                    id="typeOfChart1"
                    value={"1"}
                    defaultChecked={displayType === "1" ? true : false}
                    onChange={(e) => {
                      setDisplayType(e.target.value);
                    }}
                  />
                  <label htmlFor="typeOfChart1">Dạng bảng</label>
                </div>
                <div className="typeOfChart__item">
                  <input
                    type="radio"
                    name="typeOfChart"
                    id="typeOfChart2"
                    value={"2"}
                    onChange={(e) => {
                      setDisplayType(e.target.value);
                    }}
                  />
                  <label htmlFor="typeOfChart2">Dạng pivot bảng</label>
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
              {displayType === "1" ? (
                <CustomDataTable
                  columns={columns}
                  data={data}
                  selectableRows={false}
                />
              ) : (
                <>
                  <button
                    className="btn__export"
                    onClick={() => handleExportClick()}
                  >
                    Xuất Excel
                  </button>

                  {/* Sử dụng chart */}
                  <PivotTableUI
                    //renderres
                    renderers={Object.assign(
                      {},
                      TableRenderers,
                      PlotlyRenderers
                    )}
                    data={data}
                    {...state}
                    onChange={(s) => {
                      // if (s.derivedAttributes) {
                      //   s.derivedAttributes = JSON.parse(s.derivedAttributes);
                      // }
                      setState(s);
                    }}
                    unusedOrientationCutoff={Infinity}
                  />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
