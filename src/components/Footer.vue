<template>
  <footer class="bg-gradient-to-r from-[#213A57] to-[#0B6477] mt-4 text-white py-8">
    <div class="container mx-auto px-4">
      <!-- Brand Name & Description -->
      <div class="mb-6 text-center md:text-left">
        <h2 class="text-2xl md:text-3xl font-bold">TechSquad360</h2>
        <p class="text-sm mt-1 text-gray-200">Your trusted partner in digital transformation and innovative tech solutions.</p>
      </div>

      <!-- Main Content Area -->
      <div class="grid gap-6 md:gap-8 md:grid-cols-3 text-center md:text-left">
        <!-- Quick Links -->
        <div>
          <h3 class="text-base md:text-lg font-semibold mb-3 text-teal-300">Quick Links</h3>
          <ul class="space-y-2">
            <li><router-link to="/" class="text-sm hover:text-teal-400 transition-colors">Home</router-link></li>
            <li><router-link to="/about" class="text-sm hover:text-teal-400 transition-colors">About Us</router-link></li>
            <li><router-link to="/services" class="text-sm hover:text-teal-400 transition-colors">Services</router-link></li>
            <li><router-link to="/contact" class="text-sm hover:text-teal-400 transition-colors">Contact</router-link></li>
          </ul>
        </div>

        <!-- Services Offered -->
        <div>
          <h3 class="text-base md:text-lg font-semibold mb-3 text-teal-300">Our Services</h3>
          <ul class="space-y-1 text-sm text-gray-200">
            <li>SEO Optimization</li>
            <li>Digital Marketing</li>
            <li>Web to App Conversion</li>
            <li>Web Development</li>
            <li>Android & Native App Development</li>
            <li>Cybersecurity & Risk Management</li>
            <li>Technical & IT Support</li>
            <li>SaaS Solutions</li>
            <li>Cloud Computing</li>
          </ul>
        </div>

        <!-- Social Media Links -->
        <div>
          <h3 class="text-base md:text-lg font-semibold mb-3 text-teal-300">Connect With Us</h3>
          <p class="text-xs text-gray-200 mb-3">Follow us across our official social channels:</p>
          <div class="flex justify-center md:justify-start space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" class="hover:text-teal-400 transition-colors" aria-label="Facebook">
              <i class="fab fa-facebook-f text-xl"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" class="hover:text-teal-400 transition-colors" aria-label="Twitter">
              <i class="fab fa-twitter text-xl"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" class="hover:text-teal-400 transition-colors" aria-label="LinkedIn">
              <i class="fab fa-linkedin-in text-xl"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" class="hover:text-teal-400 transition-colors" aria-label="Instagram">
              <i class="fab fa-instagram text-xl"></i>
            </a>
          </div>
        </div>
      </div>

      <!-- Copyright Notice -->
      <div class="border-t border-teal-800/50 mt-8 pt-4 text-center text-xs text-gray-300">
        <p>&copy; {{ currentYear }} TechSquad360. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>

<style scoped>
.container {
  max-width: 1200px;
}
</style>
