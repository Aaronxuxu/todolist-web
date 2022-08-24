import { lazy } from "react";
const routePath = [
  {
    key: "/home",
    name: "主页",
    element: lazy(() => import("../pages/TodoList_Home")),
  },
  {
    key: "/detail",
    name: "事项详情",
    element: lazy(() => import("../pages/TodoList_Detail")),
  },
  {
    key: "/register",
    name: "登录",
    element: lazy(() => import("../pages/TodoList_Register")),
  },
  {
    key: "/userInfo",
    name: "用户信息",
    element: lazy(() => import("../pages/TodoList_UserInfo")),
  },
];
export default routePath;
