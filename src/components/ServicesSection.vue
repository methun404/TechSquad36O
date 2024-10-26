<template>
  <section id="services" class="py-8 md:py-16 bg-gray-50">
    <Navbar />
    <div class="container mx-auto text-center px-4 md:px-0">
      <h2 class="text-2xl md:text-4xl font-bold mb-6 md:mb-10 text-gray-800">Our Services</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12">

        <!-- SEO Service Card -->
        <div class="bg-white p-6 md:p-8 rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
          <div class="flex justify-center mb-4">
            <i class="fas fa-search text-3xl md:text-4xl text-teal-500"></i>
          </div>
          <h3 class="text-xl md:text-2xl font-semibold mb-2 text-teal-600">SEO</h3>
          <p class="text-gray-600 text-sm md:text-base">Optimize your website to rank higher in search engine results and drive more organic traffic.</p>
        </div>

        <!-- Digital Marketing Service Card -->
        <div class="bg-white p-6 md:p-8 rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
          <div class="flex justify-center mb-4">
            <i class="fas fa-bullhorn text-3xl md:text-4xl text-teal-500"></i>
          </div>
          <h3 class="text-xl md:text-2xl font-semibold mb-2 text-teal-600">Digital Marketing</h3>
          <p class="text-gray-600 text-sm md:text-base">Grow your business with targeted campaigns across social media, email, and digital ads.</p>
        </div>

        <!-- Web to App Solution Card -->
        <div class="bg-white p-6 md:p-8 rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
          <div class="flex justify-center mb-4">
            <i class="fas fa-mobile-alt text-3xl md:text-4xl text-teal-500"></i>
          </div>
          <h3 class="text-xl md:text-2xl font-semibold mb-2 text-teal-600">Web to App</h3>
          <p class="text-gray-600 text-sm md:text-base">Transform your web platform into a mobile app for better engagement and reach.</p>
        </div>

        <!-- Web Development Service Card -->
        <div class="bg-white p-6 md:p-8 rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
          <div class="flex justify-center mb-4">
            <i class="fas fa-code text-3xl md:text-4xl text-teal-500"></i>
          </div>
          <h3 class="text-xl md:text-2xl font-semibold mb-2 text-teal-600">Web Development</h3>
          <p class="text-gray-600 text-sm md:text-base">Create fast, responsive, and user-friendly websites tailored to your business needs.</p>
        </div>

        <!-- Android/Native App Development Service Card -->
        <div class="bg-white p-6 md:p-8 rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
          <div class="flex justify-center mb-4">
            <i class="fas fa-android text-3xl md:text-4xl text-teal-500"></i>
          </div>
          <h3 class="text-xl md:text-2xl font-semibold mb-2 text-teal-600">Android/Native App Development</h3>
          <p class="text-gray-600 text-sm md:text-base">Build powerful, custom mobile applications for Android and iOS platforms.</p>
        </div>

        <!-- Cybersecurity Service Card -->
        <div class="bg-white p-6 md:p-8 rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
          <div class="flex justify-center mb-4">
            <i class="fas fa-shield-alt text-3xl md:text-4xl text-teal-500"></i>
          </div>
          <h3 class="text-xl md:text-2xl font-semibold mb-2 text-teal-600">Cybersecurity</h3>
          <p class="text-gray-600 text-sm md:text-base">Protect your business from cyber threats with top-notch security solutions.</p>
        </div>

        <!-- IT Support Service Card -->
        <div class="bg-white p-6 md:p-8 rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
          <div class="flex justify-center mb-4">
            <i class="fas fa-tools text-3xl md:text-4xl text-teal-500"></i>
          </div>
          <h3 class="text-xl md:text-2xl font-semibold mb-2 text-teal-600">Technical/IT Support</h3>
          <p class="text-gray-600 text-sm md:text-base">Reliable tech support services to keep your systems running smoothly.</p>
        </div>

        <!-- SaaS Service Card -->
        <div class="bg-white p-6 md:p-8 rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
          <div class="flex justify-center mb-4">
            <i class="fas fa-cloud text-3xl md:text-4xl text-teal-500"></i>
          </div>
          <h3 class="text-xl md:text-2xl font-semibold mb-2 text-teal-600">SaaS Solutions</h3>
          <p class="text-gray-600 text-sm md:text-base">Develop and deploy custom SaaS products to streamline your operations.</p>
        </div>

        <!-- Cloud Computing Service Card -->
        <div class="bg-white p-6 md:p-8 rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
          <div class="flex justify-center mb-4">
            <i class="fas fa-cloud-upload-alt text-3xl md:text-4xl text-teal-500"></i>
          </div>
          <h3 class="text-xl md:text-2xl font-semibold mb-2 text-teal-600">Cloud Computing</h3>
          <p class="text-gray-600 text-sm md:text-base">Scalable cloud solutions to optimize your business operations and storage needs.</p>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
import Navbar from './Navbar.vue';

export default {
  name: 'ServicesSection',
  components: {
    Navbar
  }
};
</script>

<style scoped>
.hover\:scale-105:hover {
  transform: scale(1.05);
}
</style>
