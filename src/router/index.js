import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Tarefas from '../views/Tarefas.vue'
import TarefasFormulario from '../views/TarefasFormulario.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/tarefas-formulario',
    name: 'TarefasFormulario',
    component: TarefasFormulario
    
  },
  {
    path: '/tarefas',
    name: 'Tarefas',
    component: Tarefas
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


export default router
