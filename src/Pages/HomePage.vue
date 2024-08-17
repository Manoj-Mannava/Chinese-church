<template>
  <div>
    <MainNavbar />
    
    <!-- Hero Section -->
    <section class="hero min-h-screen bg-cover bg-center flex items-center justify-center text-center animate-fade-in">
  <div class="hero-overlay bg-opacity-60"></div>
  <div class="hero-content max-w-2xl mx-auto text-white p-8 rounded-lg">
    <div class="flex justify-center space-x-10">
    <h1 class="text-6xl font-bold mb-6">Welcome to Chinese 7th Adventist Church</h1>
    <p class="text-lg mb-8">A place of worship and community for English and Chinese-speaking members.</p>
    
      <router-link to="/about" class="btn btn-primary hover:scale-105">Learn More</router-link>
      <router-link to="/sign-up" class="btn btn-primary hover:bg-blue-600 hover:text-white">Sign Up</router-link>
    </div>
  </div>
</section>



   
    <section class="bg-gray-200 py-4">
      <div class="container mx-auto text-center">
        <button class="btn btn-outline mx-2 hover:bg-gray-300">English</button>
        <button class="btn btn-outline mx-2 hover:bg-gray-300">中文</button>
      </div>
    </section>

    
    <section class="bg-white py-12">
      <div class="container mx-auto text-center">
        <h2 class="text-4xl font-bold mb-6">Our Mission</h2>
        <p class="text-lg leading-relaxed mx-auto max-w-2xl">To serve our community with love and compassion, bringing together English and Chinese-speaking members in a spirit of worship and fellowship.</p>
      </div>
    </section>

  
    <section class="bg-gray-100 py-12">
      <div class="container mx-auto text-center">
        <h2 class="text-4xl font-bold mb-10">Our Services</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div class="card p-6 bg-white rounded-lg shadow-lg">
            <h3 class="text-2xl font-semibold">Worship Services</h3>
            <p class="mt-4">Join us for worship services every weekend in both English and Chinese.</p>
            <router-link to="/services" class="btn btn-link mt-4">Learn More</router-link>
          </div>
          <div class="card p-6 bg-white rounded-lg shadow-lg">
            <h3 class="text-2xl font-semibold">Bible Study</h3>
            <p class="mt-4">Participate in our Bible study groups to deepen your understanding of the Scriptures.</p>
            <router-link to="/services" class="btn btn-link mt-4">Learn More</router-link>
          </div>
          <div class="card p-6 bg-white rounded-lg shadow-lg">
            <h3 class="text-2xl font-semibold">Community Outreach</h3>
            <p class="mt-4">Get involved in our community outreach programs and make a positive impact.</p>
            <router-link to="/services" class="btn btn-link mt-4">Learn More</router-link>
          </div>
        </div>
      </div>
    </section>

   
    <section class="bg-white py-12">
      <div class="container mx-auto text-center">
        <h2 class="text-4xl font-bold mb-8">Live Streaming</h2>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/PwxHvnK_sA0" frameborder="0" allowfullscreen class="mx-auto rounded-lg shadow-lg"></iframe>
      </div>
    </section>

    
    <section class="bg-gray-200 py-10 text-center">
      <div class="container mx-auto">
        <h2 class="text-4xl font-bold mb-4">Today's Sunrise and Sunset Times</h2>
        <p class="text-lg">Sunrise: 6:00 AM | Sunset: 6:00 PM</p>
      </div>
    </section>

    <!-- Upcoming Events -->
    <section class="bg-white py-12">
      <div class="container mx-auto">
        <h2 class="text-4xl font-bold text-center mb-8">Upcoming Events</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div class="event-card p-6 bg-gray-100 rounded-lg shadow-lg">
            <h3 class="text-2xl font-semibold">Event Title</h3>
            <p class="mt-4">Details about the upcoming event, including date, time, and location.</p>
          </div>
          <div class="event-card p-6 bg-gray-100 rounded-lg shadow-lg">
            <h3 class="text-2xl font-semibold">Event Title</h3>
            <p class="mt-4">Details about the upcoming event, including date, time, and location.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-blue-600 py-12 text-center text-white">
      <div class="container mx-auto">
        <h2 class="text-4xl font-bold mb-6">Get Involved</h2>
        <p class="text-lg mb-8">Support our mission and be a part of our community.</p>
        <router-link to="/giving" class="btn btn-outline-light mr-4">Donate Now</router-link>
        <router-link to="/sign-up" class="btn btn-outline-light">Join Us</router-link>
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
    AppFooter,
  }
}
</script>

<style scoped>
.hero {
  background: url('https://as1.ftcdn.net/v2/jpg/07/31/70/62/1000_F_731706268_7Vg51qmB4wrmPJ703ySDmQGTavB6oNHk.jpg') no-repeat center center/cover;
  position: relative;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
}

.card, .event-card {
  border-radius: 0.5rem;
  transition: transform 0.3s ease;
}

.card:hover, .event-card:hover {
  transform: translateY(-5px);
}

.btn-primary {
  background-color: #007BFF;
  color: #FFFFFF;
  padding: 0.75rem 1.5rem;
  font-size: 1.125rem;
  border-radius: 0.375rem;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.btn-outline-light {
  border: 2px solid #FFFFFF;
  color: #FFFFFF;
  padding: 0.75rem 1.5rem;
  font-size: 1.125rem;
  border-radius: 0.375rem;
  transition: all 0.3s ease;
}

.btn-outline-light:hover {
  background-color: #FFFFFF;
  color: #1E3A8A;
}

.btn-link {
  color: #007BFF;
  font-weight: bold;
}

.bg-blue-600 {
  background-color: #1E3A8A;
}

.hero-content {
  position: relative;
  z-index: 2;
}

.card:hover, .event-card:hover {
  transform: translateY(-5px);
}

/* Animation */
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 1s ease-in-out forwards;
}
</style>
