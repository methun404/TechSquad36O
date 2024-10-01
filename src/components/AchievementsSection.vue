
5. **AchievementsSection.vue**:

```vue
<template>
  <section id="achievements" class="py-16 bg-gray-50 text-gray-900">
    <div class="container mx-auto text-center">
      <h2 class="text-3xl font-bold mb-10">Our Achievements</h2>
      <p class="max-w-2xl mx-auto mb-10">We are proud to showcase our achievements and milestones that reflect our dedication to quality.</p>
      <div class="flex justify-center space-x-4">
        <div class="p-6 bg-white rounded-lg shadow-md hover:shadow-lg">
          <h3 class="text-xl font-bold">100+</h3>
          <p>Successful Projects</p>
        </div>
        <div class="p-6 bg-white rounded-lg shadow-md hover:shadow-lg">
          <h3 class="text-xl font-bold">50+</h3>
          <p>Happy Clients</p>
        </div>
        <div class="p-6 bg-white rounded-lg shadow-md hover:shadow-lg">
          <h3 class="text-xl font-bold">10+</h3>
          <p>Awards Won</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AchievementsSection"
};
</script>
