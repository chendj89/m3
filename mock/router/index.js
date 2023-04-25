import { getMenuList } from "@/api/url";
import Mock from "mockjs";

export const adminRoutes = [
  {
    menuUrl: "/index",
    menuName: "首页",
    routeName: "dashborad",
    icon: "icon-dashboard",
    parentPath: "",
    children: [
      {
        parentPath: "/index",
        menuUrl: "/index/home",
        menuName: "主控台",
        routeName: "home",
      },
      {
        parentPath: "/index",
        menuUrl: "/index/work-place",
        menuName: "工作台",
        routeName: "workPlace",
        isRootPath: true,
      },
    ],
  },
  {
    menuUrl: "/form",
    menuName: "表单页面",
    iconPrefix: "icon",
    icon: "tools",
    parentPath: "",
    children: [
      {
        parentPath: "/form",
        menuUrl: "/form/base-form-view",
        menuName: "动态表单",
        cacheable: true,
        badge: "New",
      },
    ],
  },
];
export const editorRoutes = [];

Mock.mock(RegExp(getMenuList), "post", function () {
  return Mock.mock({ code: 200, data: adminRoutes, msg: "获取菜单列表成功" });
});
