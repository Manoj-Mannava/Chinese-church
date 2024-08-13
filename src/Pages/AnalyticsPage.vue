<template>
    <div class="py-10 bg-base-200">
      <div class="container mx-auto text-center">
        <h2 class="text-4xl font-bold mb-6">Traffic and Analytics</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="card shadow-lg">
            <div class="card-body">
              <h3 class="card-title text-2xl">Page Views</h3>
              <p class="text-lg">10,000</p>
            </div>
          </div>
          <div class="card shadow-lg">
            <div class="card-body">
              <h3 class="card-title text-2xl">Unique Visitors</h3>
              <p class="text-lg">5,000</p>
            </div>
          </div>
          <div class="card shadow-lg">
            <div class="card-body">
              <h3 class="card-title text-2xl">Average Session Duration</h3>
              <p class="text-lg">2 minutes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AnalyticsPage',
  }
  </script>
  