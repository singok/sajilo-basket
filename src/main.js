import './assets/css/style.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific solid icons */
import { faHeart, faCartShopping, faUser, faBars, faGreaterThan, faStar } from '@fortawesome/free-solid-svg-icons'

import { faYoutube, faSquareFacebook, faSquareInstagram } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add([faHeart, faCartShopping, faUser, faYoutube, faSquareFacebook, faSquareInstagram, faBars, faGreaterThan, faStar])

const app = createApp(App)  
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)

app.mount('#app')
