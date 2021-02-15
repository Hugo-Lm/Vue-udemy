import { createApp } from 'vue';
import App from './App.vue'

import TheHeader from './components/TheHeader.vue'
import BaseCard from './components/BaseCard.vue'
import ErrorMessage from './components/ErrorMessage.vue'

const app = createApp(App)
app.component('the-header', TheHeader)
app.component('base-card', BaseCard)
app.component('error-message', ErrorMessage)

app.mount('#app');
