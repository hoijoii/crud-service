<template>
  <div id="container" class="list-page">
    <div class="posts">
      <div v-for="post in posts" :key="post.post_id">
        <div>{{ post.title }}</div>
        <div>{{ post.nickname }}</div>
        <div>{{ post.created_at }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { onMounted, ref, Ref } from 'vue'
import RestUtils from '@/utils/rest-utils';

const posts : Ref<Array<any>>= ref([])

const init = () => {
  RestUtils.get('/posts/list', null)
    .then((resp)=>{
      posts.value = resp.data
    })
    .catch((err)=>console.error(err))
}

onMounted(()=>{
  init()
})

</script>