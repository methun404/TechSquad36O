<template>
  <nav
      :class="{
      'navbar-scrolled': scrolled && isHomePage,
      'navbar': !scrolled || !isHomePage
    }"
      class="navbar p-4 fixed top-0 w-full z-50 transition-all duration-300 ease-in-out"
  >
    <div class="flex justify-between items-center w-full">
      <!-- Company Logo and Name -->
      <router-link to="/" class="flex items-center">
        <img
            src="../assets/main_logo.png"
            alt="TeamSquad360 Logo"
            :class="scrolled && isHomePage ? 'invert' : ''"
            class="h-10 md:h-12 mr-3"
        />
        <span
            :class="{
            'text-black': scrolled && isHomePage,
            'text-white': !(scrolled && isHomePage)
          }"
            class="text-xl md:text-2xl font-bold"
        >
          TechSquad360
        </span>
      </router-link>

      <!-- Mobile Menu Icon -->
      <div class="block md:hidden">
        <button @click="toggleMenu" class="focus:outline-none">
          <svg
              v-if="!menuOpen"
              :class="{
              'text-black': scrolled && isHomePage,
              'text-white': !(scrolled && isHomePage)
            }"
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
          >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
          <svg
              v-else
              :class="{
              'text-black': scrolled && isHomePage,
              'text-white': !(scrolled && isHomePage)
            }"
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
          >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
      </div>

      <!-- Desktop Menu -->
      <ul
          id="menu"
          class="hidden md:flex space-x-8 ml-auto"
      >
        <li>
          <router-link
              :class="{
              'text-black': scrolled && isHomePage,
              'text-white': !(scrolled && isHomePage)
            }"
              to="/"
              class="nav-link"
          >
            Home
          </router-link>
        </li>
        <li>
          <router-link
              :class="{
              'text-black': scrolled && isHomePage,
              'text-white': !(scrolled && isHomePage)
            }"
              to="/services"
              class="nav-link"
          >
            Services
          </router-link>
        </li>
        <li>
          <router-link
              :class="{
              'text-black': scrolled && isHomePage,
              'text-white': !(scrolled && isHomePage)
            }"
              to="/about"
              class="nav-link"
          >
            About
          </router-link>
        </li>
        <li>
          <router-link
              :class="{
              'text-black': scrolled && isHomePage,
              'text-white': !(scrolled && isHomePage)
            }"
              to="/contact"
              class="nav-link"
          >
            Contact
          </router-link>
        </li>
      </ul>

      <!-- Mobile Menu -->
      <ul
          v-if="menuOpen"
          :class="{
          'bg-white text-black': scrolled && isHomePage,
          'bg-[#1E4360] text-white': !(scrolled && isHomePage)
        }"
          class="absolute top-full left-0 w-full flex flex-col items-center space-y-4 py-4 md:hidden transition-all duration-300 ease-in-out"
      >
        <li>
          <router-link
              @click="closeMenu"
              to="/"
              class="nav-link"
          >
            Home
          </router-link>
        </li>
        <li>
          <router-link
              @click="closeMenu"
              to="/services"
              class="nav-link"
          >
            Services
          </router-link>
        </li>
        <li>
          <router-link
              @click="closeMenu"
              to="/about"
              class="nav-link"
          >
            About
          </router-link>
        </li>
        <li>
          <router-link
              @click="closeMenu"
              to="/contact"
              class="nav-link"
          >
            Contact
          </router-link>
        </li>
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
      isHomePage: false,
      menuOpen: false, // Track the mobile menu state
    };
  },
  mounted() {
    this.checkRoute();
    window.addEventListener("scroll", this.handleScroll);
    this.$router.afterEach(this.checkRoute); // Update the route info when navigating
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const heroHeight = 600; // Adjust this to match your hero section's height
      this.scrolled = window.scrollY > heroHeight;
    },
    checkRoute() {
      this.isHomePage = this.$route.path === "/";
    },
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    closeMenu() {
      this.menuOpen = false; // Close the mobile menu after a link click
    },
  },
};
</script>

<style scoped>
.navbar {
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  background-color: #1e4360; /* Default background color */
  color: white; /* Default text color */
  transition: background-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease;
}

.navbar-scrolled {
  background-color: white; /* Background color after scrolling */
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.2); /* Scrolled shadow */
}

.nav-link {
  text-decoration: none;
  padding: 0.5rem 1rem;
  transition: color 0.3s ease, background-color 0.3s ease;
}

.nav-link:hover {
  color: #1d4ed8;
  background-color: rgba(255, 255, 255, 0.1);
}
</style>
