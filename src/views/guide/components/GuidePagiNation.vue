<script setup lang="ts">
import CmpagiNation from '@/components/common/CmpagiNation.vue'
import { ref } from 'vue'

const currentPage = ref(1)
const itemsPerPage = 10
const totalItems = 100
const sizeOfRange = 5

function updatePage(page: number) {
  currentPage.value = page
}
</script>

<template>
  <CmpagiNation
    :totalCount="totalItems"
    :pageLimit="itemsPerPage"
    :page="currentPage"
    :sizeOfRange="sizeOfRange"
    @update:page="updatePage"
  />
</template>
