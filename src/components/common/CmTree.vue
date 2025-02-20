<script setup lang="ts">
import { defineProps, defineEmits, ref } from 'vue'

const props = defineProps<{ node: { id: number; name: string; children?: any[] } }>()
const emit = defineEmits(['nodeMoved'])

const isExpanded = ref(false)
const draggedNode = ref(null)
const originalParent = ref(null)

const handleDragStart = (event: DragEvent) => {
  console.log(event)
}

const findParent = (node: any, parent: any = null): any => {}

const handleDrop = (node: any): any => {}

const toggleExpand = () => {
  isExpanded.value = !isExpanded.value
}
</script>

<template>
  <div
    class="tree-node"
    draggable="true"
    @dragstart="handleDragStart"
    @dragover.prevent
    @drop="handleDrop(node)"
  >
    <div class="node-label" @click="toggleExpand">
      <span v-if="node.children && node.children.length">
        {{ isExpanded ? '▼' : '▶' }}
      </span>
      {{ node.name }}
    </div>
    <div v-if="isExpanded" class="children">
      <cm-tree
        v-for="child in node.children"
        :key="child.id"
        :node="child"
        @nodeMoved="$emit('nodeMoved', $event)"
      />
    </div>
  </div>
</template>

<style scoped>
.tree-node {
  margin-left: 15px;
}

.node-label {
  cursor: pointer;
  padding: 5px;
  border-radius: 3px;
  transition: background 0.2s;
}

.node-label:hover {
  background: #f0f0f0;
}

.children {
  margin-left: 15px;
  border-left: 1px solid #ddd;
  padding-left: 5px;
}
</style>
