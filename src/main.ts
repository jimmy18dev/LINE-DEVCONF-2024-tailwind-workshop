import '../src/assets/styles/style.css'
import { createApp } from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faFaceSmile as farFaceSmile, faComments as farComments, faBookmark as farBookmark, faUser as farUser, faHeart as farHeart } from '@fortawesome/free-regular-svg-icons'

library.add(farFaceSmile, farComments, farBookmark, farUser, farHeart)

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
