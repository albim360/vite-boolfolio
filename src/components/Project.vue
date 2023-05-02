<template>
  <div>
    <ul>
      <li v-for="project in projects" :key="project.id">{{ project.title }}</li>
    </ul>
  </div>
</template>


<script>
import axios from 'axios';

export default {
  data() {
    return {
      projects: []
    };
  },
  created() {
    axios.get('http://127.0.0.1:8000/api/projects')
      .then(response => {
        this.projects = response.data.data;
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>
