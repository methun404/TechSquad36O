<template>
  <section id="resources" class="py-8 md:py-16 bg-white text-gray-900">
    <div class="container mx-auto text-center px-4 md:px-0">
      <h2 class="text-2xl md:text-3xl font-bold mb-6 md:mb-10 text-gray-800">SEO Tools and Resources</h2>
      <p class="max-w-xl mx-auto mb-6 md:mb-10 text-sm md:text-base text-gray-700">
        Access our recommended tools and resources to improve your digital marketing and SEO efforts.
      </p>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">

        <!-- Keyword Planner Card -->
        <div class="p-4 md:p-6 bg-gray-100 text-gray-900 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105">
          <i class="fas fa-search text-teal-500 text-3xl md:text-4xl mb-4"></i>
          <h3 class="text-lg md:text-xl font-bold mb-2">Keyword Planner</h3>
          <p class="text-sm md:text-base">Discover new keywords and track your rankings.</p>
        </div>

        <!-- SEO Analytics Card -->
        <div class="p-4 md:p-6 bg-gray-100 text-gray-900 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105">
          <i class="fas fa-chart-line text-teal-500 text-3xl md:text-4xl mb-4"></i>
          <h3 class="text-lg md:text-xl font-bold mb-2">SEO Analytics</h3>
          <p class="text-sm md:text-base">Analyze your website's performance and traffic.</p>
        </div>

        <!-- Backlink Checker Card -->
        <div class="p-4 md:p-6 bg-gray-100 text-gray-900 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105">
          <i class="fas fa-bullseye text-teal-500 text-3xl md:text-4xl mb-4"></i>
          <h3 class="text-lg md:text-xl font-bold mb-2">Backlink Checker</h3>
          <p class="text-sm md:text-base">Monitor your backlinks and improve your SEO strategy.</p>
        </div>

        <!-- SEO Tools Card -->
        <div class="p-4 md:p-6 bg-gray-100 text-gray-900 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105">
          <i class="fas fa-cogs text-teal-500 text-3xl md:text-4xl mb-4"></i>
          <h3 class="text-lg md:text-xl font-bold mb-2">SEO Tools</h3>
          <p class="text-sm md:text-base">Explore a collection of essential SEO tools.</p>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "SeoToolsSection"
};
</script>

<style scoped>
.hover\:scale-105:hover {
  transform: scale(1.05);
}
</style>
