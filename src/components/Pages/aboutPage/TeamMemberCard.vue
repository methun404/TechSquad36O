<template>
  <div class="w-48 bg-white p-4 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
    <img :src="img" alt="Team member" class="rounded-full w-24 h-24 mx-auto mb-4"/>
    <h4 class="text-lg font-medium text-gray-800">{{ name }}</h4>
    <p class="text-indigo-500">{{ role }}</p>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    role: String,
    img: String,
  },
};
</script>
