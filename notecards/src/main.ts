import { createApp } from 'vue'
import VueAuth0Plugin from 'vue-auth0-plugin';
import App from './App.vue'
import router from './router'
import store from './store'

const app  = createApp(App)
app.use(VueAuth0Plugin, {
    "domain": "notecards.us.auth0.com",
    "client_id": "HkambWde0HmEJBd2mDR9QMjFUu6utLA4",
    "redirect_uri": "http://localhost:8080/"
});
app.use(store)
app.use(router)
app.mount('#app')
