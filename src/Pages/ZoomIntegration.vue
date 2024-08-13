<template>
    <div class="py-10 bg-base-200">
      <div class="container mx-auto text-center">
        <h2 class="text-4xl font-bold mb-6">Join Our Zoom Meetings</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="card shadow-lg">
            <div class="card-body">
              <h3 class="card-title text-2xl">Sunday Service</h3>
              <p class="text-lg">Meeting ID: 123-456-789</p>
              <p class="text-lg">Password: sunday</p>
            </div>
          </div>
          <div class="card shadow-lg">
            <div class="card-body">
              <h3 class="card-title text-2xl">Wednesday Bible Study</h3>
              <p class="text-lg">Meeting ID: 987-654-321</p>
              <p class="text-lg">Password: wednesday</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ZoomIntegration',
  }
  </script>
  