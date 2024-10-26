<template>
  <nav :class="{'navbar-scrolled': scrolled, 'navbar': !scrolled}" class="navbar p-4 fixed top-0 w-full z-50 transition-all duration-300 ease-in-out">
    <div class="container mx-auto flex justify-between items-center">
      <!-- Company Logo -->
      <a href="#" class="flex items-center">
        <img src="../assets/main_logo.png" alt="TeamSquad360 Logo" class="h-10 md:h-12 mr-3" />
        <span :class="{'text-black': scrolled, 'text-white': !scrolled}" class="text-xl md:text-2xl font-bold">TechSquad360</span>
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
          <a :class="{'text-black': scrolled, 'text-white': !scrolled}" href="#services" class="nav-link">Services</a>
        </li>
        <li>
          <a :class="{'text-black': scrolled, 'text-white': !scrolled}" href="#about" class="nav-link">About</a>
        </li>
        <li>
          <a :class="{'text-black': scrolled, 'text-white': !scrolled}" href="#contact" class="nav-link">Contact</a>
        </li>
        <li>
          <a :class="{'text-black': scrolled, 'text-white': !scrolled}" href="#resources" class="nav-link">Resources</a>
        </li>
      </ul>
    </div>

    <!-- Mobile Menu -->
    <div id="mobile-menu" class="hidden md:hidden">
      <ul class="flex flex-col space-y-2 mt-2">
        <li><a :class="{'text-black': scrolled, 'text-white': !scrolled}" href="#services" class="block px-4 py-2 hover:bg-teal-600 rounded-lg transition">Services</a></li>
        <li><a :class="{'text-black': scrolled, 'text-white': !scrolled}" href="#about" class="block px-4 py-2 hover:bg-teal-600 rounded-lg transition">About</a></li>
        <li><a :class="{'text-black': scrolled, 'text-white': !scrolled}" href="#contact" class="block px-4 py-2 hover:bg-teal-600 rounded-lg transition">Contact</a></li>
        <li><a :class="{'text-black': scrolled, 'text-white': !scrolled}" href="#resources" class="block px-4 py-2 hover:bg-teal-600 rounded-lg transition">Resources</a></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      scrolled: false,
      heroSection: null
    };
  },
  mounted() {
    // Get the hero section element
    this.heroSection = document.getElementById('hero-section');

    // Set up scroll event listener
    window.addEventListener('scroll', this.handleScroll);

    // Initial check
    this.handleScroll();
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      if (this.heroSection) {
        const { bottom } = this.heroSection.getBoundingClientRect();
        this.scrolled = bottom < 0; // Change navbar state if hero section is hidden
      }
    }
  }
};
</script>

<style scoped>
.navbar {
  background-color: #213A57; /* Default color */
  color: white; /* Default text color */
  transition: background-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease; /* Smooth transition */
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15); /* Subtle shadow for floating effect */
  border-radius: 4px; /* Slightly rounded corners */
}

.navbar-scrolled {
  background-color: white; /* Background color when scrolled */
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.2); /* Moderate shadow for scrolled state */
}

.nav-link {
  text-decoration: none;
  padding: 0.5rem 1rem;
  transition: color 0.3s ease, background-color 0.3s ease; /* Smooth transition */
}

.nav-link:hover {
  color: #1D4ED8; /* Change text color on hover */
  background-color: rgba(29, 78, 216, 0.1); /* Light background on hover */
}
</style>
