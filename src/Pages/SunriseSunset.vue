<template>
    <div class="py-10 bg-base-200">
      <div class="container mx-auto text-center">
        <h2 class="text-4xl font-bold mb-6">Sunrise and Sunset Times</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="card shadow-lg">
            <div class="card-body">
              <h3 class="card-title text-2xl">Sunrise</h3>
              <p class="text-lg">6:00 AM</p>
            </div>
          </div>
          <div class="card shadow-lg">
            <div class="card-body">
              <h3 class="card-title text-2xl">Sunset</h3>
              <p class="text-lg">6:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SunriseSunset',
  }
  </script>
  