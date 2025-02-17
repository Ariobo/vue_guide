import GuideLayout from '@/layout/guide/GuideLayout.vue'

export default {
  path: '/guide',
  component: GuideLayout, // 레이아웃을 상위 컴포넌트로 설정
  children: [
    {
      path: '', // 기본 경로
      name: 'GuideHome',
      component: () => import('@/views/guide/GuideHome.vue'),
    },
    {
      path: 'styles/color',
      name: 'Colors',
      component: () => import('@/views/guide/styles/GuideColors.vue'),
    },
    {
      path: 'components/input',
      name: 'Inputs',
      component: () => import('@/views/guide/components/GuideInput.vue'),
    },
    {
      path: 'components/modal',
      name: 'Modal',
      component: () => import('@/views/guide/components/GuideModal.vue'),
    },
    {
      path: 'components/button',
      name: 'Buttons',
      component: () => import('@/views/guide/components/GuideButton.vue'),
    },
  ],
}
