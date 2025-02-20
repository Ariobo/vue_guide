<script setup lang="ts">
import DadComponent from '@/components/dad/dadComponent.vue'
import { ref } from 'vue'

const treeData = ref([
  {
    id: 1,
    name: '상부A',
    children: [
      {
        id: 11,
        name: '중부A',
        children: [
          {
            id: 111,
            name: '하부',
            children: [],
          },
        ],
      },
      {
        id: 12,
        name: '중부B',
        children: [],
      },
    ],
  },
  {
    id: 2,
    name: '상단B',
    children: [],
  },
  {
    id: 3,
    name: '상단C',
    children: [],
  },
])

const updateTreeData = (newNode: any) => {
  treeData.value.push(newNode)
}
</script>

<template>
  <div>
    <DadComponent :treeData="treeData" @nodeClick="updateTreeData" />
  </div>
</template>
