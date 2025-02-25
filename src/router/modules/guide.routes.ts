import GuideLayout from '@/layout/guide/GuideLayout.vue'

export default {
  path: '/guide',
  component: GuideLayout,
  children: [
    {
      path: '',
      name: 'GuideHome',
      component: () => import('@/views/guide/GuideHome.vue'),
    },
    {
      path: 'styles/color',
      name: 'Colors',
      component: () => import('@/views/guide/styles/GuideColors.vue'),
    },
    {
      path: 'components/input',
      name: 'Inputs',
      component: () => import('@/views/guide/components/GuideInput.vue'),
    },
    {
      path: 'components/dialog',
      name: 'Dialog',
      component: () => import('@/views/guide/components/GuideDialog.vue'),
    },
    {
      path: 'components/modal',
      name: 'Modal',
      component: () => import('@/views/guide/components/GuideModal.vue'),
    },
    {
      path: 'components/notification',
      name: 'Notification',
      component: () => import('@/views/guide/components/GuideNotification.vue'),
    },
    {
      path: 'components/tree',
      name: 'Tree',
      component: () => import('@/views/guide/components/GuideTree.vue'),
    },
    {
      path: 'components/table',
      name: 'Table',
      component: () => import('@/views/guide/components/GuideTable.vue'),
    },
    {
      path: 'components/pagiNation',
      name: 'PagiNation',
      component: () => import('@/views/guide/components/GuidePagiNation.vue'),
    },
    {
      path: 'components/button',
      name: 'Buttons',
      component: () => import('@/views/guide/components/GuideButton.vue'),
    },
  ],
}
