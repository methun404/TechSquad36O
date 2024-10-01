<template>
  <section id="work-done" class="py-16 bg-gray-50 text-gray-900">
    <div class="container mx-auto text-center">
      <h2 class="text-3xl font-bold mb-10">Our Work</h2>
      <p class="max-w-2xl mx-auto mb-10">Check out some of the amazing projects we have delivered to our clients.</p>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div class="bg-white p-4 rounded-lg shadow-md">
          <img src="../assets/logo.svg" alt="Work 1" class="w-full h-40 object-cover rounded-md">
          <h3 class="text-xl font-bold mt-2">Project Title 1</h3>
        </div>
        <div class="bg-white p-4 rounded-lg shadow-md">
          <img src="../assets/logo.svg" alt="Work 2" class="w-full h-40 object-cover rounded-md">
          <h3 class="text-xl font-bold mt-2">Project Title 2</h3>
        </div>
        <div class="bg-white p-4 rounded-lg shadow-md">
          <img src="../assets/logo.svg" alt="Work 3" class="w-full h-40 object-cover rounded-md">
          <h3 class="text-xl font-bold mt-2">Project Title 3</h3>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "WorkDoneSection"
};
</script>
