import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'




//bootstrap
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'

import "./styles.css" //main css file

createApp(App).use(store).use(router).mount('#app')
