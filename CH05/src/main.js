//import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
//import FirstChild from './components/FirstChild.vue';
const app = createApp(App);
app.provide('globalMessage','hello!');//키(key): globalMessage, 값(value):hello!
//app.component('FirstChild',FirstChild);//전역등록
app.mount('#app');
