<template>
  <div class="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
    <h2 class="text-2xl font-bold mb-6 text-center">Sign In</h2>
    <form @submit.prevent="handleSubmit">
      <div class="mb-4">
        <label class="block text-gray-700">Email</label>
        <input v-model="form.email" type="email" class="w-full p-2 border border-gray-300 rounded mt-2" required>
      </div>
      <div class="mb-4">
        <label class="block text-gray-700">Password</label>
        <input v-model="form.password" type="password" class="w-full p-2 border border-gray-300 rounded mt-2" required>
      </div>
      <button type="submit" class="w-full bg-blue-500 text-white py-2 rounded mt-4">Sign In</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'SignIn',
  data() {
    return {
      form: {
        email: '',
        password: ''
      }
    };
  },
  methods: {
    async handleSubmit() {
      try {
        const response = await axios.post('Ikda kooda ivvu url/signin', this.form);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    }
  }
};
</script>
