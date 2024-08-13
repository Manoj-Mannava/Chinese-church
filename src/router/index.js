import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/Pages/HomePage.vue';
import AboutPage from '@/Pages/AboutPage.vue';
import ServicesPage from '@/Pages/ServicesPage.vue';
import ContactPage from '@/Pages/ContactPage.vue';
import Giving from '@/Pages/GivingChar.vue';
import CMSContent from '@/Pages/CMSContent.vue';
import LiveStreaming from '@/Pages/LiveStreaming.vue';
import OfflineContent from '@/Pages/OfflineContent.vue';
import PushNotifications from '@/Pages/PushNotifications.vue';
import SignIn from '@/Pages/SignIn.vue';
import SocialMedia from '@/Pages/SocialMedia.vue';
import SunriseSunset from '@/Pages/SunriseSunset.vue';
import VideoContent from '@/Pages/VideoContent.vue';
import ZoomIntegration from '@/Pages/ZoomIntegration.vue';
import Analytics from '@/Pages/AnalyticsPage.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomePage
    },
    {
        path: '/about',
        name: 'About',
        component: AboutPage
    },
    {
        path: '/services',
        name: 'Services',
        component: ServicesPage
    },
    {
        path: '/contact',
        name: 'Contact',
        component: ContactPage
    },
{ path: '/sunrise-sunset', name: 'SunriseSunset', component: SunriseSunset },
  { path: '/video-content', name: 'VideoContent', component: VideoContent },
  { path: '/live-streaming', name: 'LiveStreaming', component: LiveStreaming },
  { path: '/zoom-integration', name: 'ZoomIntegration', component: ZoomIntegration },
  { path: '/sign-in', name: 'SignIn', component: SignIn },
  { path: '/giving', name: 'Giving', component: Giving },
  { path: '/social-media', name: 'SocialMedia', component: SocialMedia },
  { path: '/analytics', name: 'Analytics', component: Analytics },
  { path: '/push-notifications', name: 'PushNotifications', component: PushNotifications },
  { path: '/offline-content', name: 'OfflineContent', component: OfflineContent },
  { path: '/cms-content', name: 'CMSContent', component: CMSContent },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;
