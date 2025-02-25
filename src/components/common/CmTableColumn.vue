<script setup lang="ts">
interface TableColumn {
  id: string
  name: string
  width?: string | number
  align?: string
  sortable?: boolean
}

const props = withDefaults(defineProps<TableColumn>(), {
  sortable: false,
})

const { registColumn } = <any>inject('column')

onMounted(() => {
  const renderCell = null
  let slot = null
  const instance = getCurrentInstance()
  if (instance?.slots.default) {
    slot = instance?.slots.default
  }
  registColumn({
    ...props,
    renderCell,
    slot,
  })
})
</script>

<template>
  <div>
    <slot name="default" v-bind="$props"></slot>
  </div>
</template>

<style></style>
