<template>
  <div class="sidebar">
    <div class="profile">
      <div><img src="@/assets/images/sky.png" /></div>
      <div>ssery</div>
      <div>자기소개입니다.</div>

    </div>
    <div class="categories">
      <div>Categories</div>
      <div v-for="tab in tabs" :key="tab.id">
        <router-link :to="tab.to" v-if="tab.id !== 4">{{ tab.name }}</router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
/* eslint-disable */
const tabs = require('@/assets/data/tabs-info.json').MENU

const setCategory = () => {
  tabs.
}

</script>