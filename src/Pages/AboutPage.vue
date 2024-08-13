<template>
  <div>
    <MainNavbar />
    <section class="min-h-screen bg-base-200 py-10">
      <div class="container mx-auto">
        <h1 class="text-5xl font-bold mb-6">About Us</h1>
        <p class="text-lg">
          The Chinese 7th Adventist Church is dedicated to serving the community with love and compassion.
          Our mission is to bring together English and Chinese-speaking members in a spirit of worship and fellowship.
        </p>
        <div class="mt-8">
          <h2 class="text-3xl font-bold">Our History</h2>
          <p class="mt-4 text-lg">
            Founded in 1950, our church has been a beacon of hope and faith for the Chinese community. Over the years, we have expanded our services to include English-speaking members, creating a diverse and inclusive environment for all.
          </p>
        </div>
        <div class="mt-8">
          <h2 class="text-3xl font-bold">Our Values</h2>
          <ul class="list-disc list-inside mt-4 text-lg">
            <li>Faith</li>
            <li>Community</li>
            <li>Compassion</li>
            <li>Service</li>
          </ul>
        </div>
      </div>
    </section>
    <AppFooter />
  </div>
</template>

<script>
import MainNavbar from '../components/MainNavbar.vue';
import AppFooter from '../components/AppFooter.vue';

export default {
  name: 'AboutPage',
  components: {
    MainNavbar,
    AppFooter
  }
}
</script>
