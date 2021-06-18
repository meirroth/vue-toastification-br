import { createApp } from 'vue'
import App from './App.vue'

import Toast from 'vue-toastification'
// Import the CSS or use your own!
import '@/assets/scss/_toastification.scss'
import 'vue-toastification/src/scss/index.scss'

const options = {
  transition: 'Vue-Toastification__fade',
  maxToasts: 3,
}

createApp(App).use(Toast, options).mount('#app')
