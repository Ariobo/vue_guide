<script setup lang="ts">
import { ref } from 'vue'
import cmTableCell from '../cmTableCell'
interface Table {
  data?: Record<string, any>[]
  clickable?: boolean
  checkable?: boolean
  nodata?: string
}

const checkedRowIdxs = ref<number[]>([])
const checkAllRef = ref()

// 테이블 데이터 예시
const emits = defineEmits(['click'])

const props = withDefaults(defineProps<Table>(), {
  data: () => [],
  clickable: false,
  checkable: false,
  nodata: '검색 결과가 없습니다',
})

const columns = ref<any>([])

provide('column', {
  registColumn: (column: any) => {
    columns.value.push(column)
  },
})

const tableData = computed(() => {
  const data = props.data
  data.forEach((_r: Record<string, any>, index: number) => {
    _r.rowIdx = index
  })
  return data
})

// 전체 체크 변경 시
function handleChangeCheckedAll(e: Event) {
  if ((e.target as HTMLInputElement).checked && tableData.value) {
    checkedRowIdxs.value = tableData.value.map((_r: Record<string, any>) => _r.rowIdx)
  } else {
    checkedRowIdxs.value = []
  }
}

// 체크 변경 시
function handleChangeCheck() {
  if (checkAllRef.value) {
    checkAllRef.value.checked = checkedRowIdxs.value.length === tableData.value.length
  }
}

// 행 클릭 시 이벤트
const handleClickRow = (item: any) => {
  emits('click', item)
}

const checkedRows = computed(() => {
  return checkedRowIdxs.value.map((_i: number) => {
    return tableData.value.find((_d) => _d.rowIdx === _i)
  })
})

// 부모 접근
defineExpose({
  checkedRows,
})
</script>

<template>
  <div class="table-wrapper">
    <table class="table">
      <thead>
        <tr>
          <th v-if="props.checkable">
            <input
              ref="checkAllRef"
              type="checkbox"
              class="form-checkbox"
              @change="handleChangeCheckedAll"
            />
          </th>

          <th v-for="(col, index) in columns" :key="`col-${index}`">
            {{ col.name }}
          </th>
        </tr>
      </thead>

      <tbody v-if="tableData.length > 0">
        <tr v-for="(element, rowIndex) in tableData" :key="`col-${element.rowIdx}`">
          <td v-if="props.checkable">
            <input
              v-model="checkedRowIdxs"
              type="checkbox"
              class="form-checkbox"
              :value="element.rowIdx"
              @change="handleChangeCheck"
            />
          </td>
          <td
            v-for="(col, index) in columns"
            :key="`col-${index}`"
            @click="handleClickRow(element)"
          >
            <template v-if="col.slot">
              <cmTableCell
                :row="element"
                :column="col"
                :row-index="rowIndex"
                :col-index="index"
              ></cmTableCell>
            </template>
            <template v-else>
              <div>
                {{ element[col.id] }}
              </div>
            </template>
          </td>
        </tr>
      </tbody>
      <tbody v-else>
        <tr>
          <td colspan="6" align="center">결과가 없습니다</td>
        </tr>
      </tbody>
    </table>
    <div class="hidden">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$table-border-color: #e0e0e0;
$table-header-bg: #f8f9fa;
$table-row-hover-bg: #f5f5f5;
$table-border-radius: 8px;
$table-padding: 12px;

.table-wrapper {
  width: 100%;
  overflow-x: auto;
  border-radius: $table-border-radius;
  border: 1px solid $table-border-color;
  background: #fff;
}

.table {
  width: 100%;
  border-collapse: collapse;
  text-align: left;

  thead {
    th {
      padding: $table-padding;
      border-bottom: 2px solid $table-border-color;
      font-weight: 600;
      text-align: center;
      white-space: nowrap;
      height: 24px;
    }
  }

  tbody {
    tr {
      border-bottom: 1px solid $table-border-color;
      transition: background 0.2s;

      &:hover {
        background-color: $table-row-hover-bg;
      }

      td {
        padding: $table-padding;
        text-align: center;
        white-space: nowrap;
        height: 24px;
      }
    }
  }
}
</style>
