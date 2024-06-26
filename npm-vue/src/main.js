//import './assets/main.css'

import { createApp, h } from 'vue'
//import App from './App.vue'

//createApp(App).mount('#app')

createApp({
    data() {
        return{
            message: 'Hello, Vue!',
        };
    },
    render() { //data와 method 에 정의한 속성 사용
        return h('div', [
            h('p',this.message),
            h('button', { onClick: this.reverse }, 'Reverse'),
        ]);
    },
}).mount('#app');
