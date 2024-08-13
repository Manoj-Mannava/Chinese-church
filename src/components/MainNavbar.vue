<template>
    <nav class="bg-gray-800 p-4">
      <div class="container mx-auto flex justify-between items-center">
        <a href="#" class="text-white text-2xl font-bold">Chinese 7th Adventist Church</a>
        <ul class="flex space-x-4">
          <li><router-link to="/" class="text-white">Home</router-link></li>
          <li><router-link to="/about" class="text-white">About</router-link></li>
          <li><router-link to="/services" class="text-white">Services</router-link></li>
          <li><router-link to="/contact" class="text-white">Contact</router-link></li>
          <li><router-link to="/sign-in" class="text-white">Login</router-link></li>
          <li><LanguageToggle /></li>
        </ul>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'MainNavbar'
  }
  </script>
  