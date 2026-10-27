<template>
  <section class="bg-white text-gray-900 py-16" id="blog-resources-section">
    <div class="container mx-auto px-4 text-center">
      <h2 class="text-4xl font-bold mb-8 text-gray-800">Blog & Resources</h2>
      <p class="text-lg mb-12 text-gray-600 max-w-2xl mx-auto">
        Stay informed with our latest articles, case studies, and insights on modern technology trends.
      </p>

      <!-- Articles/Case Studies Section -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <div class="bg-[#5EDFB1]/25 border border-[#0B6477]/10 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
          <div class="flex flex-col items-center mb-4">
            <i class="fas fa-chart-line text-[#0B6477] text-3xl mb-2"></i>
            <h3 class="text-2xl font-semibold text-[#213A57]">Industry Trends</h3>
          </div>
          <p class="text-sm mb-4 text-gray-700">Explore the latest trends shaping modern tech and digital landscapes.</p>
          <router-link to="/services" class="text-[#0B6477] font-medium hover:underline">Learn More &rarr;</router-link>
        </div>

        <div class="bg-[#5EDFB1]/25 border border-[#0B6477]/10 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
          <div class="flex flex-col items-center mb-4">
            <i class="fas fa-briefcase text-[#0B6477] text-3xl mb-2"></i>
            <h3 class="text-2xl font-semibold text-[#213A57]">Digital Transformation</h3>
          </div>
          <p class="text-sm mb-4 text-gray-700">How businesses achieve scalable growth through tailored tech solutions.</p>
          <router-link to="/about" class="text-[#0B6477] font-medium hover:underline">Learn More &rarr;</router-link>
        </div>

        <div class="bg-[#5EDFB1]/25 border border-[#0B6477]/10 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
          <div class="flex flex-col items-center mb-4">
            <i class="fas fa-lightbulb text-[#0B6477] text-3xl mb-2"></i>
            <h3 class="text-2xl font-semibold text-[#213A57]">SEO Best Practices</h3>
          </div>
          <p class="text-sm mb-4 text-gray-700">Essential strategies to elevate your search presence and drive conversions.</p>
          <router-link to="/services" class="text-[#0B6477] font-medium hover:underline">Learn More &rarr;</router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'BlogResourcesSection',
};
</script>

<style scoped>
.transition-transform {
  transition: transform 0.3s ease;
}
</style>
