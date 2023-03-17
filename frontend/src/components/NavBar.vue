<template>
  <div class="navbar">
    <div class="title">BLOG</div>
    <div class="menus">
      <span class="menu" v-for="item in menus" :key="item.id">
        <router-link :to="item.to" v-if="!item.isSubTab" :class="['menu-item', {'clicked': route.path === item.to}]">{{ item.name }}</router-link>
        <drop-down v-else class="menu-item" :menu="item.name" :sub="item.subTabs" />
      </span>
    </div>
    <div class="search">
      <input type="text" placeholder="검색어를 입력해주세요." class="search-input">
      <span class="material-icons icon">search</span>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { onMounted, ref, Ref } from "vue"
import { useRoute, useRouter } from "vue-router"
import _ from 'lodash'
import DropDown from "./DropDown.vue";

/* eslint-disable */
const route = useRoute()
const router = useRouter()
const menus = require('@/assets/data/tabs-info.json').MENU

// dropdown menu
const categories: Ref<any> = ref(null)
const isSubOpen: Ref<boolean> = ref(false)

const subTabActive = () => {
  isSubOpen.value = !isSubOpen.value
  console.log(isSubOpen.value)
}

const clickOutside = (e: any) => {
  if (e.target !== categories.value) {
    
  }
}

onMounted(()=>{
  //window.addEventListener('click', clickOutside)
})

</script>