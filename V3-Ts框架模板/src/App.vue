
<template>
    <router-view />
</template>

<script setup lang="ts">
import HelloWorldVue from './components/HelloWorld.vue';
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { reactive, ref, onMounted, watch, onBeforeMount, } from 'vue'
import { useRouter } from 'vue-router';
const router = useRouter();

onMounted(()=>{
   
});
function initContentSize() {
  //根据浏览器高度设置初始高度
  setSize();
  //监听浏览器高度变化，改变高
  window.onresize = ()=> {
    setSize();
  }
}
function setSize() {
  const body  = document.body;
  body.style.height = (window.innerHeight)+'px';
}

// router.push({path: '/'})
</script>

<style lang="less" scoped>
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
