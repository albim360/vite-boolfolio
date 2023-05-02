<template>
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{{ project.title }}</h5>
        <p class="card-text">{{ project.customer }}</p>
        <p class="card-text">{{ project.description }}</p>
        <p class="card-text">{{ project.url }}</p>
        <p class="card-text">{{ project.status }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      project: {
        type: Object,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .card {
    margin-bottom: 20px;
  }
  </style>
  