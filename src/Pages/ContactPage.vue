<template>
  <div>
    <MainNavbar />
    <section class="min-h-screen bg-base-200 py-10">
      <div class="container mx-auto">
        <h1 class="text-5xl font-bold mb-6">Contact Us</h1>
        <p class="text-lg">
          We would love to hear from you! Please reach out with any questions, comments, or prayer requests.
        </p>
        <form class="mt-8 space-y-6">
          <div>
            <label class="block text-left" for="name">Name:</label>
            <input type="text" id="name" class="input input-bordered w-full" required>
          </div>
          <div>
            <label class="block text-left" for="email">Email:</label>
            <input type="email" id="email" class="input input-bordered w-full" required>
          </div>
          <div>
            <label class="block text-left" for="message">Message:</label>
            <textarea id="message" class="textarea textarea-bordered w-full" required></textarea>
          </div>
          <div>
            <button type="submit" class="btn btn-primary w-full">Send Message</button>
          </div>
        </form>
      </div>
    </section>
    <AppFooter />
  </div>
</template>

<script>
import MainNavbar from '../components/MainNavbar.vue';
import AppFooter from '../components/AppFooter.vue';

export default {
  name: 'ContactPage',
  components: {
    MainNavbar,
    AppFooter
  }
}
</script>
