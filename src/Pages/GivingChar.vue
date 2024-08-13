<template>
    <div class="min-h-screen flex items-center justify-center bg-base-200">
      <div class="card w-full max-w-lg shadow-lg bg-white">
        <div class="card-body">
          <h2 class="text-4xl font-bold text-center mb-6">Giving</h2>
          <form>
            <div class="mb-4">
              <label class="block text-left" for="name">Name:</label>
              <input type="text" id="name" class="input input-bordered w-full" required>
            </div>
            <div class="mb-4">
              <label class="block text-left" for="email">Email:</label>
              <input type="email" id="email" class="input input-bordered w-full" required>
            </div>
            <div class="mb-6">
              <label class="block text-left" for="amount">Amount:</label>
              <input type="number" id="amount" class="input input-bordered w-full" required>
            </div>
            <div>
              <button type="submit" class="btn btn-primary w-full">Donate</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'GivingChar',
  }
  </script>
  