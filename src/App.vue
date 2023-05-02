<template>
  <div class="container">
    <h1>Projects</h1>
    <div class="row">
      <div class="col-md-4" v-for="project in projects" :key="project.id">
        <project-card :project="project"></project-card>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import ProjectCard from './components/ProjectCard.vue';

export default {
  components: {
    ProjectCard,
  },
  data() {
    return {
      projects: [],
    };
  },
  mounted() {
    axios.get('http://127.0.0.1:8000/api/projects').then(response => {
      console.log(response.data)
    })

  },
};
</script>

<style>
.container {
  margin-top: 30px;
}
</style>
