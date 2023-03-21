<template>
  <div class="home">
    <div id="header">
      <div class="banner">
        <div v-for="post in posts" :key="post.id" class="preview">
          <!-- <img src="@/assets/images/sky.png"> -->
          <div class="text">
            <div class="category">{{ post.category_name }}</div>
            <div class="title">{{ post.title }}</div>
            <div class="info">
              <div class="sm-txt mg-rgt">{{ post.nickname }}</div> |
              <div class="sm-txt mg-bth">{{ dateFormat(post.created_at) }}</div> |
              <div class="sm-txt mg-bth">0 Comments</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="container">

    </div>
  </div>
</template>

<script lang="ts" setup>
/* eslint-disable */
import { onMounted, ref, Ref } from 'vue'
import RestUtils from '@/utils/rest-utils'
import StringUtils from '@/utils/string-utils'

const tabs = require('@/assets/data/tabs-info.json')

const posts : Ref<Array<any>> = ref([])

//filter
const dateFormat = (value:string): string => {
  return StringUtils.dateFormat(value)
}

const init = () => {
  RestUtils.get('/posts/list', { page: 'home' })
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
