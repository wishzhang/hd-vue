# hd-vue

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run dev
```

### Compiles and minifies for production
```
npm run build
```

### 引入hd-vue
```
// 基于vue和element-ui,cdn引入也可以
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';

// 引入hd-vue
import 'hd-vue/lib/hd-vue.min.css';
import HDVUE from "hd-vue";
Vue.use(HDVUE);

Vue.use(ElementUI);

new Vue({
  el: '#app',
  render: h => h(App)
});
```
