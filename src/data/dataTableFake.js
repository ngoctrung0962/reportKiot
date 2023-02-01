import React from "react";

export const columns = [
  {
    name: "Code",
    selector: (row) => row.code,
    sortable: true,
    reorder: true,
  },
  {
    name: "Tên Coupon",
    selector: (row) => row.name,
    sortable: true,
    reorder: true,
  },
  {
    name: "Loại",
    selector: (row) => row.type,
    sortable: true,
    reorder: true,
  },
];

export const data = [
  {
    code: "123",
    name: "Coupon 1",
    type: "Giảm giá",
  },
  {
    code: "456",
    name: "Coupon 2",
    type: "Giảm giá",
  },
  {
    code: "789",
    name: "Coupon 3",
    type: "Giảm giá",
  },
];
