export const sidebarData = [
  {
    path: "/",
    title: "Tổng quan",
    icon: "bx bx-border-all",
  },
  {
    isOpen: false,
    path: "/revenue",
    title: "Bán hàng",
    icon: "bx bx-border-all",
    dropdownList: [
      {
        title: "Doanh thu theo ngày",
        path: "/revenue/doanhthutheongay",
        icon: "bx bxs-user",
      },
      {
        title: "Doanh thu theo tháng và quý",
        path: "/revenue/doanhthutheothangvaquy",
        icon: "bx bxs-user",
      },
      {
        title: "Doanh thu theo cữa hàng",
        path: "/revenue/revenuebystore",
        icon: "bx bxs-user",
      },
    ],
  },
  {
    path: "/tonkho",
    title: "Tồn kho",
    icon: "bx bx-border-all",
  },
  {
    isOpen: false,
    path: "/reports",
    title: "Báo cáo",
    icon: "bx bx-border-all",
    dropdownList: [
      {
        title: "Bán hàng",
        path: "/reports/sales",
        icon: "bx bxs-user",
      },
      {
        title: "Tồn kho",
        path: "/reports/stock",
        icon: "bx bxs-user",
      },
      {
        title: "Hàng hóa",
        path: "/reports/products",
        icon: "bx bxs-user",
      },
    ],
  },
];
