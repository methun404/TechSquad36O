<template>
  <div>
    <Navbar class="animate__animated animate__fadeInDown" />
    <HeroSection class="animate__animated animate__fadeIn animate__delay-1s" />
    <ServicesSection class="animate__animated animate__fadeInUp animate__delay-2s" />
    <SeoToolsSection class="animate__animated animate__fadeInUp animate__delay-3s" />
    <AchievementsSection class="animate__animated animate__zoomIn animate__delay-4s" />
    <WorkDoneSection class="animate__animated animate__fadeInUp animate__delay-5s" />
    <FreeStrategySession class="animate__animated animate__fadeInUp animate__delay-6s" />
    <Footer class="animate__animated animate__fadeInUp animate__delay-7s" />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import HeroSection from './components/HeroSection.vue';
import ServicesSection from './components/ServicesSection.vue';
import FreeStrategySession from './components/FreeStrategySession.vue';
import SeoToolsSection from './components/SeoToolsSection.vue';
import AchievementsSection from './components/AchievementsSection.vue';
import PartnersSection from './components/PartnersSection.vue';
import WorkDoneSection from './components/WorkDoneSection.vue';
import Footer from './components/Footer.vue';

export default {
  components: {
    Navbar,
    HeroSection,
    ServicesSection,
    FreeStrategySession,
    SeoToolsSection,
    AchievementsSection,
    PartnersSection,
    WorkDoneSection,
    Footer
  }
};
</script>

<style>
html {
  scroll-behavior: smooth; /* Enables smooth scrolling */
}

/* Add any additional global styles here */
</style>
