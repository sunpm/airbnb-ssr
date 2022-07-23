<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { getCurrentInstance, h } from 'vue'
import { fetchRoomList } from '@/api'
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

// 数据库相关操作
const airbnbDB = new IndexedDB('airbnb')

airbnbDB.openStore('elephant', 'id', ['nose', 'ear'])

const value1 = ''

// 增 / 改
function addDB(storeName: string) {
  airbnbDB.updateItem(storeName, {
    nose: '33m',
    ear: '比较大'
  })
}

// 删除
function deleteDB(storeName: string, key: number | string) {
  airbnbDB.deleteItem(storeName, key)
}

// 查询所有数据
function getAll(storeName: string) {
  airbnbDB.getList(storeName)
}

// 查询某一条数据
function getItem(storeName: string, key: number | string) {
  airbnbDB.getItem(storeName, key)
}
</script>

<template>
  <div>
    国际化：{{ t('home') }}
  </div>
  <button @click="addDB('elephant')">增</button>
  <button @click="deleteDB('elephant', 1)">删除</button>
  <button @click="getAll('elephant')">查询所有数据</button>
  <button @click="getItem('elephant', 2)">查询id为2的数据</button>
  <button @click="() => router.push({path: '/mine', query: {id: 1}})">跳转到个人中心</button>

  <el-date-picker
      v-model="value1"
      type="date"
      placeholder="Pick a day"
  />
</template>

<style scoped lang="scss">
@import "@/assets/scss/home";
</style>
