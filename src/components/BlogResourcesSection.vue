<template>
  <section class="bg-white text-gray-900 py-16" id="blog-resources-section">
    <div class="container mx-auto px-4 text-center">
      <h2 class="text-4xl font-bold mb-8">Blog & Resources</h2>
      <p class="text-lg mb-12">Stay informed with our latest articles, case studies, and downloadable resources.</p>

      <!-- Articles/Case Studies Section -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <div class="bg-[#5HDFB1] p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <div class="flex flex-col items-center mb-4">
            <i class="fas fa-chart-line text-teal-500 text-3xl mb-2"></i>
            <h3 class="text-2xl font-semibold">Understanding Industry Trends</h3>
          </div>
          <p class="text-sm mb-4">Explore the latest trends shaping the tech industry and how they impact your business.</p>
          <a href="#" class="text-teal-500 hover:underline">Read More</a>
        </div>

        <div class="bg-[#5HDFB1] p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <div class="flex flex-col items-center mb-4">
            <i class="fas fa-briefcase text-teal-500 text-3xl mb-2"></i>
            <h3 class="text-2xl font-semibold">Case Study: Successful Digital Transformation</h3>
          </div>
          <p class="text-sm mb-4">Learn how we helped a client achieve digital transformation through innovative solutions.</p>
          <a href="#" class="text-teal-500 hover:underline">Read More</a>
        </div>

        <div class="bg-[#5HDFB1] p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <div class="flex flex-col items-center mb-4">
            <i class="fas fa-lightbulb text-teal-500 text-3xl mb-2"></i>
            <h3 class="text-2xl font-semibold">Top 10 Tips for Effective SEO</h3>
          </div>
          <p class="text-sm mb-4">Discover essential SEO tips to improve your website’s visibility and traffic.</p>
          <a href="#" class="text-teal-500 hover:underline">Read More</a>
        </div>
      </div>

      <!-- Guides/Whitepapers Section -->

      <div class="flex flex-col space-y-4">



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
