<template>
  <footer class="bg-gray-900 mt-5 text-white py-10">
    <div class="container mx-auto px-6">
      <!-- Brand Name -->
      <div class="mb-8 text-center md:text-left">
        <h2 class="text-3xl font-bold">TechSquad360</h2>
        <p class="text-sm mt-1">Your partner in digital transformation</p>
      </div>

      <!-- Main Content Area -->
      <div class="grid gap-8 md:grid-cols-3 text-center md:text-left">
        <!-- Quick Links -->
        <div>
          <h3 class="text-lg font-semibold mb-4">Quick Links</h3>
          <ul>
            <li class="mb-2"><a href="#about" class="hover:text-teal-400 transition-colors">About Us</a></li>
            <li class="mb-2"><a href="#services" class="hover:text-teal-400 transition-colors">Services</a></li>
            <li class="mb-2"><a href="#blog" class="hover:text-teal-400 transition-colors">Blog</a></li>
            <li class="mb-2"><a href="#contact" class="hover:text-teal-400 transition-colors">Contact</a></li>
          </ul>
        </div>

        <!-- Services Offered -->
        <div>
          <h3 class="text-lg font-semibold mb-4">Our Services</h3>
          <ul>
            <li class="mb-1">SEO</li>
            <li class="mb-1">Digital Marketing</li>
            <li class="mb-1">Web to App</li>
            <li class="mb-1">Web Development</li>
            <li class="mb-1">Android/Native App Development</li>
            <li class="mb-1">Cybersecurity</li>
            <li class="mb-1">Technical/IT Support</li>
            <li class="mb-1">SaaS Solutions</li>
            <li class="mb-1">Cloud Computing</li>
          </ul>
        </div>

        <!-- Social Media Icons -->
        <div>
          <h3 class="text-lg font-semibold mb-4">Follow Us</h3>
          <div class="flex justify-center md:justify-start space-x-4">
            <a href="#" class="hover:text-teal-400 transition-colors" aria-label="Facebook">
              <i class="fab fa-facebook-f text-2xl"></i>
            </a>
            <a href="#" class="hover:text-teal-400 transition-colors" aria-label="Twitter">
              <i class="fab fa-twitter text-2xl"></i>
            </a>
            <a href="#" class="hover:text-teal-400 transition-colors" aria-label="LinkedIn">
              <i class="fab fa-linkedin-in text-2xl"></i>
            </a>
            <a href="#" class="hover:text-teal-400 transition-colors" aria-label="Instagram">
              <i class="fab fa-instagram text-2xl"></i>
            </a>
          </div>
        </div>
      </div>

      <!-- Copyright Notice -->
      <div class="text-center text-sm mt-8">
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
    font-size: 1.875rem;
  }
}
</style>
