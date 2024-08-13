<template>
    <div class="py-10 bg-base-200">
      <div class="container mx-auto text-center">
        <h2 class="text-4xl font-bold mb-6">Video Content</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="card shadow-lg">
            <figure>
              <img src="https://via.placeholder.com/150" alt="Video 1" />
            </figure>
            <div class="card-body">
              <h3 class="card-title">Video Title 1</h3>
              <p>Description of Video 1</p>
            </div>
          </div>
          <div class="card shadow-lg">
            <figure>
              <img src="https://via.placeholder.com/150" alt="Video 2" />
            </figure>
            <div class="card-body">
              <h3 class="card-title">Video Title 2</h3>
              <p>Description of Video 2</p>
            </div>
          </div>
          <div class="card shadow-lg">
            <figure>
              <img src="https://via.placeholder.com/150" alt="Video 3" />
            </figure>
            <div class="card-body">
              <h3 class="card-title">Video Title 3</h3>
              <p>Description of Video 3</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'VideoContent',
  }
  </script>
  