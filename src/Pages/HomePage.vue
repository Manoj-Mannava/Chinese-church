<template>
  <div>
    <MainNavbar />
    <section class="hero min-h-screen bg-base-200">
      <div class="hero-content text-center">
        <div class="max-w-md">
          <h1 class="text-5xl font-bold">Welcome to Chinese 7th Adventist Church</h1>
          <p class="py-6">A place of worship and community for English and Chinese-speaking members.</p>
          <button class="btn btn-primary">Learn More</button>
        </div>
      </div>
    </section>
    <section class="bg-white py-10">
      <div class="container mx-auto">
        <div class="text-center mb-10">
          <h2 class="text-4xl font-bold">Our Mission</h2>
          <p class="text-lg mt-4">To serve our community with love and compassion, bringing together English and Chinese-speaking members in a spirit of worship and fellowship.</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="card shadow-lg">
            <div class="card-body">
              <h3 class="card-title text-2xl">Worship Services</h3>
              <p>Join us for worship services every weekend in both English and Chinese.</p>
            </div>
          </div>
          <div class="card shadow-lg">
            <div class="card-body">
              <h3 class="card-title text-2xl">Bible Study</h3>
              <p>Participate in our Bible study groups to deepen your understanding of the Scriptures.</p>
            </div>
          </div>
          <div class="card shadow-lg">
            <div class="card-body">
              <h3 class="card-title text-2xl">Community Outreach</h3>
              <p>Get involved in our community outreach programs and make a positive impact.</p>
            </div>
          </div>
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
  name: 'HomePage',
  components: {
    MainNavbar,
    AppFooter
  }
}
</script>
