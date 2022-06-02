import { t } from '@admin/locale'
import { LAYOUT } from '@/router/constant'

const userCenter: RouteRecordItem = {
  path: '/userCenter',
  name: 'UserCenter',
  component: LAYOUT,
  redirect: '/userCenter/index',
  meta: {
    hideChildrenInMenu: true,
    icon: 'simple-icons:about-dot-me',
    title: t('layout.header.userCenter'),
    orderNo: 100000,
    hideMenu: true,
  },
  children: [
    {
      path: 'index',
      name: 'AboutPage',
      component: () => import('@/views/sys/userCenter/index.vue'),
      meta: {
        title: t('layout.header.userCenter'),
        icon: 'simple-icons:about-dot-me',
        hideMenu: true,
      },
    },
  ],
}

export default userCenter
