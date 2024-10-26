<template>
  <div>
    <!-- Navbar with fade-down animation -->
    <Navbar />

    <!-- Hero Section with fade-in animation -->
    <HeroSection />

    <!-- Services Section with slide-in animation -->
    <ServicesSection />

    <!-- SEO Tools Section with slide-in animation -->
    <SeoToolsSection />

    <!-- Our Process Section with slide-in animation -->
    <OurProcess />





    <!-- Blog Resources Section for helpful content -->
    <BlogResourcesSection />

    <!-- Free Strategy Session with slide-in animation -->
    <FreeStrategySession />

    <!-- About Us Section to build trust -->
    <AboutUs />

    <!-- Footer with fade-in animation -->
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
import AboutUs from "./components/AboutUs.vue";
import OurProcess from "./components/OurProcess.vue";
import BlogResourcesSection from "./components/BlogResourcesSection.vue";

export default {
  components: {
    Navbar,
    HeroSection,
    ServicesSection,
    SeoToolsSection,
    OurProcess,
    AchievementsSection,
    PartnersSection,
    WorkDoneSection,
    BlogResourcesSection,
    FreeStrategySession,
    AboutUs,
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
