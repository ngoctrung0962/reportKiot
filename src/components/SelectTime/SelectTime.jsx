import React from "react";
import { Form } from "react-bootstrap";
export default function SelectTime({ options, value }) {
  const handleChooseTime = () => {
    window.alert("Chọn khoảng thời gian");
  };
  return (
    <Form.Select
      className="select__day"
      onChange={(e) => {
        if (e.target.value === "chooseTime") handleChooseTime();
      }}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
      <option
        value="chooseTime"
        onClick={() => {
          console.log("Chọn khoảng thời gian");
          handleChooseTime();
        }}
      >
        Chọn khoảng thời gian
      </option>
    </Form.Select>
  );
}
