<script setup lang="ts">
const data = ref([
  {
    userType: '일반',
    id: 'user12345',
    genderNm: '남',
    email: 'user12345@email.com',
    entrDttm: '2024-08-01 09:00',
    lastLoginDttm: '2024-08-01 09:00',
    statusNm: '이용중',
  },
  {
    userType: '관리자',
    id: 'admin',
    genderNm: '남',
    email: 'admin@email.com',
    entrDttm: '2024-08-01 09:00',
    lastLoginDttm: '2024-08-01 09:00',
    statusNm: '이용중',
  },
])

const checkableTableRef = ref()

function handleClickRow(item: any) {
  console.log('클릭된 행:', item)
}

// 체크 항목 가져오기
function handleClickCheck() {
  console.log(checkableTableRef.value.checkedRows)
}
</script>

<template>
  <h1 class="guide-title">Guide Table</h1>
  <div class="box">
    <!-- 기본 -->
    <div class="title mt-4">기본</div>
    <cm-table :data="data">
      <cm-table-column id="userType" name="구분" align="center"></cm-table-column>
      <cm-table-column id="id" name="아이디" align="center"></cm-table-column>
      <cm-table-column id="genderNm" name="성별" align="center"></cm-table-column>
      <cm-table-column id="email" name="이메일"></cm-table-column>
      <cm-table-column id="entrDttm" name="가입일시" align="center"></cm-table-column>
      <cm-table-column id="lastLoginDttm" name="마지막 접속일시" align="center"></cm-table-column>
      <cm-table-column id="statusNm" name="가입유무" align="center"></cm-table-column>
    </cm-table>

    <!-- 클릭 테이블 -->
    <div class="title mt-4">기본</div>
    <cm-table :data="data" @click="handleClickRow">
      <cm-table-column id="userType" name="구분" align="center"></cm-table-column>
      <cm-table-column id="id" name="아이디" align="center"></cm-table-column>
      <cm-table-column id="genderNm" name="성별" align="center"></cm-table-column>
      <cm-table-column id="email" name="이메일"></cm-table-column>
      <cm-table-column id="entrDttm" name="가입일시" align="center"></cm-table-column>
      <cm-table-column id="lastLoginDttm" name="마지막 접속일시" align="center"></cm-table-column>
      <cm-table-column id="statusNm" name="가입유무" align="center"></cm-table-column>
    </cm-table>

    <div class="flex items-center justify-between">
      <div class="title mt-4">기본</div>
      <cm-button class="success" @click="handleClickCheck">확인</cm-button>
    </div>
    <cm-table ref="checkableTableRef" :data="data" checkable>
      <cm-table-column id="userType" name="구분" align="center"></cm-table-column>
      <cm-table-column id="id" name="아이디" align="center"></cm-table-column>
      <cm-table-column id="genderNm" name="성별" align="center"></cm-table-column>
      <cm-table-column id="email" name="이메일"></cm-table-column>
      <cm-table-column id="entrDttm" name="가입일시" align="center"></cm-table-column>
      <cm-table-column id="lastLoginDttm" name="마지막 접속일시" align="center"></cm-table-column>
      <cm-table-column id="statusNm" name="가입유무" align="center"></cm-table-column>
    </cm-table>

    <div class="title mt-4">기본</div>
    <cm-table :data="data" @click="handleClickRow">
      <cm-table-column id="userType" name="구분" align="center"></cm-table-column>
      <cm-table-column id="id" name="아이디" align="center"></cm-table-column>
      <cm-table-column id="genderNm" name="성별" align="center">
        <template v-slot:default="row">
          <cm-input v-model="row.genderNm"></cm-input>
        </template>
      </cm-table-column>
      <cm-table-column id="statusNm" name="버튼" align="center">
        <template v-slot:default> <cm-button class="success">확인</cm-button> </template>
      </cm-table-column>
    </cm-table>
  </div>
</template>

<style></style>
