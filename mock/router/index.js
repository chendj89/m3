import { getMenuList } from "@/api/url";
import Mock from "mockjs";

export const adminRoutes = [
  {
    menuUrl: "/index",
    menuName: "Dashborad",
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
    badge: "New",
    iconPrefix: "iconfont",
    icon: "file-text",
    parentPath: "",
    children: [
      {
        parentPath: "/form",
        menuUrl: "/form/base-form-view",
        menuName: "动态表单",
        cacheable: true,
      },
      {
        parentPath: "/form",
        menuUrl: "/form/advance-form",
        menuName: "高级表单",
        cacheable: true,
      },
      {
        parentPath: "/form",
        menuUrl: "/form/step-form",
        menuName: "分步表单",
        cacheable: true,
      },
    ],
  },
];
export const editorRoutes = [];

Mock.mock(RegExp(getMenuList), "post", function () {
  return Mock.mock({ code: 200, data: adminRoutes, msg: "获取菜单列表成功" });
});
