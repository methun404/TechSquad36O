<template>
  <nav class="navbar p-4" id="navbar">
    <div class="container mx-auto flex justify-between items-center max-w-full">
      <a href="#" class="text-lg font-bold">TeamSquad360</a>
      <div class="block md:hidden">
        <button id="menu-toggle" class="focus:outline-none">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
      <ul id="menu" class="hidden md:flex space-x-4 md:space-x-6">
        <li><a href="#services" class="hover:text-teal-400">Services</a></li>
        <li><a href="#about" class="hover:text-teal-400">About</a></li>
        <li><a href="#contact" class="hover:text-teal-400">Contact</a></li>
        <li><a href="#resources" class="hover:text-teal-400">Resources</a></li>
      </ul>
    </div>

    <!-- Mobile Menu -->
    <div id="mobile-menu" class="hidden md:hidden">
      <ul class="flex flex-col space-y-2 mt-2">
        <li><a href="#services" class="block px-4 py-2 hover:bg-gray-700">Services</a></li>
        <li><a href="#about" class="block px-4 py-2 hover:bg-gray-700">About</a></li>
        <li><a href="#contact" class="block px-4 py-2 hover:bg-gray-700">Contact</a></li>
        <li><a href="#resources" class="block px-4 py-2 hover:bg-gray-700">Resources</a></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  mounted() {
    window.onscroll = () => {
      const navbar = document.getElementById('navbar');
      const heroSection = document.getElementById('hero-section');
      const heroBottom = heroSection.offsetHeight; // Height of the hero section
      if (window.scrollY > heroBottom) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };
  }
};
</script>

<style>
.navbar {
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  width: 100%;
  background-color: #213A57;
  color: white;
}

.navbar.scrolled {
  background-color: white;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.navbar.scrolled a {
  color: #000;
}
</style>
