<template>
  <nav class="navbar p-4" id="navbar">
    <div class="container mx-auto flex justify-between items-center max-w-full">
      <!-- Company Logo -->
      <a href="#" class="flex items-center">
        <img src="../assets/main_logo.png" alt="TeamSquad360 Logo" class="h-10 md:h-12 mr-3" />
        <span class="text-xl md:text-2xl font-bold text-teal-500">TeamSquad360</span>
      </a>

      <div class="block md:hidden">
        <button id="menu-toggle" class="focus:outline-none">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>

      <ul id="menu" class="hidden md:flex space-x-8">
        <li>
          <a href="#services" class="nav-link">Services</a>
        </li>
        <li>
          <a href="#about" class="nav-link">About</a>
        </li>
        <li>
          <a href="#contact" class="nav-link">Contact</a>
        </li>
        <li>
          <a href="#resources" class="nav-link">Resources</a>
        </li>
      </ul>
    </div>

    <!-- Mobile Menu -->
    <div id="mobile-menu" class="hidden md:hidden">
      <ul class="flex flex-col space-y-2 mt-2">
        <li><a href="#services" class="block px-4 py-2 hover:bg-teal-600 rounded-lg transition">Services</a></li>
        <li><a href="#about" class="block px-4 py-2 hover:bg-teal-600 rounded-lg transition">About</a></li>
        <li><a href="#contact" class="block px-4 py-2 hover:bg-teal-600 rounded-lg transition">Contact</a></li>
        <li><a href="#resources" class="block px-4 py-2 hover:bg-teal-600 rounded-lg transition">Resources</a></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  mounted() {
    const navbar = document.getElementById('navbar');
    const heroSection = document.getElementById('hero-section');

    const observerOptions = {
      root: null,  // relative to the viewport
      threshold: 0.1,  // trigger when 10% of hero section is visible
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navbar.classList.remove('scrolled');
        } else {
          navbar.classList.add('scrolled');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    observer.observe(heroSection);
  }
};
</script>

<style scoped>
.navbar {
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  width: 100%;
  background-color: #213A57; /* Default color */
  color: white;
}

.navbar.scrolled {
  background-color: white; /* Change background to white when scrolled */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.nav-link {
  color: white; /* Default text color */
  text-decoration: none;
  padding: 0.5rem 1rem;
  transition: color 0.3s ease; /* Smooth transition */
}

.nav-link:hover {
  color: #1D4ED8; /* Change text color on hover */
}

.navbar.scrolled .nav-link {
  color: #000; /* Change text color to black when scrolled */
}
</style>
