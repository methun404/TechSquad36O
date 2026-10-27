<template>
  <section id="work-done" class="py-16 bg-gray-50 text-gray-900">
    <div class="container mx-auto text-center px-4">
      <h2 class="text-3xl font-bold mb-4 text-[#213A57]">Featured Projects</h2>
      <p class="max-w-2xl mx-auto mb-10 text-gray-600">Explore some of the high-impact digital solutions we have engineered for our clients.</p>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
          <div class="w-full h-40 bg-gradient-to-br from-[#213A57] to-[#0B6477] rounded-md flex items-center justify-center text-white mb-4">
            <i class="fas fa-laptop-code text-5xl text-[#0AD1C8]"></i>
          </div>
          <h3 class="text-xl font-bold text-[#213A57] mb-2">Enterprise SaaS Platform</h3>
          <p class="text-gray-600 text-sm">Scalable cloud-native management platform built for modern business workflows.</p>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
          <div class="w-full h-40 bg-gradient-to-br from-[#0B6477] to-[#14919B] rounded-md flex items-center justify-center text-white mb-4">
            <i class="fas fa-mobile-screen text-5xl text-[#5EDFB1]"></i>
          </div>
          <h3 class="text-xl font-bold text-[#213A57] mb-2">Cross-Platform Mobile App</h3>
          <p class="text-gray-600 text-sm">High-performance mobile experience with real-time sync and seamless UX.</p>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
          <div class="w-full h-40 bg-gradient-to-br from-[#14919B] to-[#213A57] rounded-md flex items-center justify-center text-white mb-4">
            <i class="fas fa-shield-halved text-5xl text-[#0AD1C8]"></i>
          </div>
          <h3 class="text-xl font-bold text-[#213A57] mb-2">Security & Cloud Audit</h3>
          <p class="text-gray-600 text-sm">Comprehensive penetration testing and AWS cloud security hardening.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "WorkDoneSection",
};
</script>
