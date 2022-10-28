import { createApp } from 'vue'
import App from './App.vue'
import mitt from 'mitt'


import "bootstrap/dist/css/bootstrap.min.css" // імпорт бутстрапа css з node_modules
import "bootstrap" // імпорт бутстрапа js з node_modules

const emitter = mitt()
const app = createApp(App)

import AppInput from "@/components/elements/AppInput";

app.component('AppInput',AppInput); // Реєстрація компонента глобально, щоб не
                                         // прописувати кожен раз імпорт у кожному компоненті
app.config.globalProperties.emitter = emitter
app.mount('#app') // Монтування нашого Інстанса (екземпрляра) у DOM
