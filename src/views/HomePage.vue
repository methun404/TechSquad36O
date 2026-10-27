<template>
  <div class="scroll-container">
    <Navbar />
    <HeroSection />
    <ServicesSection />
    <SeoToolsSection />
    <OurProcess />
    <BlogResourcesSection />
    <FreeStrategySession />
    <AboutUs />
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import HeroSection from "@/components/HeroSection.vue";
import ServicesSection from "@/components/ServicesSection.vue";
import SeoToolsSection from "@/components/SeoToolsSection.vue";
import OurProcess from "@/components/OurProcess.vue";
import BlogResourcesSection from "@/components/BlogResourcesSection.vue";
import FreeStrategySession from "@/components/FreeStrategySession.vue";
import AboutUs from "@/components/AboutUs.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: 'HomePage',
  components: {
    Navbar,
    HeroSection,
    ServicesSection,
    SeoToolsSection,
    OurProcess,
    BlogResourcesSection,
    FreeStrategySession,
    AboutUs,
    Footer,
  },
};
</script>

<style scoped>
/* Scoped styles for homepage container */
.scroll-container {
  min-height: 100vh;
}
</style>
