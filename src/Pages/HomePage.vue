<template>
  <div>
    <MainNavbar />
    
    

    <section class="hero min-h-screen bg-base-200 bg-cover bg-center">
      <div class="hero-content text-center text-white p-8 bg-black bg-opacity-50 rounded-lg">
        <div class="max-w-md mx-auto">
          <h1 class="text-5xl font-bold mb-4">Welcome to Chinese 7th Adventist Church</h1>
          <p class="py-6 text-lg">A place of worship and community for English and Chinese-speaking members.</p>
          <div>
            <router-link to="/about" class="btn btn-primary">Learn More</router-link>
            <router-link to="/sign-up" class="btn btn-secondary ml-4">Sign Up</router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Language Selection -->
    <section class="bg-gray-100 py-4">
      <div class="container mx-auto text-center">
        <button class="btn btn-outline mx-2">English</button>
        <button class="btn btn-outline mx-2">中文</button>
      </div>
    </section>

    <!-- Our Mission Section -->
    <section class="bg-white py-10">
      <div class="container mx-auto text-center mb-10">
        <h2 class="text-4xl font-bold">Our Mission</h2>
        <p class="text-lg mt-4">To serve our community with love and compassion, bringing together English and Chinese-speaking members in a spirit of worship and fellowship.</p>
      </div>
    </section>

    <!-- Key Services Section -->
    <section class="bg-gray-200 py-10">
      <div class="container mx-auto">
        <div class="text-center mb-10">
          <h2 class="text-4xl font-bold">Our Services</h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="card shadow-lg p-6 bg-white">
            <h3 class="text-2xl font-semibold">Worship Services</h3>
            <p class="mt-4">Join us for worship services every weekend in both English and Chinese.</p>
            <router-link to="/services" class="btn btn-link mt-4">Learn More</router-link>
          </div>
          <div class="card shadow-lg p-6 bg-white">
            <h3 class="text-2xl font-semibold">Bible Study</h3>
            <p class="mt-4">Participate in our Bible study groups to deepen your understanding of the Scriptures.</p>
            <router-link to="/services" class="btn btn-link mt-4">Learn More</router-link>
          </div>
          <div class="card shadow-lg p-6 bg-white">
            <h3 class="text-2xl font-semibold">Community Outreach</h3>
            <p class="mt-4">Get involved in our community outreach programs and make a positive impact.</p>
            <router-link to="/services" class="btn btn-link mt-4">Learn More</router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Live Streaming Section -->
    <section class="bg-white py-10">
      <div class="container mx-auto text-center">
        <h2 class="text-4xl font-bold mb-6">Live Streaming</h2>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/PwxHvnK_sA0" frameborder="0" allowfullscreen class="mx-auto"></iframe>
      </div>
    </section>

    <!-- Sunrise/Sunset Times -->
    <section class="bg-gray-100 py-10 text-center">
      <h2 class="text-4xl font-bold mb-4">Today's Sunrise and Sunset Times</h2>
      <p class="text-lg">Sunrise: 6:00 AM | Sunset: 6:00 PM</p>
    </section>

    <!-- Upcoming Events -->
    <section class="bg-white py-10">
      <div class="container mx-auto">
        <h2 class="text-4xl font-bold text-center mb-6">Upcoming Events</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="event-card bg-gray-200 p-6 shadow-lg">
            <h3 class="text-2xl font-semibold">Event Title</h3>
            <p class="mt-4">Details about the upcoming event, including date, time, and location.</p>
          </div>
          <div class="event-card bg-gray-200 p-6 shadow-lg">
            <h3 class="text-2xl font-semibold">Event Title</h3>
            <p class="mt-4">Details about the upcoming event, including date, time, and location.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="bg-blue-500 py-10 text-center text-white">
      <h2 class="text-4xl font-bold mb-4">Get Involved</h2>
      <p class="text-lg mb-6">Support our mission and be a part of our community.</p>
      <router-link to="/giving" class="btn btn-light">Donate Now</router-link>
      <router-link to="/sign-up" class="btn btn-light ml-4">Join Us</router-link>
    </section>

    <AppFooter />
  </div>
</template>

<script>
import MainNavbar from '../components/MainNavbar.vue';
import AppFooter from '../components/AppFooter.vue';
import 'swiper/swiper-bundle.css';

export default {
  name: 'HomePage',
  components: {
    MainNavbar,
    AppFooter,
  }
}
</script>

<style scoped>
.hero {
  background-size: cover;
  background-position: center;
}

.hero-content {
  padding: 2rem; 
  background: rgba(0, 0, 0, 0.5); 
  border-radius: 0.5rem; 
}
.card, .event-card {
  border-radius: 0.5rem;
}
.btn-primary {
  background-color: #007BFF;
  color: #FFFFFF;
}
.btn-secondary {
  background-color: #6C757D;
  color: #FFFFFF;
}
.btn-outline {
  border: 1px solid #007BFF;
  color: #007BFF;
}
.btn-light {
  background-color: #FFFFFF;
  color: #007BFF;
}
</style>
