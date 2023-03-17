<template>
  <div class="dropdown">
    <div @click="isOpened = !isOpened" :class="['title', {'clicked': route.path.includes('category')}]">
      {{ menu }}
      <span v-if="!isOpened">▾</span> 
      <span v-else>▴</span>
    </div>
    
    <div class="subTab" v-if="isOpened" v-click-outside="onClickOutside">
      <div v-for="item in sub" :key="item.id">
        <router-link :to="item.to" :class="['mini-menu', {'clicked': route.path === item.to}]">{{ item.name }}</router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { ref, Ref, defineProps } from 'vue';
import { useRoute } from 'vue-router';

const props = defineProps({
  menu: {
    Type: String,
    default: ''
  },
  sub: {
    Type: Array,
    default: () => [
      {
        id: '',
        name: '',
        to: ''
      }
    ]
  }
});

const route = useRoute()

const subTab: Ref<any> = ref(null)

const isOpened: Ref<boolean> = ref(false);

const onClickOutside = (e:any) => {
  isOpened.value = false
} 
</script>