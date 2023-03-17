/* eslint-disable */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const vClickOutside = require('click-outside-vue3')

createApp(App).use(router).use(vClickOutside).mount('#app')
