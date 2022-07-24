<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { getCurrentInstance, h } from 'vue'
import { fetchElephant, fetchRoomList } from '@/api'
import { useI18n } from 'vue-i18n'
import IndexedDB from '@/utils/indexedDB'

const { t } = useI18n()
const router = useRouter()
const route = useRoute()
console.log(route.params)

const { proxy } = getCurrentInstance()

proxy.$message({
  message: h('p', null, [
    h('span', null, 'Message can be '),
    h('i', { style: 'color: teal' }, 'VNode')
  ])
})

const getRoomList = () => {
  fetchRoomList()
}

getRoomList()

const value1 = ''

async function getElephant() {
  const result = await fetchElephant()
  console.log(result)
}

</script>

<template>
  <div>
    国际化：{{ t('home') }}
  </div>
  <button @click="() => router.push({path: '/mine', query: {id: 1}})">跳转到个人中心</button>
  <button @click="getElephant">查看所有</button>

  <el-date-picker
      v-model="value1"
      type="date"
      placeholder="Pick a day"
  />
</template>

<style scoped lang="scss">
@import "@/assets/scss/home";
</style>
