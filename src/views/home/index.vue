<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { getCurrentInstance, h } from 'vue'
import { fetchRoomList } from '@/api'

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
</script>

<template>
  首页
  <el-button>Default</el-button>
  <button @click="() => router.push({path: '/mine', query: {id: 1}})">跳转到个人中心</button>
  <div class="text">
    hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh跳转到个人中心跳转到个人中心跳转到个人中心跳转到个人中心跳转到个人中心跳转到个人中心跳转到个人中心hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhv
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/scss/home";
</style>
