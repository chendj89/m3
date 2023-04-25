import { LAYOUT } from '@/store/keys'

export const asyncRoutes = [
  {
    path: '/index',
    component: LAYOUT,
    name: 'Index',
    meta: {
      title: '首页',
      iconPrefix: 'icon',
      icon: 'dashboard',
    },
    children: [
      {
        path: 'home',
        name: 'Home',
        component: () => import('@/views/index/main.vue'),
        meta: {
          title: '主控台',
          affix: true,
          cacheable: true,
          iconPrefix: 'icon',
          icon: 'menu',
        },
      },
      {
        path: 'work-place',
        name: 'WorkPlace',
        component: () => import('@/views/index/work-place.vue'),
        meta: {
          title: '工作台',
          affix: true,
          cacheable: true,
          iconPrefix: 'icon',
          icon: 'menu',
        },
      },
    ],
  },
]
