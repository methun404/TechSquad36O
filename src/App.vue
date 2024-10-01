<template>
  <div>
    <Navbar />
    <HeroSection />
    <ServicesSection />
    <FreeStrategySession />
    <SeoToolsSection />
    <AchievementsSection />
    <PartnersSection />
    <WorkDoneSection />
    <Footer />
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
/* Add any additional global styles here */
</style>
