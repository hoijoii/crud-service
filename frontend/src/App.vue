<template>
  <nav>
    <nav-bar/>
  </nav>
  <side-bar/>
  <router-view/>
</template>

<script setup lang="ts">
import NavBar from './components/NavBar.vue';
import SideBar from '@/components/SideBar.vue';
</script>

<style>
@import '@/assets/scss/default.scss';
@import '@/assets/scss/commons.scss';

</style>