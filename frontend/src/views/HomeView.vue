<template>
  <div class="home">
    <div id="header">
      <div class="banner">
        <div v-for="post in posts" :key="post.id">
          <!-- <img src="@/assets/images/sky.png"> -->
          <div class="title">{{ post.title }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
/* eslint-disable */
import { onMounted, ref, Ref } from 'vue'
import RestUtils from '@/utils/rest-utils'

const tabs = require('@/assets/data/tabs-info.json')

const posts : Ref<Array<any>> = ref([])

const init = () => {
  RestUtils.get('/posts/list', null)
    .then((resp:any) => {
      console.log(resp.data)
      posts.value = resp.data
    })
    .catch((err) => {
      console.error(err)
    })
}

onMounted(()=>{
  init()
})

</script>
