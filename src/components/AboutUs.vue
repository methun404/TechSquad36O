<template>
  <section class="about-us bg-gray-100 py-16 text-gray-800">
    <div class="container mx-auto px-4 text-center">
      <!-- Introduction -->
      <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" :class="primaryColor">About TechSquad360</h2>
      <p class="text-base sm:text-lg lg:text-xl mb-12 max-w-3xl mx-auto text-gray-700 leading-relaxed">
        At TechSquad360, we are driven by a mission to provide comprehensive, cutting-edge digital services.
        We empower businesses to thrive with our innovative solutions tailored to meet their unique needs.
      </p>

      <!-- Why Choose Us Section -->
      <h3 class="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-8" :class="primaryColor">Why Choose Us?</h3>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        <!-- Experience Card -->
        <div class="bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition-shadow">
          <div class="mb-4" :class="iconColor1">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 sm:h-12 sm:w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c1.104 0 2 .896 2 2s-.896 2-2 2-2-.896-2-2 .896-2 2-2zm0 10c-3.866 0-7-1.866-7-4V8c0-2.134 3.134-4 7-4s7 1.866 7 4v6c0 2.134-3.134 4-7 4z" />
            </svg>
          </div>
          <h4 class="text-lg sm:text-xl lg:text-2xl font-bold mb-2">Years of Experience</h4>
          <p class="text-gray-600 text-sm sm:text-base">
            Leverage our years of expertise across various digital service domains to accelerate your growth.
          </p>
        </div>

        <!-- Services Card -->
        <div class="bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition-shadow">
          <div class="mb-4" :class="iconColor2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 sm:h-12 sm:w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6M9 8h6m-2-4h4a2 2 0 012 2v12a2 2 0 01-2 2h-4l-4 4V4l4-4z" />
            </svg>
          </div>
          <h4 class="text-lg sm:text-xl lg:text-2xl font-bold mb-2">Comprehensive Services</h4>
          <p class="text-gray-600 text-sm sm:text-base">
            From SEO to cloud computing, we offer a full range of digital services tailored to your business needs.
          </p>
        </div>

        <!-- Client Success Card -->
        <div class="bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition-shadow">
          <div class="mb-4" :class="iconColor3">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 sm:h-12 sm:w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 7l-9-5V7l9 5 9-5v9l-9 5z" />
            </svg>
          </div>
          <h4 class="text-lg sm:text-xl lg:text-2xl font-bold mb-2">Client Success Stories</h4>
          <p class="text-gray-600 text-sm sm:text-base">
            Our solutions have consistently helped clients achieve their goals and transform their businesses.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutUs',
  data() {
    return {
      primaryColor: 'text-[#213A57]',  // Adjusts to #213A57 (dark blue)
      iconColor1: 'text-[#14919B]',    // Adjusts to #14919B (cyan-like)
      iconColor2: 'text-[#0B6477]',    // Adjusts to #0B6477 (blue-green)
      iconColor3: 'text-[#0AD1C8]',    // Adjusts to #0AD1C8 (light teal)
    };
  }
};
</script>

<style scoped>
.about-us {
  background-color: #f7fafc;
}
</style>
