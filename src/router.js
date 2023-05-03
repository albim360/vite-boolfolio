import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/Home.vue'
import About from './components/About.vue'
import ProjectCard from './components/ProjectCard.vue'
import axios from 'axios';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/projects',
    name: 'Projects',
    component: {
      template: `
        <div class="container">
          <h1>Projects</h1>
          <div class="row">
            <div class="col-md-4" v-for="project in projects" :key="project.id">
              <project-card :project="project"></project-card>
            </div>
          </div>
        </div>
      `,
      components: {
        'project-card': ProjectCard
      },
      data() {
        return {
          projects: []
        }
      },
      mounted() {
        axios.get('http://localhost:8000/api/projects')
          .then(response => {
            this.projects = response.data.data
          })
          .catch(error => {
            console.log(error)
          })
      }
    }
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
