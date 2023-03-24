<template>
  <div class="card">
    <div class="attach">
      <img src="@/assets/images/sky.png">
    </div>
    
    <div class="post">
      <div class="post-title">{{ post.title }}</div>
      <div class="post-info">
        <div class="al-cen">
          <span class="material-icons icon">
            calendar_today
          </span>
          {{ setDateFormat(post.created_at) }}
        </div>
        <div class="mg-lft-a al-cen">
          <span class="material-icons icon">
            chat_bubble_outline
          </span>
          {{ post.comment_cnt }}
        </div>
      </div>
      <div class="post-content">{{ post.content }}</div>
      <div class="post-bottom">
        <div class="more al-cen">더 읽기 <span class="material-icons icon">east</span></div>
        <div class="mg-lft-a">
          <span class="material-icons icon">
            folder_open
          </span>
          {{ post.category_name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { ref, Ref, defineProps } from "vue"
import RestUtils from "@/utils/rest-utils";
import StringUtils from "@/utils/string-utils";

const props = defineProps({
  post: {
    Type: Object,
    default: {
      post_id: 0,
      title: '',
      content:'',
      poster: '',
      created_at: '',
      category_name: '',
      view_count: 0,
      comment_cnt: 0,
    }
  }
});

const setDateFormat = (date: string | Date):string => {
  return StringUtils.dateFormat(date)
}

</script>