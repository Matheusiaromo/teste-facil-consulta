import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import FForm from '../views/FForm.vue'
import SForm from '../views/SForm.vue'
import TForm from '../views/TForm.vue'
import CadastroConcluido from '../views/CadastroConcluido.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home,
    children: [
      {
        path: '',
        name: "FForm",
        component: FForm
      },
      {
        path: 'pagina-2',
        name: "SForm",
        component: SForm
      }
      ,
      {
        path: 'pagina-3',
        name: "TForm",
        component: TForm
      },
      {
        path: 'cadastro-concluido',
        name: "CadastroConcluido",
        component: CadastroConcluido
      }
    ]
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
