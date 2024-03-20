<template>
    <main>
        <div class="container">
            <div class="card">
              <div class="card-img">
                <slot name="cardImg"></slot>
              </div>
              <div class="card-body">
                <slot name="cardHeader"></slot>
                <slot name="cardBody"></slot>
              </div>
            </div>
        </div>
    </main>
  </template>
  
  <script>
  export default {
    name: 'CardVue'
  };
  </script>
  
  <style scoped>
  main {
    background-image: url('https://iili.io/JXSjXsV.jpg');
    background-size: cover; 
    background-position: center;
    min-height: 100vh; 
    border-radius: 30px;
    margin-top: 20px; 
    margin-bottom: 20px; 
  }
  
  .container {
    margin-top: 20px;
    margin-bottom: 20px;
  }
  
  .card-container {
    display: flex;
    flex-wrap: wrap;  
    justify-content: center;
  }
  
  .card {
    background-color: rgba(0, 0, 0, 0.377); 
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    width: calc(50% - 10px);
    padding: 30px;  
    box-sizing: border-box;
    margin: 0 auto;
  }
  
  .card-body {
    padding: 20px;
  }
  
  @media (max-width: 600px) {
    .card {
      width: 100%;
    }
  }
  </style>
  
  


  
  
  
  