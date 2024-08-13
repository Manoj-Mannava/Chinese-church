<template>
    <div class="min-h-screen flex items-center justify-center bg-base-200">
      <div class="card w-full max-w-sm shadow-lg bg-white">
        <div class="card-body">
          <h2 class="text-4xl font-bold text-center mb-6">Sign In</h2>
          <form>
            <div class="mb-4">
              <label class="block text-left" for="email">Email:</label>
              <input type="email" id="email" class="input input-bordered w-full" required>
            </div>
            <div class="mb-6">
              <label class="block text-left" for="password">Password:</label>
              <input type="password" id="password" class="input input-bordered w-full" required>
            </div>
            <div>
              <button type="submit" class="btn btn-primary w-full">Sign In</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SignIn',
  }
  </script>
  