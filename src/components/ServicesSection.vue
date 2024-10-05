<template>
  <section id="services" class="py-16 bg-gray-50">
    <Navbar /> <!-- Include the Navbar component here -->
    <div class="container mx-auto text-center">
      <h2 class="text-4xl font-bold mb-10 text-gray-800">Our Services</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">

        <!-- SEO Service Card -->
        <div class="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <div class="flex justify-center mb-4">
            <i class="fas fa-search text-4xl text-teal-500"></i> <!-- SEO Icon -->
          </div>
          <h3 class="text-2xl font-semibold mb-2 text-teal-600">SEO</h3>
          <p class="text-gray-600">Optimize your website to rank higher in search engine results and drive more organic traffic.</p>
        </div>

        <!-- Digital Marketing Service Card -->
        <div class="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <div class="flex justify-center mb-4">
            <i class="fas fa-bullhorn text-4xl text-teal-500"></i> <!-- Digital Marketing Icon -->
          </div>
          <h3 class="text-2xl font-semibold mb-2 text-teal-600">Digital Marketing</h3>
          <p class="text-gray-600">Grow your business with targeted campaigns across social media, email, and digital ads.</p>
        </div>

        <!-- Web to App Solution Card -->
        <div class="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <div class="flex justify-center mb-4">
            <i class="fas fa-mobile-alt text-4xl text-teal-500"></i> <!-- Web to App Icon -->
          </div>
          <h3 class="text-2xl font-semibold mb-2 text-teal-600">Web to App</h3>
          <p class="text-gray-600">Transform your web platform into a mobile app for better engagement and reach.</p>
        </div>

        <!-- Web Development Service Card -->
        <div class="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <div class="flex justify-center mb-4">
            <i class="fas fa-code text-4xl text-teal-500"></i> <!-- Web Development Icon -->
          </div>
          <h3 class="text-2xl font-semibold mb-2 text-teal-600">Web Development</h3>
          <p class="text-gray-600">Create fast, responsive, and user-friendly websites tailored to your business needs.</p>
        </div>

        <!-- Android/Native App Development Service Card -->
        <div class="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <div class="flex justify-center mb-4">
            <i class="fas fa-android text-4xl text-teal-500"></i> <!-- App Development Icon -->
          </div>
          <h3 class="text-2xl font-semibold mb-2 text-teal-600">Android/Native App Development</h3>
          <p class="text-gray-600">Build powerful, custom mobile applications for Android and iOS platforms.</p>
        </div>

        <!-- Cybersecurity Service Card -->
        <div class="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <div class="flex justify-center mb-4">
            <i class="fas fa-shield-alt text-4xl text-teal-500"></i> <!-- Cybersecurity Icon -->
          </div>
          <h3 class="text-2xl font-semibold mb-2 text-teal-600">Cybersecurity</h3>
          <p class="text-gray-600">Protect your business from cyber threats with top-notch security solutions.</p>
        </div>

        <!-- IT Support Service Card -->
        <div class="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <div class="flex justify-center mb-4">
            <i class="fas fa-tools text-4xl text-teal-500"></i> <!-- IT Support Icon -->
          </div>
          <h3 class="text-2xl font-semibold mb-2 text-teal-600">Technical/IT Support</h3>
          <p class="text-gray-600">Reliable tech support services to keep your systems running smoothly.</p>
        </div>

        <!-- SaaS Service Card -->
        <div class="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <div class="flex justify-center mb-4">
            <i class="fas fa-cloud text-4xl text-teal-500"></i> <!-- SaaS Icon -->
          </div>
          <h3 class="text-2xl font-semibold mb-2 text-teal-600">SaaS Solutions</h3>
          <p class="text-gray-600">Develop and deploy custom SaaS products to streamline your operations.</p>
        </div>

        <!-- Cloud Computing Service Card -->
        <div class="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <div class="flex justify-center mb-4">
            <i class="fas fa-cloud-upload-alt text-4xl text-teal-500"></i> <!-- Cloud Computing Icon -->
          </div>
          <h3 class="text-2xl font-semibold mb-2 text-teal-600">Cloud Computing</h3>
          <p class="text-gray-600">Scalable cloud solutions to optimize your business operations and storage needs.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Navbar from './Navbar.vue'; // Ensure the path is correct

export default {
  name: 'ServicesSection',
  components: {
    Navbar
  }
};
</script>

<style scoped>
/* Add your custom styles for the services section */
</style>
