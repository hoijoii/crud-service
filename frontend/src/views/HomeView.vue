<template>
  <div class="home">
    <div id="header">
      <div class="banner">
        
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
/* eslint-disable */
import { onMounted, ref, Ref } from 'vue'
import RestUtils from '@/utils/rest-utils'

const init = () => {
  RestUtils.get('/posts/list', null)
    .then((resp:any) => {
      console.log(resp.data)
    })
    .catch((err) => {
      console.error(err)
    })
}

onMounted(()=>{
  init()
})

</script>
