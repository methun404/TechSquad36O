<template>
  <div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
    <component :is="icon" class="w-10 h-10 text-indigo-500 mx-auto mb-4"/>
    <h3 class="text-xl font-semibold text-gray-800">{{ title }}</h3>
    <p class="text-gray-600 mt-2">{{ description }}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    description: String,
    icon: String,
  },
};
</script>
