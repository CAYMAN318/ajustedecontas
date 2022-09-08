import { createRouter, createWebHistory } from 'vue-router'
import AdjustManager from '../views/AdjustManager'
import HomeView from '../views/HomeView.vue'
import InsertData from '../views/InsertData'
import EditData from '../views/EditData'
import PayCheck from '../views/PayCheck'
import DocDemonstrative from '../views/DocDemonstrative'
import SheetCalculator from '../views/SheetCalculator'

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/emajustedecotastodos',
    component: HomeView
  },
  {
    path: '/emajustedecotastodos',
    name: 'AdjustManager',
    component: AdjustManager
  },
  {
    path: '/inserirdados',
    name: 'InsertData',
    component: InsertData
  },
  {
    path: '/editardados/:qualificationId',
    name: 'EditData',
    component: EditData
  },
  {
    path: '/inserirdados/inserirvalores/:qualificationId',
    name: 'PayCheck',
    component: PayCheck
  },
  {
    path: '/inserirdados/demonstrativo/:qualificationId',
    name: 'DocDemonstrative',
    component: DocDemonstrative
  },
  {
    path: '/inserirdados/folhadecalculo/:qualificationId',
    name: 'SheetCalculator',
    component: SheetCalculator
  },
  
    {
    path: '/MainBusca',
    name: 'registro',
    component: () => import(/* webpackChunkName: "registro" */ '../views/MainBusca.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
