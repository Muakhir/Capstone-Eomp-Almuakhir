<template>
    <div class="card">
      <div class="card-img">
        <slot name="cardImg"></slot>
      </div>
      <div class="card-body">
        <slot name="cardHeader"></slot>
        <slot name="cardBody"></slot>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CardVue'
  };
  </script>
  
  <style scoped>
    .card {
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px; 
   }
  
  .card-img {
    width: 300px;
  }
  
  .card-body {
    padding: 20px;
  }
  </style>