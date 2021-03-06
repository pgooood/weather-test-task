import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/scss/style.scss'
import 'bootstrap'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faSun, faMoon, faCloud, faCloudShowersHeavy, faSnowflake, faCloudSun, faCloudMoon,  faPlus, faSpinner} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faSun, faMoon, faCloud, faCloudShowersHeavy, faSnowflake, faCloudSun, faCloudMoon, faPlus, faSpinner)


const app = createApp(App)

app.use(createPinia())
app.use(router)

app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
