export default [
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
      },
    ],
  },
];
