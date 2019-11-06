import Vue from 'vue'
import App from './App.vue'

// new Vue({
//   render: function (createElement) {
//     return createElement(app)
//   }
// })

new Vue({
  render: h => h(app)
}).$mount('#app')

// 1. vue pjt 시작
// 2. app은 최상위 컴퍼넌트
// 3. html 의 app 태그한테 
