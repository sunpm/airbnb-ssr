<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import en from 'element-plus/es/locale/lang/en'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale: localeLanguage } = useI18n()
const locale = ref(zhCn)

const changeLang = (language: any) => {
  locale.value = language
  localeLanguage.value = language.name
}
</script>

<template>
  <el-config-provider :locale="locale">
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo"/>
    </a>
    <HelloWorld msg="Vite + Vue"/>
    <button @click="changeLang(zhCn)">中文</button>
    <button @click="changeLang(en)">英文</button>
    <router-link to="'/home'">首页</router-link>
    <router-link to="'/main'">个人中心</router-link>
    <router-view></router-view>
  </el-config-provider>
</template>

<style scoped lang="scss">
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
