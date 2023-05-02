<template>
    <div class="container">
        <div class="row flex-row">
            <div class="col-12">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Titolo: {{ project.title }}</h5>
                    <p class="card-text">Cliente: {{ project.customer }}</p>
                    <p class="card-text">Descrizione: {{ project.description }}</p>
                    <p class="card-text">URL: {{ project.url }}</p>
                    <p class="card-text">Stato: {{ project.status }}</p>
                  </div>
                </div>
            </div>
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
    width: 100%;
  }
  </style>
  