import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { Apis } from './api/Apis'
import router from './router'
import ElementPlus from 'element-plus'
import * as ElComp from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import pyzChartsVue3 from 'pyz-charts-vue3'


// ElementPlus.Dialog.props.lockScroll.default = false;
const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.config.globalProperties = <any & Record<string, any>> {Apis, ...ElComp}
app.use(router)
// ElementUI.Dialog.props.lockScroll.default = false;
.use(ElementPlus)
.use(pyzChartsVue3)
.mount('#app');
