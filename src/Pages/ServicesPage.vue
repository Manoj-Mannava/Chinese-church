<template>
  <div>
    <MainNavbar />
    <section class="min-h-screen bg-base-200 py-10">
      <div class="container mx-auto">
        <h1 class="text-5xl font-bold mb-6">Our Services</h1>
        <p class="text-lg">
          We offer a variety of services to support our members and the community, including worship services, Bible study groups, and community outreach programs.
        </p>
        <div class="mt-8">
          <h2 class="text-3xl font-bold">Worship Services</h2>
          <p class="mt-4 text-lg">
            Join us for worship services every weekend in both English and Chinese. Our services are designed to be uplifting and inspirational, providing a space for spiritual growth and community connection.
          </p>
        </div>
        <div class="mt-8">
          <h2 class="text-3xl font-bold">Bible Study Groups</h2>
          <p class="mt-4 text-lg">
            Our Bible study groups meet regularly to explore the Scriptures and discuss their relevance to our lives today. Whether you are new to the Bible or have been studying it for years, you will find a welcoming and supportive group here.
          </p>
        </div>
        <div class="mt-8">
          <h2 class="text-3xl font-bold">Community Outreach</h2>
          <p class="mt-4 text-lg">
            We are committed to making a positive impact in our community through various outreach programs. From food drives to volunteering at local shelters, there are many ways to get involved and make a difference.
          </p>
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
  name: 'ServicesPage',
  components: {
    MainNavbar,
    AppFooter
  }
}
</script>
