import { createApp } from 'vue'
import App from './App.vue'
import './_preflight.css'

createApp(App).mount('#app')

function changeTextContent(element: HTMLTitleElement | Element | null) {
  if (!element) return

  element.textContent = import.meta.env.VITE_PROJECT_NAME
}

const title = document.querySelector('title')
changeTextContent(title)

document.querySelector('#app')?.insertAdjacentHTML('afterbegin', '<h1 class="sr-only"></h1>')
const heading = document.querySelector('.sr-only')
changeTextContent(heading)
