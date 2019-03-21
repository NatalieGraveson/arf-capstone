import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import ELanding from './views/EmployeeViews/ELanding.vue'
import Incidents from './views/EmployeeViews/Incidents.vue'
import Owners from './views/EmployeeViews/Owners.vue'
import Profile from './views/EmployeeViews/Profile.vue'
import Registration from './views/EmployeeViews/Registration.vue'
import Billing from './views/EmployeeViews/Billing.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: "*",
      redirect: '/'
    },
    {
      path: '/ELanding',
      name: 'ELanding',
      component: ELanding
    },
    {
      path: '/Incidents',
      name: 'Incidents',
      component: Incidents
    },
    {
      path: '/Owners',
      name: 'Owners',
      component: Owners
    },
    {
      path: '/Profile/:id',
      name: 'Profile',
      props: true,
      component: Profile
    },
    {
      path: '/Registration',
      name: 'Registration',
      component: Registration
    },
    {
      path: '/Billing',
      name: 'Billing',
      component: Billing
    }
  ]
})