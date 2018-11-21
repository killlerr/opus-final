import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'

import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faComments } from '@fortawesome/free-solid-svg-icons'
import { faCommentAlt } from '@fortawesome/free-solid-svg-icons'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
import { faMapPin } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCoffee)
library.add(faComments)
library.add(faCommentAlt)
library.add(faExclamationTriangle)
library.add(faMapPin)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false