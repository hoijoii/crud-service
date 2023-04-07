<template>
  <div class="home">
    <div id="header">
      <!-- <div class="slider">
        <div class="slides">
          <div id="slide-1"><img class="slide" src="https://preview.colorlib.com/theme/revive/img/banner/b1.jpg.webp"></div>
          <div id="slide-2"><img class="slide" src="https://preview.colorlib.com/theme/revive/img/banner/b2.jpg.webp"></div>
          <div id="slide-3"><img class="slide" src="https://preview.colorlib.com/theme/revive/img/banner/b1.jpg.webp"></div>
        </div>
        <div class="slide-page">
          <a href="#slide-1">1</a>
          <a href="#slide-2">2</a>
          <a href="#slide-3">3</a>
        </div>
        
      </div> -->

      <!-- <div class="banner">
        <span class="material-icons lft-arrow">
          arrow_back_ios
        </span>
        <div v-for="post in posts" :key="post.id" class="preview">
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
        <span class="material-icons rgt-arrow">
        arrow_forward_ios
        </span>
      </div> -->
    </div>
    <div id="container" class="home-grid">
      <div class="main">
        asdf
      </div>
      <div class="side">
        
      </div>
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
