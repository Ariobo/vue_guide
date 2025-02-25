<script setup lang="ts">
interface PaginationProps {
  totalCount?: number
  pageLimit?: number
  page?: number
  sizeOfRange?: number
}

const props = withDefaults(defineProps<PaginationProps>(), {
  totalCount: 10,
  pageLimit: 10,
  page: 1,
  sizeOfRange: 10,
})

const emit = defineEmits<{
  (event: 'update:page', value: number): void
}>()

const totalPages = computed(() => Math.ceil(props.totalCount / props.pageLimit))

const currentPageGroup = computed(() => Math.ceil(props.page / props.sizeOfRange))

const pageNumbers = computed(() => {
  const startPage = (currentPageGroup.value - 1) * props.sizeOfRange + 1
  const endPage = Math.min(startPage + props.sizeOfRange - 1, totalPages.value)
  return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i)
})

function prevPage() {
  if (props.page > 1) {
    emit('update:page', props.page - 1)
  }
}

function nextPage() {
  if (props.page < totalPages.value) {
    emit('update:page', props.page + 1)
  }
}

function goToPage(page: number) {
  if (page >= 1 && page <= totalPages.value) {
    emit('update:page', page)
  }
}

function startPage() {
  if (props.page > 1) {
    emit('update:page', 1)
  }
}

function endPage() {
  if (props.page < totalPages.value) {
    emit('update:page', totalPages.value)
  }
}
</script>

<template>
  <div class="pagination-wrapper">
    <div class="pagination">
      <button class="icon" @click="startPage" :disabled="props.page === 1">
        <i class="i-ta-chevrons-left">left</i>
      </button>
      <button class="icon" @click="prevPage" :disabled="props.page === 1">
        <i class="i-ta-chevron-left">left</i>
      </button>

      <button
        v-for="page in pageNumbers"
        :key="page"
        @click="goToPage(page)"
        :class="{ active: props.page === page }"
      >
        {{ page }}
      </button>

      <button class="icon" @click="nextPage" :disabled="props.page === totalPages">
        <i class="i-ta-chevron-right">right</i>
      </button>
      <button class="icon" @click="endPage" :disabled="props.page === totalPages">
        <i class="i-ta-chevrons-right">right</i>
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.pagination-wrapper {
  display: flex;
  justify-content: center; // 가로 중앙 정렬
  width: 100%;
}

.pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 6px 12px;
  border-radius: 20px;
  background-color: #f8f8f8;
  width: fit-content;

  button {
    width: var(--size-7);
    height: var(--size-7);
    border: none;
    background: transparent;
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    transition:
      background 0.2s,
      color 0.2s;

    &:hover {
      background: rgba(0, 0, 0, 0.1);
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    &.active {
      background: #9ca3af; // 선택된 페이지의 배경색
      color: white;
      font-weight: bold;
    }
  }
}

.icon {
  width: var(--size-10);
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
