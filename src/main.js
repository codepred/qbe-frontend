import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import EasyDataTable from 'vue3-easy-data-table';
import 'vue3-easy-data-table/dist/style.css';
import './style.css'

createApp(App).mount('#app')
        .component(EasyDataTable)

