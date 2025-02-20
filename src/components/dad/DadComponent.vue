<script setup lang="ts">
const props = defineProps<{ treeData: any[] }>()
const emit = defineEmits(['updateTree'])

const handleNodeMoved = (movedNode: any) => {
  emit('updateTree', [...props.treeData, movedNode])
}
</script>

<template>
  <div class="tree-container" @dragover.prevent @drop="handleNodeMoved">
    <cm-tree v-for="node in treeData" :key="node.id" :node="node" @nodeMoved="handleNodeMoved" />
  </div>
</template>

<style scoped>
.tree-container {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  max-width: 300px;
}
</style>
