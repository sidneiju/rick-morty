import Vue from 'vue'
import VueRouter from 'vue-router'
import SelectionView from '../views/SelectionView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'selection',
    component: SelectionView
  },
  {
    path: '/characters',
    name: 'characters',
    component: () => import('../views/CharactersView.vue'),
    children: [
      {
        path: ':characterId',
        name: 'character-details',
        props: true,
        component: () => import('../components/CharacterDetails.vue')
      }
    ]
  },
  {
    path: '/episodes',
    name: 'episodes',
    component: () => import('../views/EpisodesView.vue'),
    children: [
      {
        path: ':episodeId',
        name: 'episode-details',
        props: true,
        component: () => import('../components/EpisodeDetails.vue')
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
