import { createApp } from 'vue'
import App from './App.vue'
import router from './Router.js'

var app = createApp(App); 

app.config.globalProperties.$filters ={
    valorarDivisible(numero){
        if(numero % 2 == 0){
            return '<span style="color:green">'
        }else{
            return '<span style="color:red">'
        }
    },
    getOperacion(num1, num2) {
        return num1 + " * " + num2;
    },
    getMultiplicacion(num1, num2) {
        return num1 * num2;
    }
}

app.use(router).mount('#app')
