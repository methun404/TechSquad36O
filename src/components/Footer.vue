<template>
  <footer class="bg-gradient-to-r from-[#213A57] to-[#0B6477] mt-4 text-white py-6 md:py-8">
    <div class="container mx-auto px-4">
      <!-- Brand Name -->
      <div class="mb-4 text-center md:text-left">
        <h2 class="text-xl md:text-3xl font-bold">TechSquad360</h2>
        <p class="text-xs md:text-sm mt-1">Your partner in digital transformation</p>
      </div>

      <!-- Main Content Area -->
      <div class="grid gap-4 md:gap-8 md:grid-cols-3 text-center md:text-left">
        <!-- Quick Links -->
        <div>
          <h3 class="text-base md:text-lg font-semibold mb-2">Quick Links</h3>
          <ul>
            <li><a href="#about" class="text-xs md:text-sm hover:text-teal-400 transition-colors">About Us</a></li>
            <li><a href="#services" class="text-xs md:text-sm hover:text-teal-400 transition-colors">Services</a></li>
            <li><a href="#blog" class="text-xs md:text-sm hover:text-teal-400 transition-colors">Blog</a></li>
            <li><a href="#contact" class="text-xs md:text-sm hover:text-teal-400 transition-colors">Contact</a></li>
          </ul>
        </div>

        <!-- Services Offered -->
        <div>
          <h3 class="text-base md:text-lg font-semibold mb-2">Our Services</h3>
          <ul class="space-y-1">
            <li class="text-xs md:text-sm">SEO</li>
            <li class="text-xs md:text-sm">Digital Marketing</li>
            <li class="text-xs md:text-sm">Web to App</li>
            <li class="text-xs md:text-sm">Web Development</li>
            <li class="text-xs md:text-sm">Android/Native App Development</li>
            <li class="text-xs md:text-sm">Cybersecurity</li>
            <li class="text-xs md:text-sm">Technical/IT Support</li>
            <li class="text-xs md:text-sm">SaaS Solutions</li>
            <li class="text-xs md:text-sm">Cloud Computing</li>
          </ul>
        </div>

        <!-- Social Media Icons -->
        <div>
          <h3 class="text-base md:text-lg font-semibold mb-2">Follow Us</h3>
          <div class="flex justify-center md:justify-start space-x-3">
            <a href="#" class="hover:text-teal-400 transition-colors" aria-label="Facebook">
              <i class="fab fa-facebook-f text-xl md:text-2xl"></i>
            </a>
            <a href="#" class="hover:text-teal-400 transition-colors" aria-label="Twitter">
              <i class="fab fa-twitter text-xl md:text-2xl"></i>
            </a>
            <a href="#" class="hover:text-teal-400 transition-colors" aria-label="LinkedIn">
              <i class="fab fa-linkedin-in text-xl md:text-2xl"></i>
            </a>
            <a href="#" class="hover:text-teal-400 transition-colors" aria-label="Instagram">
              <i class="fab fa-instagram text-xl md:text-2xl"></i>
            </a>
          </div>
        </div>
      </div>

      <!-- Copyright Notice -->
      <div class="text-center text-xs md:text-sm mt-4 md:mt-6">
        <p>&copy; 2024 TechSquad360. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.container {
  max-width: 1200px;
}

h2, h3 {
  font-family: 'Helvetica Neue', Arial, sans-serif;
}

a {
  text-decoration: none;
}

@media (max-width: 768px) {
  .text-3xl {
    font-size: 1.5rem;
  }
  .text-lg {
    font-size: 1rem;
  }
  footer {
    padding-bottom: 12px; /* Increased bottom padding for mobile */
  }
}
</style>
